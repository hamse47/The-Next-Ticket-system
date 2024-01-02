export const dynamicParams = false;

// Generates static params using fetched ticket data
export async function generateStaticParams() {
  const res = await fetch("http://localhost:4000/tickets"); // Fetches ticket data
  const tickets = await res.json(); // Retrieves JSON data of tickets

  // Maps fetched ticket IDs to an array of objects with 'id' as key
  return tickets.map((ticket) => ({
    id: ticket.id,
  }));
}

// Fetches ticket details based on ID and displays them
import React from "react";

// Fetches ticket details using the provided ID
async function getTicket(id) {
  const res = await fetch(`http://localhost:4000/tickets/${id}`, {
    // Config for data revalidation
    next: {
      revalidate: 60,
    },
  });
  return res.json(); // Returns JSON data of the ticket
}

// Renders ticket details on the page
export default async function TicketDetails({ params }) {
  const ticket = await getTicket(params.id); // Fetches ticket based on provided ID
  return (
    <main>
      <nav>
        <h1>Ticket Details</h1>
      </nav>
      <div className="card">
        <h3>{ticket.title}</h3>
        <small>Made by {ticket.user_email}</small>
        <p>{ticket.body}</p>
        <div className={`pill ${ticket.priority}`}>
          {ticket.priority} priority
        </div>
      </div>
    </main>
  );
}
