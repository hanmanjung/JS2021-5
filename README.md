# 한만중 [201840233]

## [06월 1일]
> 오늘 배운 내용 요약  <br />
> 1. 사용할 수 없는 코드 <br>
>  * let 키워드와 const 키워드<br>
>  * 템플릿 문자열 <br>
>  * 화살표 함수 <br>
>  * for of 반복문 <br>
>  * 사용할 수 없는 메소드를 사용한 코드<br>
> 2. 브라우저 객체 모델 <br>
>  * 웹 브라우저와 관련된 객체<br>
> 3. window 객체 <br>
>  * window 객체 : 웹 페이지 자체를 나타냄<br>
> 4. 웹 브라우저에서 공통으로 활용할 수 있는 속성 <br>
> 5. location 객체와 history 객체 <br>
>  * 웹 브라우저에서 공통으로 활용할 수 있는 속성 <br>
>  * 메소드 <br>
>  * 페이지 이동 : assign () 메소드 
>                 replace () 메소드 - <뒤로가기> 버튼을 사용할 수 없음<br>
>  * history 객체의 메소드<br>
> 6. navigator 객체<br>
>  * 웹 페이지를 실행하는 웹 브라우저 정보가 들어있음 <br>  
>  * 사용자의 웹 브라우저, 운영체제를 구분할 수 있음<br>
<br>
> 1. 문서 객체 모델 관련 용어<br>
>  * 문서 객체 모델<br>
> 2. 웹 페이지 생성 순서<br>
>  * 웹 브라우저는 웹 페이지를 실행 시 HTML 코드를 위에서 아래로 실행함<br>
> 3. 문서 객체 선택 <br>
>  * 1개의 문서 객체 선택 <br>
>  * 여러 개의 문서 객체 선택<br>
> 4. 문자 조작 <br>
>  * 스타일 조작<br>
>  * 속성 조작<br>
> 5. 이벤트<br>
>  * 이벤트 관련 용어 정리 <br>
>  * 인라인 이벤트 모델 <br>
>  * 고전 이벤트 모델<br>
>  * 이벤트 객체<br>
>  * 기본 이벤트 제거<br>
<br>
> 1. jQuery 사용 준비<br>
> 2. jQuery 객체<br>
>  * jQuery 라이브러리는 $ 함수 활용<br>
>  * $ 함수의 매개 변수에는 문서 객체, CSS 형식, HTML 형식의 문자열 삽입<br>
> 3. 문서 객체 선택 <br>
>  * CSS 선택자를 사용해 문서 객체를 선택 <br>
> 4. 문서 객체 개별 조작 <br>
>  * each() 메소드 <br>
>  * 주의점 : ECMAscript5에서 제공하는 Array 객체의 forEach ()메소드와 인덱스, 요소 순서가 다름<br>
> 5. 문서 객체 조작<br>
>  * 문자 조작<br>
>  * 스타일 조작<br>
>  * 속성 조작<br>
> 6. 문서 객체 생성<br>
>  * $() 함수의 매개 변수에 HTML 형식의 문자열을 입력<br>
> 7. 이벤트 <br>
>  * 이벤트 직접 연결<br>
>  * 이벤트 간접 연결<br>
>  * 이벤트 제거<br>
> 8. 애니메이션 <br>
>  * animate() <br>
<br>
- 조금 더 나아가기<br>
1. 사용할 수 없는 코드<br>
  * let 키워드와 const 키워드 <br>
    let variable = 273; -> 최신 버전 자바스크립트 코드<br>
    const constant = "Hello World"; -> 최신 버전 자바스크립트 코드<br>
  * 템플릿 문자열 <br>
    let variable = 273; -> 최신 버전 자바스크립트 코드 <br>
    console.log(`변수의 값은 ${variable}입니다.`); -> 최신 버전 자바스크립트 코드<br>
  * 화살표 함수 <br>
    const functionLiteral = () => {<br>
<br>
    };<br>
  * for of 반복문 <br>
    const array = ['가', '나', '다'];<br>
<br>
    for (let item of array) {<br>
      console.log(item);<br>
    }<br>
  * 사용할 수 없는 메소드를 사용한 코드 <br>
    const array = [1, 2, 3, 4, 5];<br>
<br>
    array.forEach((item, index) => {<br>
      console.log(`${item}: ${index}`);<br>
    });<br>
<br>
3. window 객체<br>
  * window 객체 : 웹 페이지 자체를 나타냄 <br>
  - 새로운 화면을 열거나 웹 브라우저의 크기를 변경하는 등의 일<br>
  - 대표적으로 경고 출력을 하는 경고창과 입력을 하는 프롬프트를 제공함<br>
  * 경고 함수와 입력 함수<br>
    alert(<메시지>) -> 경고창을 출력합니다.<br> 
    prompt(<메시지>.<임시 글자>) -> 프롬프트를 출력합니다.<br>
4. screen 객체 <br>
  * screen 객체의 속성<br>
    width -> 화면의 너비<br>
    height -> 화면의 높이<br>
    availWidth -> 실제 화면에서 사용 가능한 너비<br>
    availHeight -> 실제 화면에서 사용 가능한 높이 <br>
    colorDepth -> 사용 가능한 색상 수<br>
    pixelDepth -> 한 픽셀당 비트 수<br>
5. location 객체와 history 객체 <br>
  * location 객체의 속성<br>
    href -> 문서의 URL 주소 <br>
    host  -> 호스트 이름과 포트 번호<br>
    hostname -> 호스트 이름<br>
    port -> 포트 번호<br>
    pathname -> 디렉터리 경로 <br>
    hash -> 앵커 이름 <br>
    search -> 요청 매개 변수<br>
    protocol -> 프로토콜 종류<br>
  * location 객체의 메소드<br>
    assign(<링크>) -> 매개 변수로 전달한 위치로 이동합니다.<br>
    reload() -> 새로고침합니다.<br>
    replace() -> 매개 변수로 전달한 위치로 이동합니다(뒤로 가기 불가능.)<br>
  * history 객체의 메소드<br>
    forward() -> 앞으로 이동합니다.<br>
    back() -> 뒤로 이동합니다.<br>
6. navigator 객체<br>
  * navigator 객체의 속성<br>
    appCodeName -> 웹 브라우저의 코드 이름<br>
    appName -> 웹 브라우저의 이름 <br>
    appVersion -> 웹 브라우저의 버전<br>
    platform -> 사용 중인 운영체제의 시스템 환경 <br>
    userAgent -> 웹 브라우저의 전체적인 정보 <br>
