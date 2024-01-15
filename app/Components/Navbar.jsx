import Link from "next/link";
import Image from "next/image";
import Logo from "./Next-Logo.png";
import LogoutButton from "./LogoutButton";

export default function Navbar({ user }) {
  // Extracting the username without the ".com"
  const usernameWithoutDotCom = user?.email.split("@")[0];

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
      <Link href="/tickets" className="mr-auto">
        Tickets
      </Link>
      {user && <span>Welcome, {usernameWithoutDotCom}</span>}
      <LogoutButton />
    </nav>
  );
}
