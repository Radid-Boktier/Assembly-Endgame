import { clsx } from 'clsx';
import { useState } from 'react';
import Confetti from 'react-confetti';
import './App.css';
import Header from './components/Header';
import Keyboard from './components/Keyboard.jsx';
import Languages from './components/Language.jsx';
import NewGameButton from './components/NewGameButton.jsx';
import SingleCharacter from './components/SingleCharacter.jsx';
import StatusBar from './components/StatusBar';
import { languages } from './data/languages.js';
import { getFarewellText } from './utils/FarewellOption.js';
import { getWord } from './utils/GetWord.js';
function App() {
  const [currentWord, setCurrentWord] = useState(() => getWord());
  const [guessedLetters, setGussedLetters] = useState([]);

  const wrongGuessedCount = guessedLetters.filter(
    (letter) => !currentWord.includes(letter)
  ).length;
  console.log(currentWord);
  const isGameWon = [...currentWord].every((letter) =>
    guessedLetters.includes(letter)
  );
  const isGameLost = wrongGuessedCount >= languages.length - 1;
  const isGameOver = isGameWon || isGameLost;
  const lastGuessedLetter = guessedLetters[guessedLetters.length - 1];
  const isLastGuessIncorrect =
    lastGuessedLetter && !currentWord.includes(lastGuessedLetter);

  const alphabet = 'abcdefghijklmnopqrstuvwxyz';

  function handleKeyboard(letter) {
    setGussedLetters((prevLetters) =>
      prevLetters.includes(letter) ? prevLetters : [...prevLetters, letter]
    );
  }

  const keyboardElements = [...alphabet].map((letter) => {
    const isGuessed = guessedLetters.includes(letter);
    const isCorrect = isGuessed && currentWord.includes(letter);
    const isWrong = isGuessed && !currentWord.includes(letter);
    const className = clsx({
      correct: isCorrect,
      wrong: isWrong,
    });
    return (
      <Keyboard
        key={letter}
        letter={letter}
        handleKeyboard={handleKeyboard}
        className={className}
        isGameOver={isGameOver}
        guessedLetters={guessedLetters}
      />
    );
  });

  const lan = languages.map((language) => {
    const isLost = language.id <= wrongGuessedCount;
    const className = clsx({ lost: isLost });
    return (
      <Languages
        key={language.id}
        languageName={language.name}
        backgroundColor={language.backgroundColor}
        color={language.color}
        className={className}
      />
    );
  });
  const word = [...currentWord].map((char, index) => {
    const shouldRevealLetter = isGameLost || guessedLetters.includes(char);
    const letterClassName = clsx(
      isGameLost && !guessedLetters.includes(char) && 'missed-letter'
    );
    return (
      <SingleCharacter
        key={index}
        sinChar={shouldRevealLetter ? char : ''}
        className={letterClassName}
      />
    );
  });

  const gameStatusClass = clsx('game-status', {
    won: isGameWon,
    lost: isGameLost,
    farewell: isLastGuessIncorrect,
  });

  function renderGameStatus() {
    if (!isGameOver && isLastGuessIncorrect) {
      return (
        <StatusBar
          heading={''}
          description={`“Farewell ${getFarewellText(
            languages[wrongGuessedCount - 1].name
          )}” 🫡 `}
          gameStatusClass={gameStatusClass}
        />
      );
    } else if (isGameOver && isGameWon) {
      return (
        <StatusBar
          heading={'You win!'}
          description={'Well done! 🎉'}
          gameStatusClass={gameStatusClass}
        />
      );
    } else if (isGameOver && isGameLost) {
      return (
        <StatusBar
          heading={'Game over!'}
          description={'You lose! Better start learning Assembly 😭'}
          gameStatusClass={gameStatusClass}
        />
      );
    } else {
      return (
        <StatusBar
          heading={''}
          description={''}
          gameStatusClass={gameStatusClass}
        />
      );
    }
  }

  function startNewGame() {
    setCurrentWord(getWord());
    setGussedLetters([]);
  }
  return (
    <main className="main">
      {isGameWon && <Confetti recycle={false} numberOfPieces={1000} />}
      <Header />
      {renderGameStatus()}
      <section className="language-container">{lan}</section>
      <section className="word-container">{word}</section>
      <section className="sr-only" aria-live="polite" role="status">
        <p>
          Current word:{' '}
          {currentWord
            .split('')
            .map((letter) =>
              guessedLetters.includes(letter) ? letter + '.' : 'blank.'
            )
            .join(' ')}
        </p>
      </section>
      <section className="keyboard-container">{keyboardElements}</section>
      {isGameOver && <NewGameButton startNewGame={startNewGame} />}
    </main>
  );
}

export default App;
