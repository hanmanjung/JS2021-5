// code5-1 익명함수


//console

//code5-2 선언적 함수
// let foo = function() {
//   let foo = () => {}
//   console.log("첫번줄");
//   console.log("두번째 줄");
// };

// foo();
// console.log(foo);

// let foo = () => {
//    console.log("첫번줄")
// }

// function power(X) {
//   return x*X;
// }
// console.log(power(10));

// function foo(x) {
//   let bar = x * x;
//   return bar;
// }

// let foobar = foo(10);
// console.log(foobar);

// function print(name="무명인", count=1) {
//   console.log(`"${name}"이/가 "${name}"개 있습니다.`)
// }
// print("사과",10);
// print("사과");
// print();
// let power = (x) => {
//   x*x;
// }

// function tenTimes(foo) {
//   for (let i = 0; i < 10; i++) {
//     foo();
//   }
// }

// tenTimes( ()=> {
//    console.log("함수 호출");
// });

// let inputA = '52';
// let inputB = '52.273';
// let inputC = '1403동';

// console.log(parseInt(inputA));
// console.log(parseFloat(inputA));

// console.log(parseInt(inputB));
// console.log(parseFloat(inputB));

// console.log(parseInt(inputC));

// console.log(Number(inputA));
// console.log(Number(inputB));
// console.log(Number(inputC));

// setTimeout(() => {
//   console.log("1초 경과!!!");
// }, 1000)


// let foo = setInterval(() => {
//   console.log("인터벌 1초 경과!!!");
// }, 1000)

// setTimeout(() => {
//   clearInterval(foo);
// }, 3000)

// let foo;
// foo = 10;
// foo = 20;
// foo = "세번째";

// console.log(foo);

// let foo;
// foo = () => {console.log("1st"); }
// foo = () => {console.log("2nd"); }

// foo();

// var foo = () => { console.log("1st"); };
// function foo() { console.log("2nd"); };

// foo();

let name = dong;
foo = () => {
  let name = "synn";
  console.log(this.name);
};

// function () {
//   console.log("this.name");
// };

// foo();