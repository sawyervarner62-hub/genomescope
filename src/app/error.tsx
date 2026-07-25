"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Surface the error for debugging; wire to a reporter here if added later.
    console.error(error);
  }, [error]);

  return (
    <div className="container mx-auto px-4 max-w-3xl min-h-[72vh] flex flex-col justify-center py-20">
      <p className="eyebrow">Error / Unexpected</p>
      <h1 className="mt-4 text-display-md text-ink">Something broke</h1>
      <p className="mt-5 text-ink-soft max-w-md leading-relaxed">
        A part of the page failed to load. You can retry, or head back to the
        portfolio.
      </p>
      {error.digest && (
        <p className="mt-3 mono-spec">REF {error.digest}</p>
      )}

      <div className="mt-8 flex flex-wrap gap-3">
        <button type="button" onClick={reset} className="btn btn-accent">
          Try again
        </button>
        <Link href="/" className="btn btn-paper">
          Go home
        </Link>
      </div>
    </div>
  );
}
