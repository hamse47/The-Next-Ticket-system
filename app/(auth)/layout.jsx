import Link from "next/link";
import React from "react";

export default function AuthLayout({ children }) {
  return (
    <>
      <nav>
        <h1>Next Ticket Master</h1>
        <Link href="/signup">Signup</Link>
        <Link href="/login">Login</Link>
      </nav>
      {children}
    </>
  );
}
