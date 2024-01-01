import React from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "./Next-Logo.png";

export default function Navbar() {
  return (
    <nav>
      <Image
        src={Logo}
        alt="Next Helpdesk Logo"
        width={80}
        quality={100}
        placeholder="blur"
      />
      The Next Ticket HelpDesk
      <Link href="/">Dashboard</Link>
      <Link href="/tickets">Tickets</Link>
    </nav>
  );
}
