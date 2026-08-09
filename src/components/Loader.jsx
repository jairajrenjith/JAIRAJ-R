import { useEffect, useState } from "react";

const BOOT_LINES = [
  "$ initializing portfolio.exe",
  "$ loading agent · about      [ok]",
  "$ loading agent · skills     [ok]",
  "$ loading agent · projects   [ok]",
  "$ connecting nodes ...",
  "$ handshake established — welcome",
];

export default function Loader({ onDone }) {
  const [lineIndex, setLineIndex] = useState(0);

  useEffect(() => {
    if (lineIndex >= BOOT_LINES.length) {
      const t = setTimeout(onDone, 550);
      return () => clearTimeout(t);
    }
    const t = setTimeout(() => setLineIndex((i) => i + 1), 300);
    return () => clearTimeout(t);
  }, [lineIndex, onDone]);

  const progress = Math.min(100, Math.round((lineIndex / BOOT_LINES.length) * 100));

  return (
    <div className="loader" role="status" aria-label="Portfolio loading">
      <div className="loader-panel">
        <p className="loader-tag">SYS · BOOT</p>
        <div className="loader-lines">
          {BOOT_LINES.slice(0, lineIndex).map((line, i) => (
            <p key={i} className="loader-line loader-line--done">
              {line}
            </p>
          ))}
          {lineIndex < BOOT_LINES.length && (
            <p className="loader-line">
              {BOOT_LINES[lineIndex]}
              <span className="loader-cursor" />
            </p>
          )}
        </div>
        <div className="loader-bar">
          <div className="loader-bar-fill" style={{ width: `${progress}%` }} />
        </div>
        <p className="loader-pct">{progress}%</p>
      </div>
    </div>
  );
}
