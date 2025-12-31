## 🧩 Assembly Survival

A challenging and interactive word-guessing game built with **JavaScript**, **React** and **CSS**.
Players must correctly guess letters to save programming languages from elimination—before the game reaches its end.

The project is built using **component-based architecture**, **React hooks**, and an **accessibility-first approach**.

---

## 📷 Preview

![Photo Editor Preview](https://github.com/Radid-Boktier/Assembly-Endgame/blob/main/src/assets/ui%20of%20assembly-endgame.png)

---

### 🌐 Live Demo
🚀 **Deployed on Vercel**  
[Play Assembly Survival](https://assembly-survival.vercel.app/)

---
## 🚀 Features

### 🎮 Game Module
- Random word selection at the start of each game
- Interactive on-screen keyboard for letter guessing
- Prevents duplicate letter guesses
- Correct and incorrect guesses visually highlighted
- Keyboard buttons automatically disabled when the game ends

### 🧠 Game Logic & State Management
- Game state managed with React useState
- Only two states: current word and guessed letters
- Derived values track win, lose, and game-over conditions
- Immutable updates ensure predictable behavior

### 🧨 Language Elimination System
- Each incorrect guess eliminates a programming language
- Visual “lost” state applied progressively
- Dynamic farewell messages for eliminated languages
- Final loss state reveals all missed letters

### 🏁 Win & Lose Experience
- Confetti animation on successful completion
- Clear win and loss messages via status panel
- Game outcome determined automatically without manual triggers
- Confetti animation runs once per win (non-recycling)

### 🔁 New Game Flow
- “New Game” button appears only after game over
- Resets:
  - Current word
  - Guessed letters
- No page reload required (fully client-side reset)

### ♿ Accessibility
- Screen reader announcements using aria-live
- Visually hidden status updates for assistive technologies
- Disabled keyboard prevent interaction after game completion

### 🧱 Frontend Architecture
This project follows a component-driven frontend architecture:
- Reusable UI components:
- Keyboard
  - Languages
  - SingleCharacter
  - StatusBar
- Conditional rendering based on game state
- Centralized game logic inside App.jsx
- Utility functions for word selection and farewell messages
- Clean and readable JSX with minimal side effects

### 🧠 Tech Stack
- React 
- HTML5
- CSS (custom styling)
- Vite
- clsx (conditional class handling)
- react-confetti (win animation)
- Vercel (deployment)
