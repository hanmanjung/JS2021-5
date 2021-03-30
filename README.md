# 한만중 [201840233]

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