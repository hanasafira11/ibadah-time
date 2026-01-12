import PrayerCard from "../components/PrayerCard.jsx";

const PRAYERS = ["Subuh", "Dzuhur", "Ashar", "Maghrib", "Isya"];

export default function PrayerTracker() {
  return (
    <div className="container">
      <h1>Prayer Tracker</h1>

      {PRAYERS.map((prayer) => (
        <PrayerCard key={prayer} prayerName={prayer} />
      ))}
    </div>
  );
}
