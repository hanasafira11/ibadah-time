import { useState } from "react";

export function usePrayerTracker() {
  const [prayers, setPrayers] = useState({});

  const togglePrayer = (name) => {
    setPrayers((prev) => ({
      ...prev,
      [name]: !prev[name],
    }));
  };

  return { prayers, togglePrayer };
}
