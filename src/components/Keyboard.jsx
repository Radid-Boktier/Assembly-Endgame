export default function Keyboard({ letter }) {
  return <button className="keyboard-button">{letter.toUpperCase()}</button>;
}
