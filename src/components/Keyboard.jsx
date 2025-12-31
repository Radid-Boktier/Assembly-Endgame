export default function Keyboard({
  letter,
  handleKeyboard,
  className,
  isGameOver,
  guessedLetters,
}) {
  return (
    <button
      className={`keyboard-button ${className}`}
      disabled={isGameOver}
      aria-disabled={guessedLetters.includes(letter)}
      aria-label={`Letter ${letter}`}
      onClick={() => handleKeyboard(letter)}
    >
      {letter.toUpperCase()}
    </button>
  );
}
