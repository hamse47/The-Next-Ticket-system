import React, { Suspense } from "react";
import Loading from "../loading";
import TicketList from "./TicketList";

export default function tickets() {
  return (
    <main>
      <nav>
        <div>
          <h1>Ticket List</h1>
          <p>Currently open tickets</p>
        </div>
      </nav>
      <Suspense fallback={<Loading />}>
        <TicketList />
      </Suspense>
    </main>
  );
}
