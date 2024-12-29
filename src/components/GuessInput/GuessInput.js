import React, { useState } from 'react';

function GuessInput({ gameStatus, handelSubmitGuess }) {
  const [guess, setGuess] = useState('');

  function handleSubmit(event) {
    event.preventDefault();

    if (guess.length !== 5) {
      window.alert('Please enter exactly 5 characters. 💖');
      return;
    }

    handelSubmitGuess(guess);

    setGuess('');
  }

  return (
    <form onSubmit={handleSubmit} className="guess-input-wrapper">
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        required
        minLength={5}
        maxLength={5}
        disabled={gameStatus !== 'running'}
        value={guess}
        onChange={(event) => {
          const nextGuess = event.target.value.toUpperCase();
          setGuess(nextGuess);
        }}
        id="guess-input" type="text" />
    </form>
  );
}

export default GuessInput;
