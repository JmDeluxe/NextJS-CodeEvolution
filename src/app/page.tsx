"use client";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <>
      <h1>Hello</h1>
      <button
        onClick={() => {
          router.push("/blog");
        }}
      >
        Blog
      </button>
    </>
  );
}
