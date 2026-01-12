import { usePrayerTimes } from "../hooks/usePrayerTimes";

export default function Home() {
  const { times, loading } = usePrayerTimes();

  if (loading) {
    return <p className="loading-text">Loading jadwal sholat...</p>;
  }

  return (
    <div className="page-center">
      <section className="prayer-card">
        <h1>Jadwal Sholat Hari Ini</h1>

        <ul className="prayer-list">
          <li><span>Subuh</span><strong>{times.Fajr}</strong></li>
          <li><span>Dzuhur</span><strong>{times.Dhuhr}</strong></li>
          <li><span>Ashar</span><strong>{times.Asr}</strong></li>
          <li><span>Maghrib</span><strong>{times.Maghrib}</strong></li>
          <li><span>Isya</span><strong>{times.Isha}</strong></li>
        </ul>
      </section>
    </div>
  );
}
