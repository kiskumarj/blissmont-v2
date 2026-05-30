import { routeAction$ } from "@builder.io/qwik-city";
import { ENV } from "~/config/env";

interface LoginResponse {
  access_token: string;
  token_type: string;
  data?: {
    id: number;
    email: string;
    company_name: string;
  };
}

export const useLogin = routeAction$(async (data, { cookie, redirect, fail, url }) => {
  const email = data.email?.toString().trim() ?? "";
  const password = data.password?.toString() ?? "";

  if (!email || !password) {
    return fail(400, { message: "Email and password are required." });
  }

  const res = await fetch(`${ENV.BASE_URL}/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });

  if (!res.ok) {
    const body = await res.json().catch(() => ({}));
    const message =
      typeof body.error === "string" ? body.error : "Invalid email or password.";
    return fail(401, { message });
  }

  const json = (await res.json()) as LoginResponse;

  if (!json.access_token) {
    return fail(500, { message: "Login succeeded but no access token was returned." });
  }

  cookie.set("accessToken", json.access_token, {
    path: "/",
    httpOnly: true,
    secure: import.meta.env.PROD,
    sameSite: "lax",
    maxAge: 60 * 60 * 24,
  });

  const returnTo = url.searchParams.get("redirect");
  const destination =
    returnTo && returnTo.startsWith("/") && !returnTo.startsWith("//")
      ? returnTo
      : "/admin";

  throw redirect(302, destination);
});

export const useRegister = routeAction$(async (data, { redirect, fail }) => {
  const email = data.email?.toString().trim() ?? "";
  const mobile_number = data.mobile_number?.toString().trim() ?? "";
  const company_name = data.company_name?.toString().trim() ?? "";
  const password = data.password?.toString() ?? "";
  const confirmPassword = data.confirm_password?.toString() ?? "";

  if (!email || !mobile_number || !company_name || !password) {
    return fail(400, { message: "All fields are required." });
  }

  if (password.length < 6) {
    return fail(400, { message: "Password must be at least 6 characters." });
  }

  if (password !== confirmPassword) {
    return fail(400, { message: "Passwords do not match." });
  }

  const res = await fetch(`${ENV.BASE_URL}/auth/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, mobile_number, company_name, password }),
  });

  if (!res.ok) {
    const body = await res.json().catch(() => ({}));
    const message =
      typeof body.error === "string" ? body.error : "Registration failed. Please try again.";
    return fail(400, { message });
  }

  throw redirect(302, "/?registered=1");
});

export const useLogout = routeAction$(async (_, { cookie, redirect, request }) => {
  const cookieHeader = request.headers.get("cookie") ?? "";

  try {
    await fetch(`${ENV.BASE_URL}/auth/logout`, {
      method: "POST",
      headers: { cookie: cookieHeader },
    });
  } catch {
    // Clear local session even if API is unreachable
  }

  cookie.delete("accessToken", { path: "/" });

  throw redirect(302, "/");
});
