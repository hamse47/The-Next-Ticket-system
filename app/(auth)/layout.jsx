import Link from "next/link";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function AuthLayout({ children }) {
  // Create a Supabase client instance
  const supabase = createServerComponentClient({ cookies });

  // Retrieve the current session data from Supabase
  const { data } = await supabase.auth.getSession();

  // Check if there is an active session; otherwise, redirect to the login page
  if (data.session) {
    redirect("/");
  }

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
