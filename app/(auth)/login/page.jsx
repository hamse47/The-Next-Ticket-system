// "use client" is a directive indicating client-side behavior
"use client";

// Importing necessary hooks and components
import { useState } from "react";
import { useRouter } from "next/navigation";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

// Importing the AuthForm component
import AuthForm from "../AuthForm";

// Login component function
export default function Login() {
  // Initializing Next.js router
  const router = useRouter();

  // State to manage error messages
  const [error, setError] = useState("");

  // Function to handle form submission
  const handleSubmit = async (e, email, password) => {
    // Preventing the default form submission
    e.preventDefault();

    // Clearing previous error messages
    setError("");

    // Creating a supabase client instance
    const supabase = createClientComponentClient();

    // Signing in with email and password
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    // Handling errors and navigating on successful login
    if (error) {
      setError(error.message);
    }
    if (!error) {
      router.push("/"); // Navigating to the home page
    }
  };

  // Rendering the login form with the AuthForm component
  return (
    <main>
      <h2 className="text-center">Login</h2>

      {/* AuthForm component for user input */}
      <AuthForm handleSubmit={handleSubmit} />

      {/* Display error if it exists */}
      {error && <div className="error">{error}</div>}
    </main>
  );
}
