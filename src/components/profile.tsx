"use client";

import { useSession } from "next-auth/react";

export function Profile() {
  const session = useSession();

  if (session.data?.user) {
    return (
      <div>
        <h1>Client user signed in</h1>
        <p>{JSON.stringify(session.data.user)}</p>
      </div>
    );
  } else {
    return (
      <div>
        <h1>Client user not signed in</h1>
      </div>
    );
  }
}