<br>
1. 문서 객체 모델 관련 용어 <br>
  * 문서 객체 모델 
    - 넓은 의미 : 웹 브라우저가 HTML 페이지를 인식하는 방법<br>
    - 좁은 의미 : document 객체와 관련된 객체의 집합을 나타냄 <br>
  * 문서 객체 : HTML 태그를 자바스크립트에서 사용할 수 있는 객체로 만듬<br>
    - 문서 객체를 조작한다는 말은 태그를 조작한다는 말과 같음<br>
    - 노드 : 각 요소 <br>
           - 요소 노드 : h1 태그와 script 태그처럼 요소를 생성하는 노드<br>
           - 텍스트 노드 : 화면에 출력되는 문자열인 Lorem ipsum dolor amet 등 <br>    
  * '정적으로 문서 객체를 생성한다'<br>
    - 웹 페이지를 처음 실행할 때 HTML 페이지에 있는 태그를 읽으면서 생성하는 것<br>
  * '동적으로 문서 객체를 생성한다'<br>
    - 자바스크립트를 사용해 프로그램 실행 중에 문서 객체를 생성하는 것 <br>
2. 웹 페이지 생성 순서<br>
  * script 태그를 아래에 삽입하면 HTML 표준에 어긋나며 HTML 페이지의 규모가 클 때 유지 보수가 어려움 -> 이벤트 기능 사용<br>
3. 문서 객체 선택<br>
  * 문서 객체 선택 <br>
    - HTML 태그를 자바스크립트에서 문서 객체로 변환<br>
    - 문서 객체를 선택하면 자바스크립트로 실행 중에 내부 글자를 변경하거나 스타일을 변경할 수 있음<br>
  * 1개의 문서 객체를 선택하는 메소드<br>
    - document.getElemntByid(아이디) -> 아이디를 사용해 문서 객체를 선택합니다. <br>
    - document.querySelector(선택자) -> 선택자를 사용해 문서 객체를 선택합니다.<br>
3. 문서 객체 선택<br>
  * 여러 개의 문서 객체 선택 <br>
    - 여러 개의 문서 객체를 선택하는 메소드 <br>
      document.getElementsByName(이름) -> name 속성으로 여러 개의 문서 객체를 선택합니다. <br>
      document.getElementsByClassName(클래스) -> class 속성으로 여러개의 문서 객체를 선택합니다. <br>
      document.querySelectorAll(선택자) -> 선택자로 여러 개의 문서 객체를 선택합니다. <br>
4. 문서 객체 조작<br>
  * 문자 조작 <br>
    - 글자를 조작하는 속성<br>
      innerHTML -> 문서 객체 내부의 글자를 나타냅니다.<br>
  * 스타일 조작 <br>
    - 스타일시트의 스타일 속성과 자바스크립트의 스타일 속성 차이<br>
      background-color -> backgroundColcor<br>
      border-radius -> borderRadius<br>
      border-bottom -> bottomBottom<br>
  * 속성 조작<br>
    - 문서 객체의 속성 조작 메소드<br>
      setAttibute(속성 이름, 속성 값) -> 속성을 지정합니다.<br>
      getAttribute(속성 이름) -> 속성을 추출합니다.<br>
5. 이벤트 <br>
  * 이벤트 관련 용어 정리 <br>
    - 이벤트 속성 : onload <br>
    - 이벤트 이름, 이벤트 타입 : load<br>
    - 이벤트 리스너, 이벤트 핸들러 : 이벤트 속성에 넣는 함수<br>
    - 이벤트 모델 : 문서 객체에 이벤트를 연결하는 방법<br>
  * 인라인 이벤트 모델 <br>
    - HTML 태그 내부에서 이벤트를 연결하는 방법<br>
  * 고전 이벤트 모델 <br>
    var image = document.getElemntByid('image');<br>
    image.width = 100;<br>
    image.height = 100;<br>
  * 이벤트 객체 <br>
  * 기본 이벤트 제거<br>
<br>
1. jQuery 사용 준비 <br>
  * 각 페이지에 접속하면 jQuery 파일과 관련된 경로가 나옴<br>
2. jQuery 객체<br>
  * jQuery 라이브러리는 $ 함수 활용 <br>
  * $ 함수의 매개 변수에는 문서 객체, CSS 형식, HTML 형식의 문자열 삽입 <br>
  * jQuery 기본 사용 형태 <br>
    window.jQuery = window.$ = jQuery;<br>
  * jQuery 객체생성<br>
    // 일반 문서 객체로 jQuery 객체를 생성합니다.<br>
    $(document)<br>
<br>
    // CSS 선택자로 jQuery 객체를 생성합니다. <br>
    $('h1')<br>
<br>
    //HTML 문자열로 jQuery 객체를 생성합니다. <br>
    $('<h1></h1>')<br>
3. 문서 객체 선택<br>
  * CSS 선택자를 사용해 문서 객체를 선택<br>
    // h1 태그를 선택합니다.<br>
      $('h1')<br>
<br>
    // h1 태그 중에 class 속성으로 logo를 가진 태그를 선택합니다.<br>
      $('h1.logo')<br>
<br>
    // id 속성이 head인 태그를 선택합니다.<br>
      $('#head')<br>
<br>
    // input 태그 중에 type 속성이 submit인 태그를 선택합니다.<br>
      $('input[type=submit]')<br>
  * 객체 탐색 메소드 <br>
    parent() -> 부모 태그를 선택합니다. <br>
    find() -> 후손 태그를 찾습니다.<br>
4. 문서 객체 개별 조작 <br>
  * 선택된 문서 객체의 수 <br>
    length -> 선택된 문서 객체의 수를 구합니다.<br>
  * 선택된 문서 객체 추출<br>
    get() -> 선택한 문서 객체 중 하나를 선택합니다.<br>
  * each() 메소드 <br>
    - 선택된 문서 객체 반복 적용<br>
      each() -> 선택한 문서 객체에 반복을 적용합니다.<br>
    - each() 메소드의 콜백 함수<br>
      [].forEach (function (item.index) {<br>
<br>
      });<br>
<br>
5. 문서 객체 조작 <br>
  * 문자 조작 <br>
    - 문자 조작 메소드 <br>
      text() -> html 태그 내부의 문자를 조작합니다.<br>
      html() -> html 태그 내부의 문자를 조작합니다(HTML 태그 인식)<br>
    - 선택자로 여러 개의 문서 객체를 선택할 때 text () 메소드는 모든 문서 객체 내부의 문자를 출력, html() 메소드는 첫 번째 문서 객체 내부의 문자를 출력<br>
  * 스타일 조작 <br>
    - css() <br>
    - 스타일 조작 메소드 <br>
      css() -> 스타일을 조작합니다.<br>
      // h1 태그의 color 스타일 속성을 가져옵니다.<br>
      $('h1').css('color')<br>
