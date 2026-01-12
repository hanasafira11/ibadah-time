import { useState } from "react";

export default function Reflection() {
  const [note, setNote] = useState("");
  const [notes, setNotes] = useState([]);

  const addNote = () => {
    if (!note.trim()) return;
    setNotes([...notes, note]);
    setNote("");
  };

  return (
    <section className="note-card">
      <h2>Catatan Hari Ini</h2>

      <textarea
        placeholder="Tulis refleksi singkat hari ini..."
        value={note}
        onChange={(e) => setNote(e.target.value)}
      />

      <button onClick={addNote}>Simpan</button>

      <ul>
        {notes.map((n, i) => (
          <li key={i}>{n}</li>
        ))}
      </ul>
    </section>
  );
}
