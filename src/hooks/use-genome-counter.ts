"use client";

import { useState, useEffect, useCallback } from "react";

export function useGenomeCounter() {
  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    fetch("/api/genome-counter")
      .then((res) => res.json())
      .then((data) => setCount(data.count ?? 0))
      .catch(() => setCount(null));
  }, []);

  const recordGenome = useCallback(async (hash: string) => {
    try {
      const res = await fetch("/api/genome-counter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ hash }),
      });
      const data = await res.json();
      setCount(data.count ?? count);
      return data.isNew as boolean;
    } catch {
      return false;
    }
  }, [count]);

  return { count, recordGenome };
}
