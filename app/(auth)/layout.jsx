import Link from "next/link";
import React from "react";

export default function AuthLayout({ children }) {
  return (
    <>
      <nav>
        <h1>Next Ticket Master</h1>
        <Link href="/signup">Login</Link>
        <Link href="/login">Signup</Link>
      </nav>
      {children}
    </>
  );
}
