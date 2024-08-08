import React from "react";
import Link from "next/link";

const Profile = () => {
  return (
    <>
      <h1>Profile</h1>
      <Link href="/blog">Blog</Link>
      <Link href="/product">Product</Link>
    </>
  );
};

export default Profile;
