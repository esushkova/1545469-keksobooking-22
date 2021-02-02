// Возвращает случайное целое число из переданного диапазона включительно

function getRandomInteger(min, max) {
  if (max <= min, max <= 0, min < 0) {
    throw Error('Введите другой диапазон')
  }
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

getRandomInteger(-1, 3);

// Возвращает случайное число с плавающей точкой из переданного диапазона включительно

function getRandomFloatNumber(min, max, fixed) {
  if (max <= min, max <= 0, min < 0) {
    throw Error('Введите другой диапазон')
  }
  const number = (Math.random() * (max - min + 1) + min);
  return parseFloat(number.toFixed(fixed));
}

getRandomFloatNumber(0.1, 0.2, 4)
