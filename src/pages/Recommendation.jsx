const rekomendasiKajian = [
  {
    title: "Keutamaan Sholat Tepat Waktu",
    channel: "Ustadz Adi Hidayat",
    link: "https://www.youtube.com/watch?v=VIDEO_ID_1",
  },
  {
    title: "Cara Menjaga Hati di Zaman Digital",
    channel: "Ustadz Hanan Attaki",
    link: "https://www.youtube.com/watch?v=VIDEO_ID_2",
  },
  {
    title: "Makna Ikhlas dalam Ibadah",
    channel: "Ustadz Abdul Somad",
    link: "https://www.youtube.com/watch?v=VIDEO_ID_3",
  },
  {
    title: "Adab Seorang Muslim dalam Kehidupan Sehari-hari",
    channel: "Kajian Yufid TV",
    link: "https://www.youtube.com/watch?v=VIDEO_ID_4",
  },
];

export default function Recommendation() {
  return (
    <div className="page-center">
      <section className="content-card">
        <h1>Rekomendasi Kajian</h1>

        <div className="card-list">
          {rekomendasiKajian.map((item, i) => (
            <div className="info-card" key={i}>
              <h3>{item.title}</h3>
              <p>{item.channel}</p>

              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="watch-btn"
              >
                Tonton di YouTube
              </a>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