<br>
      // h1 태그의 color 스타일 속성을 red로 설정합니다.<br>
      $('h1').css('color','red')<br>
<br>
      // h1 태그의 color 스타일 속성과 backgroundColor 스타일 속성을 한꺼번에 설정합니다.<br>
      $('h1').css({<br>
        color: 'red',<br>
        backgroundColor: 'orange'<br>
      })<br>
  * 속성 조작 <br>
    - attr() <br>
    - 속성 조작 메소드 <br>
      attr() -> 속성을 조작합니다.<br>
      // img 태그의 src 속성을 가져옵니다.<br>
      $('img').attr('src')<br>
<br>
      // img 태그의 src 속성을 http://placehold.it/100x100으로 설정합니다.<br>
      $('img').css('src', 'http://placehold.it/100x100')<br>
<br>
      // img태그의 src 속성과 alt 속성을 한꺼번에 지정합니다.<br>
      $('img').css({<br>
        src: 'http://placehold.it/100x100',<br>
        alt: 'placehold.it'<br>
      })<br>
<br>
6. 문서 객체 생성<br>
  * $() 함수의 매개 변수에 HTML 형식의 문자열을 입력<br>
    $('<h1></h1>')<br>
7. 이벤트 <br>
  * jQuery의 이벤트 메소드<br>
    on() -> 이벤트를 연결합니다.<br>
    off() -> 이벤트를 제거합니다.<br>
  * 이벤트 직접 연결<br>
   - 특정 태그에 이벤트를 연결하고, 특정 태그를 눌렀을 때 이벤트가 발생<br>
   - jQuery로 이벤트를 직접 연결할 때느 on() 메소드 사용<br>
   - 기본 형태 <br>
     $(<선택자>).on(<이벤트 이름>, <콜백 함수>)<br>
  * 키보드 이벤트<br>
    keydown() -> 키보드 키를 눌렀을 때<br>
    keypress() -> 키가 입력되었을 때 <br>
    keyup() -> 키보드 키를 떼었을 때<br>
  * 마우스 이벤트 <br>
    click() -> 마우스를 클릭했을 때 <br>
    dbclick() -> 마우스를 더블 클릭했을 때 <br>
    mousedown() -> 마우스 버튼을 눌렀을 때<br>
    mouseenter() -> 마우스 커서가 해당 태그로 들어갔을 때 <br>
    mouseleave() -> 마우스 커서가 해당 태그에서 나갔을 때 <br>
    mousemove() -> 마우스가 움직일 때 <br>
    mouseup() -> 마우스 버튼을 뗄 때<br>
  * 웹 브라우저 이벤트 <br>
    resize() -> 웹 브라우저의 크기를 변경할 때<br>
    scroll() -> 웹 브라우저를 스크롤할 때<br>
  * 이벤트 간접 연결<br>
    - 부모에게 이벤트를 위임해서 부모가 이벤트를 처리하게 하는 것<br>
    - h1 태그의 부모인 body 태그에 이벤트를 연결할 것임<br>
    -'body 태그 내부에서 h1 태그를 클릭했을 때'를 구현 가능함<br>
  * 이벤트 제거<br>
    off() 메소드 사용<br>
  * 이벤트를 한 번만 연결하는 메소드<br>
    one() -> 이벤트를 한 번만 연결합니다.<br>
8. 애니메이션<br>
  * animate()<br>
  * 애니메이션 메소드<br>
    animate() -> 애니메이션을 적용합니다.<br>
    스타일에 적용<br>
    숫자를 적용할 수 있는 모든 속성에 animate() 메소드 사용 가능<br>
    콜백 함수는 애니메이션이 종료되었을 때 호출, 생략 가능함<br>
    
## [05월 25일]
> 오늘 배운 내용 요약  <br />
> 1.요청과 응답<br>
>   - express 모듈 설치<br>
>   - 요청하는 대상 : 클라이언트(사용자)<br>
>   - 응답하는 대상 : 서버(제공자)<br>
>   - 요청 메시지 : 클라이언트가 서버로 보내는 편지<br>
>   - 응답 메시지 : 서버가 클라이언트로 보내는 편지<br>
>   - HTTP 웹 서버의 요청 메시지와 응답 메시지의 형태<br>
> 2. express 모듈을 사용한 서버 생성과 실행<br>
>   - express 모듈의 기본 메소드 <br>
> 3. 페이지 라우팅<br>
>   - 페이지 라우팅 : 클라이언트 요청에 적절한 페이지를 제공하는 기술 <br>
>   - express 모듈의 페이지 라우팅 메소드 <br>
>   - 페이지 라우팅을 할 때 토큰을 활용함
> 4. 요청과 응답 <br>
>  * response 객체 <br>
>   - 데이터 제공 <br>
>   - Content-Type <br>
>   - HTTP 상태 코드 : 404 Not Found<br>
>   - 리다이렉트: 3XX, 특수한 상태 코드<br>
>  * request 객체<br>
>   - 요청 매개 변수<br>
> 5. 미들웨어<br>
>  * 정적 파일 제공<br>
>  * morgan 미들웨어<br>
>  * body-parser 미드웨어<br>
<br>
1. RESTful 웹 서비스 개요<br>
  * REST 규정에 맞게 만든 ROA를 따르는 웹 서비스 디자인 표준<br>
  * RESTful 웹 서비스<br>
2. 코드 구성<br>
3. Postman 크롬 애플리케이션<br>
- 조금 더 나아가기<br>
1. express 모듈 설치<br>
 $ npm install express@4 <br>
<br>
2. express 모듈을 사용한 서버 생성과 실행<br>
 - express 모듈의 기본 메소드
   express() -> 서버 애플리케이션 객체를 생성합니다. <br>
   app.use() -> 요청이 왔을 때 실행할 함수를 지정합니다. <br>
   app.listen -> 서버를 실행합니다. <br>
<br>
 - express 모듈로 서버 생성과 실행<br>
  // 모듈을 추출합니다.<br>
  const express = require('express');<br>
<br>
  //서버를 생성합니다.<br>
  const app = express();<br>
<br>
  // request 이벤트 리스너를 설정합니다.<br>
  app.use{(request, response) => {<br>
    response.send('<h1>Hello express</h1>');<br>
  });<br>
