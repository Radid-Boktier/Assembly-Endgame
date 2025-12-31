import { words } from '../data/words';

export function getWord() {
  const index = Math.floor(Math.random() * words.length);
  return words[index];
}
