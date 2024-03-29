import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET(request, { params }) {
  const id = params.id;
  const res = await fetch(`http://localhost:4000/tickets/${id}`);

  const ticket = await res.json();

  if (!res.ok) {
    return nextResponse.json(
      { error: "Can not find the ticket" },
      {
        status: 404,
      }
    );
  }

  return NextResponse.json(tickets, {
    status: 200,
  });
}
