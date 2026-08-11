import React from "react";
import PaymentPage from "@/components/PaymentPage";
import { notFound } from "next/navigation";
import { fetchuser } from "@/actions/useractions";

const Username = async ({ params }) => {
  const { username } = await params;

  //  Check if the username is inot present in the database, show a 404 page
  const user = await fetchuser(username)
  if (!user) {
    return notFound()
  }

  return <PaymentPage username={username} />;
};

export default Username;