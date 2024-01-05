import Link from "next/link";

// Function to fetch tickets from the server
async function getTickets() {
  // Fetch data from the specified URL
  const res = await fetch("http://localhost:4000/tickets", {
    next: {
      revalidate: 0,
    },
  });

  // Parse the response body as JSON and return it
  return res.json();
}

// Component to display a list of tickets
export default async function TicketList() {
  // Fetch tickets using the getTickets function
  const tickets = await getTickets();

  // Display the list of tickets
  return (
    <>
      {/* Map through each ticket */}
      {tickets.map((ticket) => (
        <div key={ticket.id} className="card my-5">
          <Link href={`./tickets/${ticket.id}`}>
            {/* Display ticket title */}
            <h2>{ticket.title}</h2>
            {/* Display truncated ticket body */}
            <p>{ticket.body.slice(0, 199)}...</p>
            {/* Display ticket priority */}
            <div className={`pill ${ticket.priority}`}>
              {ticket.priority} priority
            </div>
          </Link>
        </div>
      ))}
      {/* Display message if there are no tickets */}
      {tickets.length === 0 && (
        <p className="text center">Sorry, there are no open tickets.</p>
      )}
    </>
  );
}
