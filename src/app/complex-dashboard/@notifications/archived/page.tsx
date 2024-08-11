import Card from "@/app/components/card";
import Link from "next/link";
import React from "react";

const ArchivedNotifications = () => {
  return (
    <>
      <Card>
        <h1>Archived Notifications</h1>
        <Link href="/complex-dashboard">Archived</Link>
      </Card>
    </>
  );
};

export default ArchivedNotifications;
