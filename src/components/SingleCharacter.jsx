export default function SingleCharacter({ sinChar, className }) {
  return (
    <span className={`character ${className}`}>{sinChar.toUpperCase()}</span>
  );
}
