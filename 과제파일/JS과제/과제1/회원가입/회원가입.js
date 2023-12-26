const form = document.getElementById("register-form");
form.addEventListener("submit", function (event) {
  
    event.preventDefault();

    const idValue = document.getElementById("id").value;
    const pwValue = document.getElementById("pw").value;
    const pwAgainValue = document.getElementById("pw_again").value;
    const nameValue = document.getElementById("name").value;
    const birth_yyValue = document.getElementById("birth_yy").value;
    const birth_mmValue = document.getElementById("birth_mm").value;
    const birth_ddValue = document.getElementById("birth_dd").value;
    const genderValue = document.getElementById("gender").value;
    const emailValue = document.getElementById("email").value;
    const phoneValue = document.getElementById("phone").value;
    const codeValue = document.getElementById("code").value;

    console.log("아이디: " + idValue);
    console.log("비밀번호: " + pwValue);
    console.log("비밀번호 재입력: " + pwAgainValue);
    console.log("이름: " + nameValue);
    console.log("생년월일: " + birth_yyValue + birth_mmValue + birth_ddValue);
    console.log("성별: " + genderValue);
    console.log("이메일: " + emailValue);
    console.log("전화번호: " + phoneValue);
    console.log("인증번호: " + codeValue);

    //값을 받아올 때 value때문인지 femail, mail, none으로 나타난다.
});