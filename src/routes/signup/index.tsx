import { component$ } from "@builder.io/qwik";
import { Form, routeLoader$ } from "@builder.io/qwik-city";
import type { DocumentHead } from "@builder.io/qwik-city";
import { useRegister } from "~/components/api/post";

export { useRegister };

export const useRedirectIfAuthed = routeLoader$(({ cookie, redirect }) => {
  if (cookie.get("accessToken")?.value) {
    throw redirect(302, "/admin");
  }
});

export default component$(() => {
  useRedirectIfAuthed();
  const registerAction = useRegister();

  return (
    <div class="w-full min-h-screen flex items-center justify-center bg-gray-100 px-4 py-8">
      <div class="w-[500px] max-w-full bg-white border-2 border-gray-200 flex flex-col">
        <div class="w-full h-10 flex flex-row border-b-2 border-gray-200">
          <div class="w-14 h-10 bg-gray-100 justify-center items-center flex border-b-2 border-r-2 border-blue-300">
            <i class="bi bi-person-plus"></i>
          </div>
          <div class="flex justify-center items-center p-2">
            <h2 class="font-bold">Sign Up</h2>
          </div>
          <div class="flex justify-center items-center p-2 h-10 w-auto min-w-0 flex-1">
            <p class="font-bold text-[14px] opacity-50 truncate">
              CREATE YOUR ERP ACCOUNT
            </p>
          </div>
          <div class="w-auto h-10 justify-center items-center flex p-2 border-l-2 border-gray-200 shrink-0">
            <p class="font-bold text-[14px] opacity-50 p-2">AUTH 002</p>
          </div>
        </div>

        <div class="flex flex-col px-8 py-5 gap-5">
          <Form action={registerAction} class="flex flex-col gap-4">
            <p class="text-[11px] text-gray-400">
              Register your company to access BlissMontERP.
            </p>

            {registerAction.value?.failed && (
              <p class="text-[12px] text-red-600 bg-red-50 border border-red-200 px-3 py-2">
                {registerAction.value.message ?? "Sign up failed. Please try again."}
              </p>
            )}

            <div class="flex flex-col gap-1">
              <label class="text-[10px] font-bold tracking-widest text-gray-500 uppercase" for="email">
                Email Address
              </label>
              <div class="flex flex-row items-center border border-blue-300 bg-blue-50 px-3 gap-2">
                <i class="bi bi-envelope text-gray-400 text-sm"></i>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autocomplete="email"
                  placeholder="you@example.com"
                  class="flex-1 bg-transparent outline-none text-[13px] py-2 text-gray-700 placeholder:text-gray-400"
                />
              </div>
            </div>

            <div class="flex flex-col gap-1">
              <label
                class="text-[10px] font-bold tracking-widest text-gray-500 uppercase"
                for="mobile_number"
              >
                Mobile Number
              </label>
              <div class="flex flex-row items-center border border-gray-300 bg-white px-3 gap-2">
                <i class="bi bi-phone text-gray-400 text-sm"></i>
                <input
                  id="mobile_number"
                  name="mobile_number"
                  type="tel"
                  required
                  autocomplete="tel"
                  placeholder="+1 555 000 0000"
                  class="flex-1 bg-transparent outline-none text-[13px] py-2 text-gray-700 placeholder:text-gray-400"
                />
              </div>
            </div>

            <div class="flex flex-col gap-1">
              <label
                class="text-[10px] font-bold tracking-widest text-gray-500 uppercase"
                for="company_name"
              >
                Company Name
              </label>
              <div class="flex flex-row items-center border border-gray-300 bg-white px-3 gap-2">
                <i class="bi bi-building text-gray-400 text-sm"></i>
                <input
                  id="company_name"
                  name="company_name"
                  type="text"
                  required
                  autocomplete="organization"
                  placeholder="Your company"
                  class="flex-1 bg-transparent outline-none text-[13px] py-2 text-gray-700 placeholder:text-gray-400"
                />
              </div>
            </div>

            <div class="flex flex-col gap-1">
              <label class="text-[10px] font-bold tracking-widest text-gray-500 uppercase" for="password">
                Password
              </label>
              <div class="flex flex-row items-center border border-gray-300 bg-white px-3 gap-2">
                <i class="bi bi-lock text-gray-400 text-sm"></i>
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  minLength={6}
                  autocomplete="new-password"
                  placeholder="••••••••••••"
                  class="flex-1 bg-transparent outline-none text-[13px] py-2 text-gray-700 placeholder:text-gray-400"
                />
              </div>
            </div>

            <div class="flex flex-col gap-1">
              <label
                class="text-[10px] font-bold tracking-widest text-gray-500 uppercase"
                for="confirm_password"
              >
                Confirm Password
              </label>
              <div class="flex flex-row items-center border border-gray-300 bg-white px-3 gap-2">
                <i class="bi bi-lock-fill text-gray-400 text-sm"></i>
                <input
                  id="confirm_password"
                  name="confirm_password"
                  type="password"
                  required
                  minLength={6}
                  autocomplete="new-password"
                  placeholder="••••••••••••"
                  class="flex-1 bg-transparent outline-none text-[13px] py-2 text-gray-700 placeholder:text-gray-400"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={registerAction.isRunning}
              class="w-full bg-blue-700 hover:bg-blue-800 disabled:opacity-60 text-white text-[13px] font-semibold py-2.5 flex items-center justify-center gap-2 transition-colors"
            >
              <i class="bi bi-person-plus"></i>
              {registerAction.isRunning ? "Creating account..." : "Sign Up for BlissMontERP"}
            </button>
          </Form>

          <div class="flex flex-col gap-2 border-t border-gray-200 pt-4">
            <p class="text-center text-[12px] text-gray-400">
              <i class="bi bi-box-arrow-in-right mr-1"></i>
              Already have an account?{" "}
              <a href="/" class="text-blue-600 font-semibold hover:underline">
                Sign In
              </a>
            </p>
            <div class="flex justify-center gap-4 text-[10px] text-gray-300">
              <span>© 2026 BlissMontERP Inc.</span>
              <a href="#" class="hover:text-gray-500">Privacy Policy</a>
              <a href="#" class="hover:text-gray-500">Terms of Use</a>
              <a href="#" class="hover:text-gray-500">Support</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

export const head: DocumentHead = {
  title: "Sign Up — blissmont-ERP",
  meta: [
    {
      name: "description",
      content: "Create your BlissMontERP account",
    },
  ],
};
