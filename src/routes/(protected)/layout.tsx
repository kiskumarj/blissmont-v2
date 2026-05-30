import { component$, Slot } from "@builder.io/qwik";
import type { RequestHandler } from "@builder.io/qwik-city";

export const onRequest: RequestHandler = ({ cookie, redirect, url }) => {
  const accessToken = cookie.get("accessToken")?.value;

  if (!accessToken) {
    const returnTo = encodeURIComponent(url.pathname + url.search);
    throw redirect(302, `/?redirect=${returnTo}`);
  }
};

export default component$(() => {
  return <Slot />;
});