<br>
// 서버를 실행합니다.<br>
app.listen(52273, () => {<br>
  console.log('Server running at http://127.0.0.1:52273');<br>
});<br>
<br>
  - express 모듈의 페이지 라우팅 메소드 <br>
    get(path. callback) -> GET 요청이 발생했을 때 이벤트 리스너를 지정합니다. <br>
    post(path. callback) -> POST 요청이 발생했을 때 이벤트 리스너를 지정합니다.<br>
    put(path. callback) -> PUT 요청이 발생했을 때 이벤트 리스너를 지정합니다.<br>
    delete(path. callback) -> DELETE 요청이 발생했을 때 이벤트 리스너를 지정합니다.<br>
    all(path. callback) -> 모든 요청이 발생했을 때 이벤트 리스너를 지정합니다.<br>
    <br>
  - 페이지 라우팅을 할 때 토큰을 활용함<br>
    '<토큰 이름>' 형태로 설정<br>
    토큰은 다른 문자열로 변환 입력가능, request 객체의 params 속성으로 전달됨<br>
    <br>
  - 페이지 라우팅<br>
  // 모듈을 추출합니다.<br>
  const express = require('express');<br>
<br>
  //서버를 생성합니다.<br>
  const app = express(); <br>
<br>
  // request 이벤트 리스너를 설정합니다. <br>
  app.get('/page/:id', ({)request, response) => {<br>
    //토큰을 꺼냅니다.<br>
    const id = request.params.id;<br>
<br>
    // 응답합니다.<br>
    response.send(`<h1>${id} page</h1>`);<br>
  });<br>
<br>
  // 서버를 실행합니다.<br>
  app.listen(52273, () => {<br>
    console.log('Server running at http://127.0.0.1:52273');<br>
  });<br>
<br>
4. 요청과 응답 <br>
  - response 객체의 기본 메소드 <br>
    send() -> 데이터 본문을 제공합니다. <br>
    status() -> 상태 코드를 제공합니다. <br>
    set() -> 헤더를 설정합니다.
  - 데이터 제공 <br>
    send() 메소드 : 사용자에게 데이터 본문을 제공 <br>
    send() 메소드는 가장 마지막에 실행해야 하며, 두 번 실행할 수 없음<br>
<br>
  - MIME 형식
    text/plain -> 기본적인 텍스트를 의미합니다. <br>
    text/html -> html 데이터를 의미합니다.<br>
    image/png -> png 데이터를 의미합니다.<br>
    audio/mpe -> MP3 음악 파일을 의미합니다.<br>
    video/mpeg -> MPEG 비디오 파일을 의미합니다. <br>
    application/json -> json 데이터를 의미합니다. <br>
    multipart/form-data -> 입력 양식 데이터를 의미합니다. <br>
<br>
  - Content-Type 지정 메소드<br>
    type() -> Content-Type을 MIME 형식으로 지정합니다.<br>
  - HTTP 상태 코드의 예<br>
    1XX -> 처리중<br>
    2XX -> 성공<br>
    3XX -> 리다이렉트<br>
    4XX -> 클라이언트 오류<br>
    5XX -> 서버 오류 <br>
<br>
  - status() 메소드<br>
    status() -> 상태 코드를 지정합니다.<br>
<br>
  - 상태 코드<br>
  // 모듈을 추출합니다. <br>
  const express = require('express');<br>
<br>
  // 서버를 생성합니다.<br>
  const app = express();<br>
<br>
  // request 이벤트 리스너를 설정합니다.<br>
  app.get('*', (request, response) => {<br>
    response.status(404);<br>
    response.send('해당 경로에는 아무것도 없습니다.');<br>
  });<br>
  <br>
  // 서버를 실행합니다.<br>
  app.listen(52273, () => {<br>
    console.log('Server running at http://127.0.0.1:52273');<br>
  });<br>
<br>
  - redirect() 메소드<br>
    redirect() -> 리다이렉트합니다. <br>
<br>
5. 미들웨어 <br>
  - 미들웨어 설정 메소드 <br>
    use() -> 미들웨어를 설정합니다. <br>
  - 정적 파일 제공 <br>
    // 모듈을 추출합니다. <br>
    const express = require('express');<br>
<br>
    //서버를 생성합니다. <br>
    const app = express();<br>
    app.use(express.static('public'));<br>
<br>
    // request 이벤트 리스너를 설정합니다.<br>
    app.get('*', (request, response) => {<br>
      response.send(404);<br>
      response.send('해당 경로에는 아무것도 없습니다.');<br>
    });<br>
    <br>
    // 서버를 실행합니다. <br>
    app.listen(52273, () => {<br>
      console.log('Server running at http://127.0.0.1:52273');<br>
    });<br>
<br>
  - 요청 본문의 종류<br>
    application/x-www-form-urlencoded -> 웹 브라우저에서 입력 양식을 POST,PUT,DELETE 방식 등으로 전달 할 때 사용하는 기본적인 요청 형식입니다. <br>
    application/json -> JSON 데이터로 요청하는 방식입니다. <br>
    nultipart/form-data -> 대용량 파일을 전송할 때 사용하는 요청 방식입니다.<br>
<br>
  - 속성 정리 : 클라이언트가 서버로 데이터를 전송하는 세 가지 방법 <br>
    params 객체 : URL의 토큰, 보기가 간편 <br>
    query 객체 : URL의 요청 매개 변수, 토큰보다 많은 데이터를 전달할 수 있으며,
    주소로 어떤 데이터가 오고 가는지 확인가능<br>
    body 객체 : 대용량 문자열 등을 전송할 때 사용, 주소에 데이터를 기록하지 못하므로 새로고침이나 즐겨찾기 기능 등을 활용할 수 없음 <br>
<br>
  - RESTful 웹 서비스의 구조 <br>
    GET -> 컬렉션을 조회합니다.<br>
    POST -> 컬렉션에 새로운 데이터를 추가합니다.<br>
    PUT -> 컬렉션 전체를 한꺼번에 변경합니다.<br>
    DELETE -> 컬렉션 전체를 삭제합니다.<br>
<br>
  - RESTful 웹 서비스
    GET -> 모든 사용자 정보를 조회합니다.<br>
    POST -> 사용자를 추가합니다.<br>
    GET -> 특정 사용자 정보를 조회합니다.<br>
    PUT -> 특정 사용자 정보를 수정합니다.<br>
    DELETE -> 특정 사용자 정보를 제거합니다.<br>
<br>
  - RESTful 웹 서비스<br>
  // 모듈을 추출합니다.<br>
  const express = require('express');<br>
  const bodyparser = require('body-parser');<br>
  //서버를 생성/실행합니다.<br>
  const app = express();<br>
  app.listen(52273, () => {<br>
    console.log('Server Running at http://127.0.0.1:52273');<br>
  });<br>
  <br>
  // 미들웨어를 추가합니다.<br>
  app.use(bodyParser.urlencoded({<br>
    extended: false<br>
  }));<br>
<br>
  // 변수를 선언합니다. <br>
  
