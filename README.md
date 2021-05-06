# 한만중 [201840233]

## [05월 4일]
> 오늘 배운 내용 요약  <br />
-프로토타입<br>
--생성자 함수로 만든 객체는 프로토타입이라는 공간에 메소드를 지정해서 모든 객체가 공유하도록 만들수 있다.
<br>
-객체 지향적으로 구성한 객체 배열<br>
-null의 값과 자료형<br>
-'아예 값이 없는 상태'를 구분할 때 null을 활용<br>
1. 기본 자료형과 객체 자료형의 차이<br>
-기본 자료형 숫자, 문자열, 불<br>
-기본 자료형의 속성 또는 메소드를 사용할 때 기본 자료형이 자동으로 객체로 변환이 됨.<br>
2. Number 객체<br>
-자바스크립트에서 숫자를 표현할 때 사용<br>
-toFixed() 메소드를 사용해 소수점 자릿수를 자르는 방법<br>
-생성자 함수의 속성<br>
3.String 객체<br>
-잘못된 String 객체의 메소드 사용<br>
-indexOf() 메소드: 특정 문자열이 있는지 확인, 위치를 리턴함 문자열이 포함되어 있지 않을 때는 -1을 리턴<br>

> 여러줄 요약<br>
-- 프로토타입을 사용한 메소드 생성<br>
function product(name,bar) { <br>
  this.foo1 = foo; <br>
  this.bar1 = bar; <br>
}<br>
<br>
function product(name,bar) {<br>
  this.foo1 = foo;<br>
  this.bar1 = bar;<br>
}<br>
<br>
let product = new product("바나나", 1200);<br>
<br>
console.log(product);<br>
--객체 지향적으로 구성한 객체 배열<br>
function product(name,price) { <br>
  this.name = name; <br>
  this.price = price; <br>
}<br>
product.prototype.print = function () {<br>
  console.log(`${this.name}의 가격은 ${this.price}원입니다.`);<br>
};<br>
<br>
let products = [<br>
  new product('바나나',1200),<br>
  new product('사과',2000),<br>
  new product('배',3000),<br>
  new product('고구마',700),<br>
  new product('감자',600),<br>
  new product('수박',5000),<br>
];<br>
<br>
for (let product of products) {<br>
  product.print();<br>
}<br>
--null의 값과 자료형<br>
console.log(null);<br>
console.log(typeof(null));<br>
--기본 자료형 숫자,문자열,불<br>
let number = 273;<br>
let String = '안녕하세요';<br>
let boolean = true;<br>
<br>
console.log(typeof number);<br>
console.log(typeof String);<br>
console.log(typeof boolean);<br>
--객체 숫자,문자열,불
let number = new Number(273);<br>
let string = new String('안녕하세요');<br>
let boolean = new Boolean(true);<br>
<br>
console.log(typeof number);<br>
console.log(typeof String);<br>
console.log(typeof boolean);<br>
-- 기본 자료형에 속성 또는 메소드 추가<br>
let primitiveNumber = 273;<br>
<br>
primitiveNumber.method = function () {<br>
  return 'primitive Method';<br>
};<br>
<br>
console.log(primitiveNumber.method());<br>
--프로토타입에 메소드 추가
let primitiveNumber = 273;<br>
<br>
Number.prototype.method = function () {<br>
  return 'primitive Method';<br>
};<br>
<br>
console.log(primitiveNumber.method());<br>
-- Number 객체의 메소드<br>
 -toExponential() -> 숫자를 지수 표시로 나타낸 문자열을 리턴합니다.<br>
 -toFixed() -> 숫자를 고정소수점 표시로 나타낸 문자열을 리턴합니다.<br>
 -toPrecision() -> 숫자를 길이에 따라 지수 표시 또는 고정소수점 표시로 나타낸 문자열을 리턴합니다.<br>
--생성자 함수에 속성과 메소드 추가<br>
function Constructor() { }<br>
Constructor.property = 273;<br>
Constructor.method = function () { };<br>
<br>
console.log(Constructor.property);<br>
console.log(Constructor.method);<br>
-- Number 생성자 함수의 속성<br>
 -MAX_VALUE -> 자바스크립트의 숫자가 나타낼 수 있는 최대숫자<br>
 -MAX_VALUE -> 자바스크립트의 숫자가 나타낼 수 있는 최소숫자<br>
 -NaN ->자바스크립트의 숫자로 나타낼 수 없는 숫자<br>
 -POSITIVE_INFINITY ->양의 무한대 숫자<br>
 -NEGATIVE_INFINITY ->음의 무한대 숫자<br>
