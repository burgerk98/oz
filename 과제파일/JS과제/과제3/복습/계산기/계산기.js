let display = document.getElementById('display');

//show(value)를 호출하면 value를 더해 display에 나타낸다.
function show(value) {
  display.value += value;
}

function calculate() {
  // try : 실행할 코드 블록을 정의
  // eval : 문자열을 코드로 인식하게한다.(eval을 사용하면 좋지않다고한다.)
  try {
      display.value = eval(display.value);
  }
  // catch : try를 실행하다 에러가 발생하면 실행
  catch (error) {
      display.value = 'Error';
  }
}

function allclear() {
  display.value = '';
}