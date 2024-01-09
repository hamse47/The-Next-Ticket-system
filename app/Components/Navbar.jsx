import Link from "next/link";
import Image from "next/image";
import Logo from "./Next-Logo.png";

export default function Navbar({ user }) {
  return (
    <nav>
      <a href="/">
        <Image
          src={Logo}
          alt="Next Helpdesk Logo"
          width={80}
          quality={100}
          placeholder="blur"
        />
      </a>
      The Next Ticket HelpDesk
      <Link href="/">Dashboard</Link>
      <Link href="/tickets">Tickets</Link>
      {user && <span>Welcome, {user.email}</span>}
    </nav>
  );
}
