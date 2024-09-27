"use client";

import { useSession } from "next-auth/react";

export const Profile = () => {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (session?.user) {
    return <div>From client: {JSON.stringify(session.user)}</div>;
  }

  return <div>From client: user is signed out</div>;
};
