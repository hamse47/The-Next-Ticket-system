import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

// components
import Navbar from "@/app/components/Navbar";

export default async function DashboardLayout({ children }) {
  let user = null;

  try {
    const supabase = createServerComponentClient({ cookies });

    // getting the current session and extracting the data from it
    const { data } = await supabase.auth.getSession();

    // Checking if data and user information exist before accessing it
    if (data && data.session && data.session.user) {
      user = data.session.user;
    }
  } catch (error) {
    console.error("Error fetching user data:", error);
  }

  return (
    <>
      <Navbar user={user} />
      {children}
    </>
  );
}
