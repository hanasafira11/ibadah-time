import { useState } from "react";
import { prayerTags } from "../../data/prayerTags";

export default function PrayerTagsModal({
  isOpen,
  onClose,
  prayerName,
  data,
  onToggleTag,
  onAddCustomTag
}) {
  const [input, setInput] = useState("");

  if (!isOpen) return null;

  const totalTags = data.tags.length + data.customTags.length;

  return (
    <div className="modal-overlay">
      <div className="modal-card">
        <h3>Catatan Sholat {prayerName}</h3>
        <p className="modal-desc">
          Tambahkan catatan jika ingin. Ini opsional dan bersifat pribadi.
        </p>

        {/* TAG DEFAULT */}
        <div className="tag-options">
          {prayerTags.map(tag => (
            <button
              key={tag.id}
              className={`tag-option ${
                data.tags.includes(tag.id) ? "active" : ""
              }`}
              onClick={() => onToggleTag(prayerName, tag.id)}
            >
              {tag.label}
            </button>
          ))}
        </div>

        {/* CUSTOM TAG */}
        {data.customTags.map((tag, i) => (
          <span key={i} className="tag custom">
            {tag}
          </span>
        ))}

        {/* ADD TAG */}
        {totalTags < 5 && (
          <div className="add-tag">
            <input
              value={input}
              onChange={e => setInput(e.target.value)}
              placeholder="Tambah tag sendiri"
            />
            <button
              onClick={() => {
                if (!input.trim()) return;
                onAddCustomTag(prayerName, input.trim());
                setInput("");
              }}
            >
              +
            </button>
          </div>
        )}

        <button className="close-btn" onClick={onClose}>
          Selesai
        </button>
      </div>
    </div>
  );
}
