"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function AuthLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  const navLink = [
    {
      name: "Login",
      href: "/login",
    },
    {
      name: "Register",
      href: "/register",
    },
    {
      name: "Forgot Password",
      href: "/forgot-password",
    },
  ];

  const pathname = usePathname();
  const [input, setInput] = useState("");

  return (
    <section>
      <div>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      </div>
      {children}
      {navLink.map((link) => {
        const isActive = pathname.startsWith(link.href);

        return (
          <Link key={link.name}
            href={link.href}
            className={isActive ? "font-bold mr-4" : "text-blue-500 mr-4"}
          >
            {link.name}
          </Link>
        );
      })}
      <h2>Inner Layout</h2>
    </section>
  );
}
