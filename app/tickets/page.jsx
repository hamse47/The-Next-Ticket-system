import Link from "next/link";
import React, { Suspense } from "react";
import Loading from "../loading";
import TicketList from "./TicketList";

export default function Tickets() {
  return (
    <main>
      <nav style={{ display: "flex", justifyContent: "space-between" }}>
        <div>
          <h1 className="text-2xl">Ticket List</h1>
          <p>Currently open tickets</p>
        </div>
        <Link href="/tickets/create">
          <h1 className="text-xl">Create New Ticket</h1>
        </Link>
      </nav>
      <Suspense fallback={<Loading />}>
        <TicketList />
      </Suspense>
    </main>
  );
}
