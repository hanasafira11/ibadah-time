import { useState } from "react";
import PrayerTagsModal from "./PrayerTagsModal";

export default function PrayerItem({ name, data, onToggle, onToggleTag }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className={`prayer-item ${data.checked ? "checked" : ""}`}>
        <span>{name.toUpperCase()}</span>

        <div style={{ display: "flex", gap: "8px" }}>
          {data.checked && (
            <button
              className="note-btn"
              onClick={() => setOpen(true)}
            >
              ✎
            </button>
          )}

          <button onClick={onToggle}>
            {data.checked ? "✔" : "○"}
          </button>
        </div>
      </div>

      <PrayerTagsModal
  isOpen={open}
  onClose={() => setOpen(false)}
  prayerName={name}
  data={data}
  onToggleTag={onToggleTag}
  onAddCustomTag={onAddCustomTag}
    />
    </>
  );
}