--Number 생성자 함수의 MAX_VALUE 속성<br>
let numberA = number.MAX_VALUE;<br>
let numberB = number.MAX_VALUE + 1;<br>
<br>
console.log(numberA);<br>
console.log(numberB);<br>
--String 객체의 속성<br>
 -length -> 문자열의 길이를 나타냅니다.<br>
-- 잘못된 String 객체의 메소드 사용<br>
let string = 'abcdegf';<br>
<br>
string.toUpperCase();<br>
console.log(string);<br>
-- 올바른 String 객체의 메소드 사용<br>
let string = 'abcdegf';<br>
<br>
string = string.toUpperCase();<br>
console.log(string);<br>
--indexOf() 메소드<br>
let string = '안녕하세요. 좋은 아침입니다.';<br>
<br>
<br>
if (string.indexOf('아침') >= 0) {<br>
  console.log(`좋은 아침이에요...!`);<br>
}<br>

## [04월 27일]
> 오늘 배운 내용 요약  <br />
객체 기본 <br>
객체는 여러개의 자료형을 한 번에 저장하는 자료형입니다.<br>
객체와 반복문<br>
생성한 객체에 for in 반복문으로 반복을 적용할 수 있습니다.<br>
속성과 메소드 <br>
배열 내부에 있는 값 하나하나를 요소라고 합니다. 객체 내부에 있는 값 하나하나는 속성이라고 합니다.<br>
생성자 함수와 프로토타입<br>
현대 프로그래밍은 자료를 다루는 것이 목적, 현실의 객체를 모방해서 프로그래밍하는 '객체 지향 프로그래밍'의 이념으로 만든 프로그래밍 언어들이 주류<br>
-생성자 함수<br>
--'객체를 만드는 함수'<br>
-프로토타입<br>
--생성자 함수로 만든 객체는 프로토타입이라는 공간에 메소드를 지정해서 모든 객체가 공유하도록 만들수 있다.<br>
> 여러줄 요약<br>
-- 배열을 선언합니다.<br>
let foo = {"사과", "배","바나나","딸기" }; <br>
array[0] -> '사과'<br>
array[1] -> '망고'<br>
<br>
--객체 선언<br>
 let foo = { <br>
 제품명: "건조 망고", <br>
 유형: "당절임", <br>
 원산지: "필리핀" <br>
 price: 1200 <br>
}; <br>
<br>
--객체 생성<br>
 let foo = { <br>
 제품명: "건조 망고", <br>
 유형: "당절임", <br>
 원산지: "필리핀" <br>
 price: 1200 <br>
};<br>
<br>
 console.log(foo); <br>
 console.log(foo.제품명); <br>
 console.log(foo.price); <br>
<br>
 --객체와 반복문<br>
 let foo = { <br>
 제품명: "건조 망고", <br>
 유형: "당절임", <br>
 원산지: "필리핀" <br>
 price: 1200 <br>
};<br>
<br>
 for (let key in foo) { <br>
  console.log(`${key}: ${foo[key]}`); <br>
} <br>
<br>
--속성과 메소드<br>
let foo = { <br>
  name: "건조 망고", <br>
  price: 1200, <br>
  print: function () { <br>
    console.log(`${this.name} - ${this.price}`); <br>
  } <br>
<br>
}; <br>
<br>
--메소드 내부에서 this 키워드 <br>
let foo = { <br>
  name: "건조 망고", <br>
  price: 1200, <br>
  print: function () { <br>
    console.log(`${this.name} - ${this.price}`); <br>
  } <br>
<br>
}; <br>
<br>
foo.print();<br>
<br>
--객체 배열<br>
let product = [ <br>
  {name: '사과', price: 1200}, <br>
  {name: '배', price: 1500}, <br>
  {name: '자두', price: 1000}, <br>
  {name: '딸기', price: 2000}, <br>
  {name: '바나나', price: 1500}, <br>
]; <br>
<br>
<br>
--함수를 외부로 내보낸 형태<br>
let product = [ <br>
  {name: '사과', price: 1200}, <br>
  {name: '배', price: 1500}, <br>
  {name: '자두', price: 1000}, <br>
  {name: '딸기', price: 2000}, <br>
  {name: '바나나', price: 1500}, <br>
]; <br>
<br>
function printProduct(bar) {<br>
  console.log(`${bar.name} - ${bar.price}`);<br>
}<br>
<br>
for (let foo of product) {<br>
  printProduct(foo);<br>
}<br>
<br>
--생성자 함수 <br>
function product(name,bar) { <br>
  this.foo1 = foo; <br>
  this.bar1 = bar; <br>
}<br>
<br>
--생성자 함수를 사용한 객체 생성<br>
function product(name,bar) {<br>
  this.foo1 = foo;<br>
  this.bar1 = bar;<br>
}<br>
<br>
let product = new product("바나나", 1200);<br>
<br>
console.log(product);<br>







