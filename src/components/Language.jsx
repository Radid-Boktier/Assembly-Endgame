export default function Languages({ languageName, backgroundColor, color }) {
  return (
    <span
      className="language-chip"
      style={{ backgroundColor: backgroundColor, color: color }}
    >
      {languageName}
    </span>
  );
}
