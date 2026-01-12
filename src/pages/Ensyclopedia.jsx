const dataEnsiklopedia = [
  {
    title: "Sholat",
    desc: "Ibadah wajib lima waktu bagi setiap Muslim.",
  },
  {
    title: "Puasa",
    desc: "Menahan diri dari makan, minum, dan hal yang membatalkan dari fajar hingga maghrib.",
  },
  {
    title: "Zakat",
    desc: "Kewajiban mengeluarkan sebagian harta untuk yang berhak.",
  },
  {
    title: "Wudhu",
    desc: "Bersuci sebelum sholat dengan tata cara tertentu.",
  },
];

export default function Ensyclopedia() {
  return (
    <div className="page-center">
      <section className="content-card">
        <h1>Ensiklopedia Ibadah</h1>

        <div className="card-list">
          {dataEnsiklopedia.map((item, i) => (
            <div className="info-card" key={i}>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
