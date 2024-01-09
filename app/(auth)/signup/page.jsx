// "use client" is a directive indicating client-side behavior
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

// components
import AuthForm from "../AuthForm";

export default function Signup() {
  const router = useRouter(); // Initializing Next.js router
  const [error, setError] = useState(""); // State to manage error messages

  const handleSubmit = async (e, email, password) => {
    e.preventDefault();

    // Creating a supabase client instance
    const supabase = createClientComponentClient();

    // Signing up the user using supabase authentication
    const { error: signUpError } = await supabase.auth.signUp({
      email,
      password,
      option: {
        emailRedirectTo: `${location.origin}/api/auth/callback`,
      },
    });

    // Handling duplicate email error
    if (
      signUpError &&
      signUpError.message.includes(
        "duplicate key value violates unique constraint"
      )
    ) {
      setError("Email already exists. Please log in instead.");
      return;
    }

    // Handling other errors
    if (signUpError) {
      setError(signUpError.message);
      return;
    }

    // Handle successful signup
    router.push("/verify"); // Navigating to the verification page
  };

  return (
    <main>
      <h2 className="text-center">Sign up</h2>
      {/* AuthForm component for user input */}
      <AuthForm handleSubmit={handleSubmit} />
      {error && <div className="error">{error}</div>}{" "}
      {/* Display error if exists */}
    </main>
  );
}
