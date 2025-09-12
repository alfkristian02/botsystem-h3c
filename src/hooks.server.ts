import type { Handle } from "@sveltejs/kit";
import { ACCESS_KEY } from "$env/static/private";

export const handle: Handle = async ({ event, resolve }) => {
  const key = event.url.searchParams.get("key");

  if (key !== ACCESS_KEY || key === undefined) {
    return new Response("Unauthorized", { status: 401 });
  }

  return resolve(event);
};
