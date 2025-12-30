import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Keyboard from './components/Keyboard.jsx';
import Languages from './components/Language.jsx';
import NewGameButton from './components/NewGameButton.jsx';
import SingleCharacter from './components/SingleCharacter.jsx';
import StatusBar from './components/StatusBar';
import { languages } from './data/languages.js';

function App() {
  const [currentWord, setCurrentWord] = useState('react');

  const alphabet = 'abcdefghijklmnopqrstuvwxyz';

  const keyboardElements = [...alphabet].map((letter) => {
    return <Keyboard key={letter} letter={letter} />;
  });

  const lan = languages.map((language) => {
    return (
      <Languages
        key={language.id}
        languageName={language.name}
        backgroundColor={language.backgroundColor}
        color={language.color}
      />
    );
  });

  const word = [...currentWord].map((char, index) => {
    return <SingleCharacter key={index} sinChar={char} />;
  });
  // console.log(lan);
  return (
    <main className="main">
      <Header />
      <StatusBar />
      <section className="language-container">{lan}</section>
      <section className="word-container">{word}</section>
      <section className="keyboard-container">{keyboardElements}</section>
      <NewGameButton />
    </main>
  );
}

export default App;