## [05월 18일]
> 오늘 배운 내용 요약  <br />
1. 전역 변수<br>
 - 전역 변수, 전역 함수, 전역 객체 : 모든 곳에서 사용할 수 있는 것들<br>
2.process 객체의 속성과 이벤트<br>
  - node.js는 process 전역 객체를 제공<br>
  - process 객체는 프로세스 정보를 제공하며, 제어할 수 있게 하는 객체<br>
3. process 객체와 이벤트 개요<br>
  - Node.js의 이벤트 연결 메소드<br>
  - process 객체에 exit 이벤트와 uncaughtException 이벤트를 연결 <br>
  - 이후에 예외를 강제로 발생시켜 이벤트가 발생하는지 확인<br>
  - 이벤트 매개 변수 : 이벤트 핸들러의 매개 변수로 전달되는 매개 변수<br>
4. os 모듈<br>
  - os 모듈 사용<br>
  - os 모듈 추출<br>
5. url 모듈<br>
  - url 모듈을 추출하고, parse() 메소드를 사용<br>
6. File System 모듈<br>
 * 파일 읽기<br>
   - 실행할 자바스크립트 파일이 있는 폴더에 textfile.txt 이름의 파일을 생성<br>
    -- textfile.txt 파일에는 간단한 문자열 'this is a textfile.txt'를 입력<br>
   - fs.readFileSync() 메소드를 사용해 동기적으로 파일을 읽음<br>
   - fs.readFile () 메소드를 사용해 비동기적으로 파일을 읽음<br>
   - 동기와 비동기의 실행 결과는 같지만 내부 실행 구조는 다름<br>
   - 동기적으로 파일을 읽어 들일 때 코드 순서<br>
     1) 파일의 크기가 굉장히 크다면 2에서 3으로 이동할 때 코드가 정지할 가능성이 있음<br>
     2) 문제를 해결을 위해 쓰레드 기능을 사용해야 함<br>
     3) Node.js에는 쓰레드의 기본 이념이 들어 있음<br>
   - 비동기적으로 구성된 코드<br>
     1) 2에서 3으로 이동하는 시간이 0초에 가까움<br>
     2) 즉, 코드는 진행하고 Node.js의 뒷단에서 파일을 읽어 들이는 처리가 수행됨<br>
     3) 이러한 뒷단에서 처리가 모두 끝나면, 그때 콜백 함수 부분을 실행함<br>
     4) 콜백 함수의 첫 번째 매개 변수는 오류객체이고 두 번째 매개 변수가 원하는 값임<br>
 * 비동기 처리의 장점<br>
 - 웹 서버를 C++ 프로그래밍 언어로 만들면 무척 빠르지만, 개발과 유지 보수는 어려움<br>
 - 전 세계 웹 서비스 기업(페이스북,트위터 등)도 C++로 웹 서버를 개발하지 않고 PHP, 자바, 루비, 파이썬, Node.js등 
 프로그래밍 언어로 개발<br>
 - 프로그래밍 언어 자체는 느리지만 큰 의미가 없다고 판단해 개발 속도와 유지 보수성이 좋은 프로그래밍 언어를 사용<br>
 - 자바스크립트 프로그래밍 언어는 C++, 자바보다 느리지만 Node.js를 사용하면<br>
 -손쉽게 비동기 처리를 구현하여 빠른 처리가 가능<br>
 * 파일 처리와 예외 처리<br>
 - 동기 코드 예외처리 : try catch 구문<br>
 - 비동기 코드 예외처리 : 콜백함수의 첫 번째 매개 변수 error를 활용<br>
7. 노드 패키지 매니저<br> 
 - 과거의 프로그래밍 언어들은 외부 모듈 설치가 어려웠음<br>
 -현재는 '패키지 매니저' 모듈 관리 프로그램을 사용해 모듈을 쉽게 설치하고 활용 가능함<br>
 - Node.js는 npm(Node.js Package Manager) 패키지 매니저를 사용<br>
 - npm을 이용한 외부 모듈 설치<br>
 - 명령어 뒤에 @ 기호를 사용하면 원하는 버전을 설치<br>
8. request 모듈 <br>
 - 코드 실행 전에 npm install request 명령어를 실행해서 request 모듈을 설치<br>
9. cheerio 모듈<br>
 - request 모듈로 가져온 웹페이지는 단순한 HTML 문자열임<br>
 - 여기에서 원하는 정보를 추출해야 단순한 '데이터'가 '정보'가 됨 -> 파싱<br>
 - cheerio 모듈 : 가져온 웹 페이지의 특정 위치에서 손쉽게 데이터를 추출<br> 
<br>
- 조금 더 나아가기<br>
1. 전역변수 <br>
 * 문자열 자료형의 전역 변수<br>
  - __filename<br>
  - __firname<br>
 * __filename과 __dirname 출력<br>
 console.log(__filename);<br>
 console.log(__dirname);<br>
2. process 객체의 속성과 이벤트<br>
 * process 객체의 속성<br>
  - env -> 컴퓨터 환경 정보를 나타냅니다.<br>
  - version -> Node.js 버전을 나타냅니다.<br>
  - versions -> Node.js와 종속된 프로그램 버전을 나타냅니다.<br>
  - arch -> 프로세서의 아키텍처를 나타냅니다.<br>
  - platform -> 플랫폼을 나타냅니다.  <br>
 * process 객체의 메소드<br>
  - exit([exitCode=0]) -> 프로그램을 종료합니다.<br>
  - memoryUsage() -> 메모리 사용 정보 객체를 리턴합니다.<br>
  - upTime() -> 현재 프로그램이 실행된 시간을 리턴합니다.<br>
3. process 객체와 이벤트 개요<br>
 * Node.js 이벤트 연결 메소드<br>
  - on(<이벤트 이름>.<이벤트 핸들러>) -> 이벤트를 연결합니다.<br>
 * process 객체의 이벤트<br>
  - exit -> 프로세스가 종료될 때 발생합니다.<br>
  - uncaughtException -> 예외가 일어날 때 발생합니다.<br>
-- 코드<br>
  // exit 이벤트를 연결합니다.<br>
  process.on('exit', ()=> {<br>
    console.log('프로세스가 종료되었습니다.');<br>
  });<br>
<br>
  // uncaughtException 이벤트를 연결합니다.<br>
  process.on('uncaughtException', () => {<br>
    console.log('예외가 발생했습니다.');<br>
  });<br>
