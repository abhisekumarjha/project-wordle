import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';

import GuessInput from '../GuessInput';
import GuessResults from '../GuessResults';

import { NUM_OF_GUESSES_ALLOWED } from '../../constants';

import GameOverBanner from '../GameOverBanner';

// Pick a random word on every pageload.
const answer = sample(WORDS);

// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  // running / won / lost
  const [gameStatus, setGameStatus] = React.useState('running')
  const [guesses, setguesses] = React.useState([]);

  function handelSubmitGuess(guess) {
    const nextGuesses = [...guesses, guess];
    setguesses(nextGuesses);

    if (guess === answer) {
      setGameStatus('won');
    } else if (nextGuesses.length >= NUM_OF_GUESSES_ALLOWED) {
      setGameStatus('lost');
    }
  }

  return (
    <>
      {gameStatus.toUpperCase()}
      <GuessResults guesses={guesses} answer={answer} />
      <GuessInput
        gameStatus={gameStatus}
        handelSubmitGuess={handelSubmitGuess} />
      {gameStatus !== 'running' && (
        <GameOverBanner gameStatus={gameStatus} numOfGuesses={guesses.length} answer={answer} />
      )}
    </>
  )
}

export default Game;
