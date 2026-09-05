"use client";

import { useState } from "react";

export default function AuthForm({
  handleSubmit,
  passwordAutoComplete = "current-password",
}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <form onSubmit={(e) => handleSubmit(e, email, password)}>
      <label>
        <span>Email:</span>
        <input
          type="email"
          autoComplete="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          required
        />
      </label>
      <label>
        <span>Password:</span>
        <input
          type="password"
          autoComplete={passwordAutoComplete}
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          required
        />
      </label>
      <button className="btn-primary">Submit</button>
    </form>
  );
}
