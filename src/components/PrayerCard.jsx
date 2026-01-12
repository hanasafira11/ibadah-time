import { useState } from "react";

export default function PrayerCard({ prayerName }) {
  const [status, setStatus] = useState(null);
  // null | "done" | "missed"

  return (
    <div className={`prayer-card ${status}`}>
      <h3>{prayerName}</h3>

      <div className="actions">
        <button onClick={() => setStatus("done")}>
          ✅ Sholat
        </button>

        <button onClick={() => setStatus("missed")}>
          ❌ Tidak
        </button>
      </div>

      {status === "done" && <p className="note">Alhamdulillah :D</p>}
      {status === "missed" && <p className="note muted">Semoga besok lebih baik ya!</p>}
    </div>
  );
}
