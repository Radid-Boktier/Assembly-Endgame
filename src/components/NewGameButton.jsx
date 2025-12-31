export default function NewGameButton({ startNewGame }) {
  return (
    <button className="new-game-button" onClick={startNewGame}>
      New Game
    </button>
  );
}
