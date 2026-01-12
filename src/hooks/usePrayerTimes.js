import { useEffect, useState } from "react";

export function usePrayerTimes() {
  const [times, setTimes] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(
      "https://api.aladhan.com/v1/timingsByCity?city=Malang&country=Indonesia&method=20"
    )
      .then((res) => res.json())
      .then((data) => {
        setTimes(data.data.timings);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  return { times, loading };
}
