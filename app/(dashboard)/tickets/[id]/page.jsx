import { notFound } from "next/navigation";

export const dynamicParams = true; // default value = true

// Generates metadata for the ticket details page
export async function generateMetadata({ params }) {
  const id = params.id; // Extracting ID from params

  const res = await fetch(`http://localhost:4000/tickets/${id}`);
  const ticket = await res.json();

  return {
    title: `New | ${ticket.title}`, // Generating title based on ticket data
  };
}

// Generates static params using fetched ticket data
export async function generateStaticParams() {
  const res = await fetch("http://localhost:4000/tickets");
  const tickets = await res.json();

  return tickets.map((ticket) => ({
    id: ticket.id,
  }));
}

// Fetches ticket details based on ID
async function getTicket(id) {
  const res = await fetch(`http://localhost:4000/tickets/${id}`, {
    next: {
      revalidate: 60,
    },
  });

  if (!res.ok) {
    notFound(); // Handle not found cases
  }

  return res.json();
}

// ---------------------------------------------- Ticket Details ----------------------------------------------
// Component to display ticket details
export default async function TicketDetails({ params }) {
  const ticket = await getTicket(params.id); // Fetches ticket based on ID

  return (
    <main>
      <nav>
        <h2>Ticket Details</h2>
      </nav>
      <div className="card">
        <h3>{ticket.title}</h3>
        <small>Created by {ticket.user_email}</small>
        <p>{ticket.body}</p>
        <div className={`pill ${ticket.priority}`}>
          {ticket.priority} priority
        </div>
      </div>
    </main>
  );
}
