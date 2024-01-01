import React from "react";
import TicketList from "./TicketList";

export default function tickets() {
  return (
    <main>
      <nav>
        <div>
          <h2>Ticket List</h2>
          <p>Currently open tickets</p>
        </div>
      </nav>
      <TicketList />
    </main>
  );
}
