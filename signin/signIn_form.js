const id = document.querySelector(".id");
const password = document.querySelector(".password");
const signInBtn = document.querySelector(".signin-submit");

// signin form state
let idState = false;
let pwdState = false;

// function

const signInBtnActivateHandler = () => {
  if (idState && pwdState) {
    // 속성 disabled 추가 또는 삭제로 변경 되어야함
    signInBtn.disabled = false;
  } else {
    signInBtn.disabled = true;
  }
};
signInBtnActivateHandler();

// 정규식대로 아이디 입력이 안되었을 경우 와
// 비밀번호 입력이 안되었을 경우 로그인 버튼 비활성화
id.addEventListener("keyup", (e) => {
  if (e.target.value != "") {
    idState = true;
  }
  if (e.target.value == "") {
    idState = false;
  }
  signInBtnActivateHandler();
});

password.addEventListener("keyup", (e) => {
  if (e.target.value != "") {
    pwdState = true;
  }
  if (e.target.value == "") {
    pwdState = false;
  }
  signInBtnActivateHandler();
});
