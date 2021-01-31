// Возвращает случайное целое число из переданного диапазона включительно
// Источник: https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Возвращает случайное число с плавающей точкой из переданного диапазона включительно

function getRandomInclusive(min, max) {
  return Math.random() * (max - min + 1) + min;
}
