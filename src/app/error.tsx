"use client";

import { useEffect } from "react";

interface ErrorProps {
  error: Error;
  reset: () => void;
}

export default function GlobalError({ error, reset }: ErrorProps) {
  useEffect(() => {
    // Hier kannst du den Fehler z.B. an dein Monitoring schicken
    console.error("Unhandled error:", error);
  }, [error]);

  return (
    <div style={{ padding: 24, textAlign: "center" }}>
      <h1>Something went wrong</h1>
      <p>{error.message}</p>
      <button onClick={() => reset()} style={{ marginTop: 16 }}>
        Try again
      </button>
    </div>
  );
}
