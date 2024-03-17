function fibs(num) {
  let array = [0, 1];
  let a = 0;
  let b = 1;
  let c;

  for (let i = 3; i <= num; i++) {
    c = a + b;
    array.push(c);
    a = b;
    b = c;
  }

  return array;
}

console.log(fibs(8));

function fibsRec(num) {
  if (num <= 1) {
    return num;
  } else {
    return fibsRec(num - 1) + fibsRec(num - 2);
  }
}

console.log(fibsRec(8));