## [04월 13일]
> 오늘 배운 내용 요약  <br />
*익명 함수<br>
 - 이름을 붙이지 않고 함수 생성<br>
 - 함수를 호출하면 함수 내부의 코드 덩어리가 모두 실행<br>
*선언적 함수<br>
 - 이름을 붙여 함수를 생성<br>
*화살표 함수 <br>
 - '하나의 표현식을 리턴하는 함수'를 만들 때는 중괄호 생략 가능<br>
 - 익명 함수 예제를 화살표 함수로 바꾸기<br>
> 여러줄 요약<br>
-숫자 변환 함수<br>
 parseInt() : 문자열을 정수로 변환합니다.<br>
 parseFloat : 문자열을 실수로 변환합니다.<br>
<br>
 - 타이머 함수<br>
  '특정 시간 후에' 또는 '특정 시간마다'어떤 일을 할때 사용<br>
  시간은 밀리초로 지정. 1초를 나타내려면 1000(밀리초)을 입력<br>
<br>
  -타이머 제거 함수<br>
  clearInterval(아이디) : 특정 시간마다 실행하던 함수 호출을 정지합니다.<br>
  
## [04월 6일]
> 오늘 배운 내용 요약  <br />
반복문을 여러 번 중첩해서 사용하면 중첩 반목문이라고 합니다<br>
break 키워드는 switch 조건문이나 반복문을 벗어날 때 사용<br>
continue 키워드는 반복문 내부에서 현재 반복을 멈추고 다음 반복을 진행<br>
> 여러줄 요약<br>
*배열<br>
 - for in 반복문<br>
    for(let 인덱스 in 배열){<br>
}<br>
<br>
<br>
*중첩 반복문<br>
 반복문을 실행하다가 중간에 종료하는 방법에는<br>
<br>
break와 continue, return 등이 있다.<br>
<br>
 <br>
<br>
반복문을 실행하다가 break문을 만나면 <br>
<br>
반복문은 그 즉시 실행을 멈추고 반복문은 종료된다.<br>
<br>
<br>
## [03월 30일]
> 오늘 배운 내용 요약  <br />
||<br />
else if (4.0 <= score && score < 4.5) {<br />
}
<br />
*값이 결정되어 있을때는 switch문을 이용한다.<br />
<br />
*CTRL+SHIFT+ALT를 누르고  DELETE키를 쓰면 줄맞추기 쉬움<br />
<br />
*삼항 연산자<br />
 -  <불 표현식> ? <참> : <거짓><br />
<br />
*짧은 초기화 조건문 <br />
 - || 연산자를 붙이 아닌 자료에 사용할 경우<br />
   - A || B 에서 A가 참이라면 A로 대치됩니다.<br />
   - A || B 에서 A가 거짓이라면 B로 대치됩니다.<br />
   <br />
* 웹 브라우저에서 작동하는 자바스크립트 : prompt() 이름의 함수를 받음<br />
* node.js에서 작동하는 자바스크립트 : 단순한 코드로 입력을 받을 수 없음<br />
<br />
* c 언어는 scanf() 함수, java Scanner, 자바스크립트는 prompt() 함수<br />
<br />
> 여러줄 요약<br>
* 배열<br />
  - 여러 개의 자료를 한꺼번에 다룰 수 있는 자료형<br />
  - 대괄호 내부의 각 자료는 쉼표로 구분<br />
  - 배열에는 여러 자료형이 섞여 있을 수 있음<br />
  - 요소 : 배열 안에 들어 있는 각 자료 <br />
  let 이름 = [자료,자료,자료,자료,자료]<br />
<br />
  ex) let foo = ["한글","abc",1004,3.14592,true,false]<br />
     foo[3] = 3.14592<br />
<br />
<br />
*while 반복문 <br />
  - while 반복문은 가장 기본적인 반복문입니다.<br />
  - 조건이 변하지 않으면 무한 반복하므로 반드시 조건을 false로 만들 수 있는<br />
   문장을 포함해야 한다. 항상 true가 되면 '무한 반복'을 무한하게 출력 <br />
   ----> 일반적으로 이러한 반복문을 무한 반복문 또는 무한 루프라고 한다. <br />
<br />
*for 반복문<br />
 - for 반복문은 원하는 횟수만큼 반복하고 싶을 때 사용합니다.<br />
  기본식 : for (초기값, 조건식, a++/a--)<br />
