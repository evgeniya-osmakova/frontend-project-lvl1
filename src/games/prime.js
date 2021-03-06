import runGame from '../index.js';
import generateRandomNumber from '../utils.js';

const isPrime = (number) => {
  if (number < 2) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(number); i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

const genRoundData = () => {
  const number = generateRandomNumber(1, 100);
  const question = number.toString();
  const rightAnswer = (isPrime(number)) ? 'yes' : 'no';
  return { question, rightAnswer };
};

const task = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const runPrimeGame = () => {
  runGame(task, genRoundData);
};

export default runPrimeGame;
