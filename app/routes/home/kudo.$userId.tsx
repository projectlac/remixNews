// app/routes/home/kudo.$userId.tsx

import type { LoaderFunction } from "@remix-run/node";
import { json, redirect } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { getUserById } from "~/utils/users.server";
import { Portal } from "~/components/portal";
// 1
export const loader: LoaderFunction = async ({ request, params }) => {
  const { userId } = params;

  if (typeof userId !== "string") {
    return redirect("/home");
  }

  const recipient = await getUserById(userId);

  return json({ recipient });
};
export default function KudoModal() {
  // 3
  const { recipient } = useLoaderData();

  return <Portal wrapperId="kudo-modal">{recipient.id}</Portal>;
}
