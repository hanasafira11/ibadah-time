import { useEffect, useState } from "react";
import { usePrayerTimes } from "../hooks/usePrayerTimes";
import AdzanModal from "../components/AdzanModal";

export default function PrayerTracker() {
  const { times, loading } = usePrayerTimes();
  const [activePrayer, setActivePrayer] = useState(null);

  useEffect(() => {
    if (!times) return;

    const interval = setInterval(() => {
      const now = new Date();
      const currentTime =
        now.getHours().toString().padStart(2, "0") +
        ":" +
        now.getMinutes().toString().padStart(2, "0");

      const mapping = {
        Fajr: "Subuh",
        Dhuhr: "Dzuhur",
        Asr: "Ashar",
        Maghrib: "Maghrib",
        Isha: "Isya",
      };

      Object.entries(mapping).forEach(([apiKey, label]) => {
        if (times[apiKey] === currentTime) {
          setActivePrayer(label);
        }
      });
    }, 60000);

    return () => clearInterval(interval);
  }, [times]);

  if (loading) return <p>Loading jadwal sholat...</p>;

  return (
    <>
      <h1>Prayer Tracker</h1>

      <AdzanModal
        open={!!activePrayer}
        prayer={activePrayer}
        onClose={() => setActivePrayer(null)}
      />
    </>
  );
}