*for in 반복문과 for of 반복문 <br />
  - 객체에 쉽게 반복문을 적용할 때 사용 <br />
  - for in 반복문과 for of 반복문은 for 반복문 사용과 역할이 같음<br />
  <br />

## [03월 23일]
> 오늘 배운 내용 요약  <br />
*템플릿 문자열 <br />
- `23+58` (그대로 문자열로 나옴)<br />
- `23+58 = ${23+58}` ( ${} 값의 결과 값이 나옴)<br />
- `23+58 = ` + (23+58) ---> 위와 같이 똑같은 결과<br />
- "올해는" + new Date().getFullYear() +"년입니다."<br />
= 올해는2021년입니다.<br />
- `올해는` + new Date().getFullYear() + `년입니다.`<br />
= 올해는 2021년입니다.<br />
<br />
*비교 연산자<br />
"하마" < "가방" ----> false  (순서가 늦을수록 크다)<br />
<br />
"하마" < "혀니" ----->true (ㅕ가 ㅏ 보다 늦어서 true)<br />
<br />
*논리 연산자 <br />
not ---> !<br />
or ---> ||<br />
and ---> &&<br />
<br />
*복합 대입 연산자<br />
1. += 숫자 덧셈 후 대입 연산자<br />
2. -= 숫자 뺄셈 후 대입 연산자<br />
3. *= 숫자 곱셈 후 대입 연산자<br />
4. /= 숫자 나눗셈 후 대입 연산자<br />
<br />
*증감 연산자<br />
let foo = 100; (foo라는 변수가 100이라고 선언)<br />
I. foo++ (지금 바로 결과값은 100 이후 결과값은 101)<br />
II. foo-- (지금 바로 결과값은 100 이후 결과값은 99)<br />
III. ++foo (지금 바로 결과값은 101 이후 결과값은 101)<br />
IIII. --foo (지금 바로 결과값은 99 이후 결과값은 99)<br />
<br />
*강제 자료형 변환<br />
Number()   숫자로 자료형 변환<br />
String()    문자열로 자료형 변환<br />
Boolean()    불로 자료형 변환<br />
<br />
*자동 자료형 변환<br />
console.log(23+50);   --->73<br />
console.log("23"+50); --->2350<br />
console.log(23+"50"); --->2350<br />
console.log("23"+"50"); --->2350<br />
<br />
*일치 연산자<br />
===   자료형과 값이 같은지 비교<br />
!==    자료형과 값이 다른지 비교<br />
> 여러줄 요약<br>
피제수(나뉘어지는 수) / 제수(나누는 수)<br />
<br />
* 변수 키워드 'let'<br />
*상수 키워드 'const'<br />

## [03월 16일]
> 오늘 배운 내용 요약  <br />
- http 와 https 의 차이는 뒤에 붙는 s가 security 라는 뜻이다.<br />

*모바일 애플리케이션 개발<br />
 -네이티브 애플리케이션<br />
  -스마트폰에서 인식할 수 있는 프로그래밍 언어(자바,스위프트 등)로 만든 애플리<br />
케이션<br />
  -기업에서 애플리케이션을 만들 경우 2가지 언어로 만들기에 비용이 2배가 됨<br />
  -자바스크립트를 사용하면 1개의 애플리케이션만 개발해도 스마트폰 동작 가능<br />
<br />
*React native로 만들면 어떤 플렛폼에서도 이용가능<br />
<br />
*데스크톱 애플리케이션 개발<br />
 -일렉트론(Electron) 모듈: 자바스크립트로 개발 전용 텍스트 에디터를 만들어 배포,<br />
 본격적으로 데스크톱 애플리케이션 개발<br />
<br />
*게임 개발<br />
 -원래 게임은 서버와 클라이언트 모두 c++로 제작(속도가 빠름)<br />
 -스마트폰이 활성화 되면서 '한 번에 여러 스마트폰 운영체제에서 실행할 수<br />
있는 애플리케이션을 개발하는 것'이 경제적으로 이득이 됨<br />
 -유니티(Unity) 게임 엔진 등장 : 자바스크립트 기반<br />
<br />
- 프로그램을 다운받았는지 알고 싶을땐 반드시 터미널(cmd)를 끄고 다시실행<br />
ex) node js 다운후 node -v쳐서 확인<br />
> 여러줄 요약<br>
 1.자바스크립트로 할 수 있는 일<br />
- 웹 클라이언트 애플리케이션 개발<br />
  -웹 브라우저에서 실행되는 웹 클라이언트 애플리케이션 개발이 목적<br />
  -웹 브라우저에서 실행할 수 있는 유일한 프로그래밍 언어<br />
> 3번

배운내용
자바스크립트 실행 방법