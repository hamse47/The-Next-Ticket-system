import React from "react";
import Link from "next/link";
import Image from "next/image";
import NoteFound from "../public/favicon.jpg";

export default function NotFound() {
  return (
    <main className="text-center">
      <h2 className="text-3xl">Sorry page not found</h2>
      <p className="text-xl"> Could not find the page you were looking for</p>
      <p>
        Go back to{" "}
        <Link href="/" className="text-xl font-bold">
          Dashboard
        </Link>
        .
      </p>
      <div className="m-14 items-center">
        <Image
          src={NoteFound}
          alt="favicon.jpeg"
          width={700}
          height={300}
          className="ml-14"
          quality={100}
        />
      </div>
    </main>
  );
}
