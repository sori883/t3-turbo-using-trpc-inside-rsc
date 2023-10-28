"use server";

import { api } from "~/utils/server";

export default async function SampleServer() {
  const hello = await api.post.protectedPing.query({ text: "from server" });
  return (
    <div>
      <p>{hello ? hello.greeting : "Loading tRPC query..."}</p>
    </div>
  );
}