<br>
  // 예외를 강제로 발생시킵니다.<br>
  error.error.error();<br>
 * exit 이벤트의 이벤트 매개 변수<br>
  process.on('exit', (code) => {<br>
    console.log(1About to exit with code: ${code}`);<br>
  });<br>
4. os 모듈 <br>
 * os 모듈 추출<br>
  // 모듈을 추출합니다.<br>
   const os = require('os');<br>
<br>
  - os 모듈의 메소드<br>
   - hostname() -> 운영체제의 호스트 이름을 리턴합니다.<br>
   - type() -> 운영체제의 이름을 리턴합니다.<br>
   - platform() -> 운영체제의 플랫폼을 리턴합니다.<br>
   - arch() -> 운영체제의 아키텍처를 리턴합니다.<br>
   - release() -> 운영체제의 버전을 리턴합니다.<br>
   - upTime() -> 운영체제가 실행된 시간을 리턴합니다.<br>
   - loadavg() -> 로드 에버리지 정보를 담은 배열을 리턴합니다. <br>
   - totalmem() -> 시스템의 총 메모리를 리턴합니다.<br>
   - freemem() -> 시스템의 사용 가능한 메모리를 리턴합니다.<br>
   - cpus() -> CPU의 정보를 담은 객체를 리턴합니다.<br>
   - getNetworkInterfaces() -> 네트워크 인터페이스의 정보를 담은 배열을 리턴합니다.<br>
 * os 모듈<br>
  // 모듈을 추출합니다. <br>
  const os = require('os');<br>
<br>
  // 모듈을 사용합니다.<br>
  console.log(os.hostname());<br>
  console.log(os.type());<br>
  console.log(os.platform());<br>
  console.log(os.release());<br>
  console.log(os.uptime());<br>
  console.log(os.loadavg());<br>
  console.log(os.totalmem());<br>
  console.log(os.freemem());<br>
  console.log(os.cpus());<br>
  console.log(os.networkInterfaces());<br>
5. url 모듈<br>
 * url 모듈 추출 <br>
  // 모듈을 추출합니다.<br>
  const url = require('url');<br>
 * url 모듈의 메소드<br>
  - parse(urlStr[.parseQueryString=false,
  slashesDenoteHost=false]) -> URL 문자열을 URL 객체로 변환해 리턴합니다.<br>
  - format(urlObj) -> URL 객체를 URL 문자열로 변환해 리턴합니다. <br>
  - resolve(from.to) -> 매개 변수를 조합하여 완전한 URL 문자열을 생성해 리턴합니다.<br>
 * url 모듈<br>
 // 모듈을 추출합니다.<br>
 const url = require('url');<br>
<br>
 // 모듈을 사용합니다.<br>
 const parsedObject = 
       url.parse('http://www.habit.co.kr/store/books/look.php?p_code=B4250257160');<br>
 console.log(parseObject);<br>
 * fs 모듈 추출 방법<br>
  //모듈을 추출합니다.<br>
  const fs = require('fs');<br>
 * 파일 읽기 메소드 <br>
  - fs.readFileSync(<파일 이름>) -> 동기적으로 파일을 읽어 들입니다<br>
  - fs.readFile(<파일 이름>,<콜백 함수>) -> 비동기적으로 파일을 읽어 들입니다.<br>
<br>
 * fs.readFileSync() 메소드<br>
  // 모듈을 추출합니다.<br>
  const fs = require('fs');<br>
  // 파일을 읽어 들이고 출력합니다.<br>
  const file = fs.readFileSync('textfile.txt');<br>
  console.log(file);<br>
  console.log(file.toString());<br>
 * fs.readFile() 메소드<br>
 // 모듈을 추출합니다.<br>
 const fs = require('fs');<br>
<br>
 //파일을 읽어 들입니다.<br>
 fs.readFile('textfile.txt' (error, file) => {<br>
   // 출력합니다.<br>
   console.log(file);<br>
   console.log(file.toString());<br>
 });<br>
<br>
6. File System 모듈<br>
 * 여러 파일을 비동기적으로 읽기<br>
  // 모듈을 추출합니다.<br>
  const fs = require('fs');<br>
<br>
  //파일을 읽어 들입니다.<br>
  const a = readFileSync('a.txt');<br>
  const b = readFileSync('b.txt');<br>
  const c = readFileSync('c.txt');<br>
<br>
  // 파일을 출력합니다.<br>
  console.log(a, b, c);<br>
<br>
 * 여러 파일을 비동기적으로 읽기<br>
  // 모듈을 추출합니다.<br>
  const fs = require('fs');<br>
  const async = require('async');<br>
<br>
  //병렬적으로 파일을 읽어 들입니다.<br>
  async.parallel({<br>
    (callback) => { fs.readFile('a.txt', callback); },<br>
    (callback) => { fs.readFile('b.txt', callback); },<br>
    (callback) => { fs.readFile('c.txt', callback); },<br>
  }, (error, result) => {<br>
    // 출력합니다.<br>
    console.log(results); <br>
  });<br>
  <br>
 * 파일 쓰기 메소드<br>
  - fs.writeFileSync(<파일 이름>, <문자열>) -> 동기적으로 파일을 씁니다.<br>
  - fs.writeFile(<파일 이름>,<문자열>,<콜백 함수>) -> 비동기적으로 파일을 씁니ㅏ.<br>
 * fs.writeFileSync() 메소드<br>
  // 모듈을 추출합니다.<br>
  const fs = require('fs');<br>
<br>
  // 파일을 씁니다.<br>
  fs.writeFileSync('output.txt', '안녕하세요....!');<br>
  console.log('파일 쓰기를 완료했습니다.');<br>
<br>
 * fs.writeFileSync() 메소드 예외 처리<br>
  // 모듈을 추출합니다.<br>
  const fs = require('fs');<br>
<br>
  // 예외 처리합니다.<br>
  try {<br>
    // 파일을 읽어 들이고 출력합니다.<br>
    const file = fs.readFileSync('none.txt');<br>
    console.log(file);<br>
    console.log(file.toString());<br>
  } catch (exception) {<br>
    // 예외가 발생했을 때<br>
     console.log('파일을 읽어 들이는데 문제가 발생했습니다.');<br>
     console.log(exception);<br>
  }<br>
<br>
 * fs.readFile() 메소드 예외 처리<br>
  // 모듈을 추출합니다.<br>
  const fs = require('fs');<br>
<br>
  // 파일을 읽어 들입니다.<br>
  fs.readFile('none.txt', (error, file) => {<br>
    // 예외 처리합니다.<br>
    if (error) {<br>
      // 예외가 발생했을 때<br>
      console.log('파일을 읽어 들이는데 문제가 발생했습니다.');<br>
      console.log(error);<br>
    } else { <br>
      // 출력합니다.<br>
      console.log(file);<br>
      console.log(file.toString());<br>
    }<br>
  });<br>
  <br>
<br>
 * npm 을 이용한 외부 모듈 설치 <br>
  > npm install <모듈 이름><br>
  예> npm install express<br>
 * 명령어 뒤에 @ 기호를 사용하면 원하는 버전을 설치<br>
  > npm install <모듈 이름>@<버전> <br>
  예> npm install express@4<br>
  예> npm install express@4.2<br>
  예> npm install express@4.2.7<br>
<br>
8.request 모듈<br>
 * 설치 <br>
  > npm install request <br>
 * request 모듈 추출 <br>
  // 모듈을 추출합니다. <br>
  const request = require('request');<br>
<br>
 * request 모듈<br>
  // 모듈을 추출합니다.<br>
  const request = require('request');<br>
<br>
  //request 모듈을 사용합니다.<br>
  const url = ' http://www.habit.co.kr/store/books/new_book_list.html';<br>
  request(url, (error, response,body) => {<br>
    console.log(body);<br>
  });<br>
9. cheerio 모듈<br>
 * cheerio 모듈 설치 <br>
  > npm install cheerio<br>
 * cheerio 모듈 추출<br>
  // 모듈을 추출합니다.<br>
  const cheerio = require('cheerio');<br>
<br>
10. async 모듈<br>
 * async 모듈 설치<br>
  > npm install async <br>
 * async 모듈 추출<br>
   // 모듈을 추출합니다.<br>
   const async = require('async');<br>
<br>
 * async 모듈의 parallel() 메소드 <br>
  // 모듈을 추출합니다.<br>
  const fs = require('fs');<br>
  const async = require('async');<br>
<br>
  // 파일A를 읽습니다.<br>
  async.parallel({<br>
    fileA: (callback) => {<br>
      fs.readFile('fileA.txt', callback);<br>
    },<br>
    fileB: (callback) => {<br>
      fs.readFile('fileB.txt', callback);<br>
    },<br>
    fileC: (callback) => {<br>
      fs.readFile('fileC.txt', callback);<br>
    }<br>
  }, (error, result) => { <br>
    console.log(results.fileA);<br>
    console.log(results.fileB);<br>
    console.log(results.fileC); <br>
  });<br>
  <br>
  
## [05월 11일]
> 오늘 배운 내용 요약  <br />
- Date 객체<br>
 --메소드 활용 <br>
  ＊Date 객체 <br>
   get00() 형태 메소드, set00() 형태 메소드 : FullYear, Month, Day, Hours, Minutes, Seconds 등 사용 <br>
 --시간 더하기<br>
   ＊시간 더하기 <br>
   현재 시간에 1년, 11개월, 7일을 더해 출력 <br>
 --시간 간격 구하기<br>
   ＊getTime() 메소드: 유닉스 타임 <br>
   ＊2개의 시간을 빼고, 일 단위(1000밀리초*60초*60분*24시간)로 나누어 시간 간격을 구함 <br>
- Array 객체<br>
 --Array 객체의 기본 메소드<br>
   ＊대부분 파괴적 메소드로 자기 자신을 변경 <br>   
 -- 배열 정렬 -sort() 메소드 : 배열 정렬<br>
- 조금 더 나아가기<br>
 --프로토타입에 메소드 추가<br>
   ＊프로토타입에 메소드를 추가하면 해당 자료형 전체에 추가 가능<br>
   ＊String 생성자 함수의 prototype 속성에 contain() 메소드를 추가 <br>
 --underscore.js 라이브러리<br>
   ＊자주 사용하는 기능 정리<br>
 --JSON 객체 <br>
   ＊자바스크립트 객체를 사용한 데이터 표현 방법<br>
   ＊제약 사항<br>
     문자열은 큰따옴표로 만듬<br>
     모든 키는 큰따옴표로 감싸야 함<br>
     숫자, 문자열, 불 자료형만 사용할 수 있음<br>
   ＊JSON 객체의 메소드<br>  
   ＊JSON.stringify() 메소드: 문자열 리턴<br>
   ＊JSON.parse() 메소드: 객체 리턴<br>
- 1. 예외와 기본 예외 처리<br>
 -- 예외: 실행에 문제가 발생하면 자동 중단됨. 이렇게 발생한 오류<br>
 -- 예외 처리: 오류에 대처할 수 있게 하는 것<br>
 -- 예외 상황 확인: undefined 자료형을 일반적인 객체 또는 함수처럼 다루면 TypeError 예외가 발생<br>
- 2. 고급 예외 처리
 -- try catch finally 구문
- 3. 예외 객체
 -- 예외가 발생하면 어떤 예외가 발생했는지 정보를 전달함 <br>
 -- catch 구문의 괄호 안의 변수<br>
 -- name 속성과 message 속성이 있음<br>
- 4. 예외 강제 발생<br>
 -- throw 키워드 사용<br>
 -- throw 키워드 뒤에는 문자열 또는 Error 객체를 입력 <br>

   > 여러줄 요약<br>
  -- Date 객체 생성 방법<br>
  new Date() -> 현재 시간으로 Date 객체를 생성합니다.<br> 
  new Date(<유닉스 타임>) -> 유닉스 타임(1970년 1월 1일 00시 00분 00초부터 경과한 밀리초)으로 Date 객체를 생성합니다.<br>
  <br>
  new Date(<시간 문자열>) -> 문자열로 Date 객체를 생성합니다.<br>
  new Date(<년>,<월-1>,<일>,<시간>,<분>,<초>,<밀리초>) -> 시간 요소(년,월-1,일,시간,분,초,밀리초)를 기반으로 Date 객체를 생성합니다.<br>
  -- Date 객체 생성<br>
  // 현재 시간을 기반으로 Date 객체를 생성합니다.<br>
  let dateA = new Date();<br>
  console.log(dateA);<br>
<br>
  // 유닉스 타임(1970년 1월 1일 00시 00분 00초부터 경과한 밀리초)<br>
  let dateB = new Date(692281800000);<br>
  console.log(dateB);<br>
<br>
  // 문자열을 기반으로 Date 객체를 생성합니다.<br>
  let dateC = new Date("December 9, 1991 21:30:00")<br>
  console.log(dateC);<br>
<br>
  //시간 요소(년,월-1,일,시간,분,초,밀리초)를 기반으로 Date 객체를 생성합니다.<br>
  let dateD = new Date(1991, 12, -1, 9, 21, 30, 0, 0);<br>
  console.log(dateD);<br>
<br>
 --시간 더하기<br>
  // 현재 시간을 구합니다.<br>
  let date = new Date();<br>
<br>
  //출력1<br>
  console.log(date);<br>
<br>
  //시간을 더합니다.<br>
  date.setFullYear(date.getFullYear() + 1);<br>
  date.setMonth(date.getMonth() + 11);<br>
  date.setDate(date.getDate() + 3);<br>

 --시간 간격 구하기 <br>
 // 변수를 선언합니다.<br>
 let now = new Date();<br>
 let before = new Date('December 9, 1991');<br>
<br>
 // 시간 간격을 구합니다.<br>
 let interval = now.getTime() - before.getTime();<br>
 interval = Math.floor(interval / (1000*60*60*24));<br>
<br>
 //출석합니다.<br>
 console.log(`태어나고 ${interval}일 지났습니다.`)<br>

 --Array 객체의 메소드<br>
 concat() -> 매개 변수로 입력한 배열의 요소를 모두 합쳐 배열을 만들어 리턴합니다.<br>
 join() -> 배열 안의 모든 요소를 문자열로 만들어 리턴합니다.<br>
 pop() -> 배열의 마지막 요소를 제거하고 리턴합니다.<br>
 push() -> 배열의 마지막 부분에 새로운 요소를 추가합니다.<br>
 reverse() -> 배열의 요소 순서를 뒤집습니다.<br>
 slice() -> 배열 요소의 지정한 부분을 리턴합니다. <br>
 sort() -> 배열의 요소를 정렬합니다.<br>
 splice() -> 배열 요소의 지정한 부분을 삭제하고 삭제한 요소를 리턴합니다.<br>

 --Array 객체의 메소드<br>
 // 배열을 선언합니다.<br>
 let array =[{<br>
   name:'고구마',<br>
   price: 1000<br>
 },{<br>
   name:'감자',<br>
   price: 500<br>
 },{<br>
   name:'바나나',<br>
   price: 1500<br>
 }];<br>
<br>
 // 배열의 요소를 꺼냅니다.<br>
 let popped = array.pop();<br>
 console.log('- 배열에서 꺼낸 요소');<br>
 console.log(popped);<br>
 console.log('- pop() 메소드를 호출한 이후의 배열');<br>
 console.log(array);<br>
<br>
 // 배열에 요소를 넣습니다.<br>
 array.push(popped);<br>
 array.push({<br>
   name: '사과',<br>
   price: 2000<br>
 })<br>
 console.log('- push() 메소드를 호출한 이후의 배열');<br>
 console.log(array);<br>

 -- sort() 메소드<br>
 // 배열을 선언합니다.<br>
 let arrayA = ['고구마', '감자', '바나나'];<br>
 let arrayB =[{<br>
   name: '고구마',<br>
   price: 1000<br>
 },{<br>
   name: '감자',<br>
   price: 500<br>
 }, {<br>
   name: '바나나',<br>
   price: 400<br>
 }];<br>
<br>
 //기본 배열을 정렬하고 출력합니다.<br>
 arrayA.sort();<br>
 console.log('- 문자열로 정렬');<br>
 console.log(arrayA);<br>
 console.log();<br>
 console.log('- 문자열로 정렬(역순)');<br>
 console.log(arrayA.reverse());<br>
 console.log();<br>
<br>
// 객체 내부의 숫자로 정렬하고 출력합니다.<br>
arrayB.sort((itemA, itemB) => {
  return itemA.price - itemB.price;
});
console.log('- 객체 내부의 숫자로 정렬')
console.log(arrayB);
console.log();

// 객체 내부의 문자열로 정렬하고 출력합니다.<br>
arrayB.sort((itemA, itemB) => {<br>
  if (itemA.name < itemB.name){<br>
    return -1;<br>
  }else if (itemA.name > itemB.name){<br>
    return 1;<br>
  }else {<br>
    return 0;<br>
  }<br>
});<br>
console.log('- 객체 내부의 문자열로 정렬')<br>
console.log(arrayB);<br>
<br>
 -- underscore.js 라이브러리를 사용한 정렬<br>
 // 모듈을 추출합니다.<br>
 const _ = require('underscore');<br>
<br>
 // 변수를 선언합니다.<br>
 const array = [{<br>
   name: '고구마',<br>
   price: 1000<br>
 },{<br>
   name: '감자',<br>
   price: 500<br>
 },{<br>
   name: '바나나',<br>
   price: 1500<br>
 }];<br>
 // 1번 형태<br>
 const outputA = _sortBy(array, (item) => item.price);<br>
 console.log(outputA);<br>
<br>
 // 2번 형태<br>
 const outputB = _(array).sortBy(item) => item.name);<br>
 console.log(outputB);<br>
<br>
 -- JSON 객체 활용<br>
 //변수를 선언합니다.<br>
 const javascriptObject = [{<br>
   name: '윤인성',<br>
   region: '서울'<br>
 },{<br>
   name: '윤명월',<br> 
   region: '도쿄'<br>
 }];<br>
<br>
 //JSON.stringify() 메소드로 자바스크립트 객체를 JSON 문자열로 변경합니다.<br>
 const outputA = JSON.stringify(javascriptObject);<br>
 const outputB = JSON.stringify(javascriptObject, null, 2);<br>
 console.log(typeof(outputA));<br>
 console.log(outputA);<br>
 console.log(outputB);<br>
 console.log('------------------');<br>
<br>
 //JSON.parse() 메소드로 JSON 문자열을 자바스크립트 객체로 변경합니다.<br>
const outputC = JSON.parse(outputB)<br>
console.log(typeof(outputC));<br>
console.log(outputC);<br>
<br>
-TypeError 발생<br>
// 함수 선언<br>
function callThreeTimes(callback) {<br>
  for (let i=0;i<3;i++){<br>
    callback();<br>
  }<br>
}<br>
<br>
// 정상 실행<br>
callThreeTimes(function () { console.log('안녕하세요');<br>
<br>
// 예외 발생<br>
callThreeTimes();<br>
<br>
- TypeError를 기본 예외 처리로 처리<br>
function callTenTimes(callback) {<br>
  if (callback) {<br>
    for (let i=0;i<10;i++){<br>
      callback();<br>
    }<br>
  }else {<br>
    console.log('매개 변수 callback이 지정되지 않았습니다.');<br>
  }<br>
}<br>
<br>
// 정상 실행<br>
callTenTimes(function () {console.log('안녕하세요'); });<br>
<br>
// 예외 발생<br>
callTenTimes();<br>
<br>
- 고급 예외 처리<br>
try {<br>
  // 예외를 발생시킵니다.<br>
  const array = new Array(-2000);<br>
} catch (exception) {<br>
  console.log(`${exception.name} 예외가 발생했습니다.`);<br>
} finally {<br>
  console.log(`finally 구문이 실행되었습니다.`);<br>
}<br>
<br>
- 예외 객체<br>
try {<br>
  // 예외를 발생시킵니다.<br>
  error.error.error();<br>
} catch (e){<br>
  console.log(e.name);<br>
  console.log(e.message);<br>
}<br>
<br>
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