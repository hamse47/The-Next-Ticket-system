// "use client" is a directive indicating client-side behavior
"use client";

import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";

export default function LogoutButton() {
  // Initializing Next.js router
  const router = useRouter();

  // Function to handle logout
  const handleLogout = async () => {
    // Creating a supabase client instance
    const supabase = createClientComponentClient();

    // Attempting to sign out
    const { error } = await supabase.auth.signOut();

    // Navigate to login page after logout
    router.push("/login");
  };

  // Rendering the logout button with a click event
  return (
    <button
      className="text-primary text-xl font-bold mr-6"
      onClick={handleLogout}
    >
      Logout
    </button>
  );
}
