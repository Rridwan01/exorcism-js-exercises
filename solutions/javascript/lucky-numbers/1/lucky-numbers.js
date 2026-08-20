// @ts-check

export function twoSum(array1, array2) {
  return Number(array1.join('')) + Number(array2.join(''));
}

export function luckyNumber(value) {
  let toString = String(value);
  let reversed = toString.split('').reverse().join('');
  return Number(reversed) === value;
}

export function errorMessage(input) {
  if (!input) {
    return 'Required field';
  } else if (Number.isNaN(Number((input))) || Number(input) == 0) {
    return 'Must be a number besides 0'
  } else {
  return '';
  }
}
