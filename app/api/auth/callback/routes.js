// Importing required modules
import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";

// GET function to handle incoming requests
export async function GET(request) {
  const url = new URL(request.url); // Parsing the request URL

  const code = url.searchParams.get("code"); // Retrieving 'code' parameter from the URL

  // Checking if 'code' parameter exists in the URL
  if (code) {
    // Creating a Supabase client instance to handle authentication with cookies
    const supabase = createRouteHandlerClient({ cookies });

    // Exchanging the authorization code for a session token
    await supabase.auth.exchangeCodeForSession(code);
  }

  return NextResponse.redirect(url.origin); // Redirecting to the original URL origin
}
