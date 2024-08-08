"use client";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";


const navLink = [
  {
    name: "Login",
    href: "/login",
  },
  {
    name: "Register",
    href: "/regsiter",
  },
  {
    name: "Forgot Password",
    href: "/forgot-password",
  },
];

const Register = () => {
  const pathname = usePathname();

  return (
    <div>
      {navLink.map((link) => {
        const isActive = pathname.startsWith(link.href);

        return (
          <Link
            href={link.href}
            className={isActive ? "font-bold mr-4" : "text-blue-500 mr-4"}
          >
            {link.name}
          </Link>
        );
      })}
    </div>
  );
};

export default Register;
