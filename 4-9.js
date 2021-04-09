i = 0;
let foo = [2, 3, 5, 4, 10];
while (true) {
  if (foo[i] % 2 == 0) {
    bar = foo[i];

    break;
  }
  i = i+1;
  console.log(i);
}
console.log('처음 발견한 짝수는 ${bar}입니다.');