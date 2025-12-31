export default function Languages({
  languageName,
  backgroundColor,
  color,
  className,
}) {
  return (
    <span
      className={`language-chip ${className}`}
      style={{ backgroundColor: backgroundColor, color: color }}
    >
      {languageName}
    </span>
  );
}
