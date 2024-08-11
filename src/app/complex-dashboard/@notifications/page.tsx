import Card from "@/app/components/card";
import Link from "next/link";
import React from "react";

const Notifications = () => {
  return (
    <>
      <Card>
        <h2>Notifications</h2>
        <Link href="/complex-dashboard/archived">Archived</Link>
      </Card>
    </>
  );
};

export default Notifications;
