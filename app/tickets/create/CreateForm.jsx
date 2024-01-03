"use client";
import { useRouter } from "next/navigation"; // Importing necessary hooks
import { useState } from "react"; // Importing useState for managing state

export default function CreateForm() {
  const router = useRouter(); // Initializing router

  // State variables for form fields and loading state
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [priority, setPriority] = useState("low");
  const [isLoading, setIsLoading] = useState(false);

  // Handling form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Preventing default form submission behavior
    setIsLoading(true); // Setting loading state to true

    // Creating a new ticket object with form data
    const newTicket = {
      title,
      body,
      priority,
      user_email: "Hamza2developer.dev",
    };

    // Making a POST request to add a new ticket
    const res = await fetch("http://localhost:4000/tickets", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newTicket),
    });

    // Handling response status
    if (res.status === 201) {
      router.refresh(); // Refreshing router state
      router.push("/tickets"); // Navigating to the tickets page
    }
  };

  // Rendering the form
  return (
    <form onSubmit={handleSubmit} className="w-1/2">
      {/* Form input fields */}
      <label>
        <span>Title:</span>
        <input
          required
          type="text"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
      </label>
      <label>
        <span>Body:</span>
        <textarea
          required
          onChange={(e) => setBody(e.target.value)}
          value={body}
        />
      </label>
      <label>
        <span>Priority:</span>
        <select onChange={(e) => setPriority(e.target.value)} value={priority}>
          {/* Priority options */}
          <option value="low">Low Priority</option>
          <option value="medium">Medium Priority</option>
          <option value="high">High Priority</option>
        </select>
      </label>
      {/* Submit button */}
      <button className="btn-primary" disabled={isLoading}>
        {/* Conditional rendering based on loading state */}
        {isLoading && <span>Adding...</span>}
        {!isLoading && <span>Add Ticket</span>}
      </button>
    </form>
  );
}
