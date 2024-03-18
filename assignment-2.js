const array1 = [3, 2, 1, 13, 8, 5, 0, 1];
const array2 = [105, 79, 100, 110];

function mergeSort(array) {
  if (array.length <= 1) {
    return array;
  }
  const mid = Math.floor(array.length / 2);
  const first = array.slice(0, mid);
  const second = array.slice(mid, array.length);
  const sorted1 = mergeSort(first);
  const sorted2 = mergeSort(second);
  return [].concat(merge(sorted1, sorted2));
}

function merge(first, second) {
  if (!first.length) {
    return second;
  } else if (!second.length) {
    return first;
  }

  let lowest;
  if (first[0] < second[0]) {
    lowest = first.shift();
  } else {
    lowest = second.shift();
  }
  return [].concat(lowest).concat(merge(first, second));
}

const m1 = [1, 3, 5, 7];
const m2 = [2, 4, 6, 8];
console.log(merge(m1, m2));

console.log(mergeSort(array1));
