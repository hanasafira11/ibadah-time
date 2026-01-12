export default function AdzanModal({ open, prayer, onClose }) {
  if (!open) return null;

  return (
    <div className="modal-backdrop">
      <div className="modal">
        <h2>Waktu {prayer}</h2>
        <p>Sudah masuk waktu sholat</p>

        <audio autoPlay>
          <source src="/adzan.mp3" type="audio/mpeg" />
        </audio>

        <button onClick={onClose}>Tutup</button>
      </div>
    </div>
  );
}
