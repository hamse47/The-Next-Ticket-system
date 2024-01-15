// Import necessary modules and components
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

// Import the Navbar component
import Navbar from "@/app/components/Navbar";

// DashboardLayout component that wraps the application layout
export default async function DashboardLayout({ children }) {
  // Create a Supabase client instance
  const supabase = createServerComponentClient({ cookies });

  // Retrieve the current session data from Supabase
  const { data } = await supabase.auth.getSession();

  // Check if there is an active session; otherwise, redirect to the login page
  if (!data.session) {
    redirect("/login");
  }

  // Render the Navbar component with the user information and the child components
  return (
    <>
      <Navbar user={data.session.user} />
      {children}
    </>
  );
}
