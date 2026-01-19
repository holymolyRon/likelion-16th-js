// ------------------------------------------------
// v1. 최대한 간단하게 코드 작성
// ------------------------------------------------
// document.querySelector(".modal-open-button").addEventListener("click", () => {
//   document.body.classList.add("modal-dialog-is-open");
// });

// document.querySelector(".modal-close-button").addEventListener("click", () => {
//   document.body.classList.remove("modal-dialog-is-open");
// });

// ------------------------------------------------
// v2. 변수를 사용 (문서 객체 기억)
// ------------------------------------------------
// const body = document.body;
// const openButton = body.querySelector(".modal-open-button");
// const closeButton = body.querySelector(".modal-close-button");

// openButton.addEventListener("click", () => {
//   document.body.classList.add("modal-dialog-is-open");
// });

// closeButton.addEventListener("click", () => {
//   document.body.classList.remove("modal-dialog-is-open");
// });

// ------------------------------------------------
// v3. 함수 선언 또는 화살표 함수 표현식 사용 (기능 재사용)
// ------------------------------------------------
const body = document.body;
const openButton = body.querySelector(".modal-open-button");
const closeButton = body.querySelector(".modal-close-button");

const openModal = () => body.classList.add("modal-dialog-is-open");
const closeModal = () => body.classList.remove("modal-dialog-is-open");

openButton.addEventListener("click", openModal);
closeButton.addEventListener("click", closeModal);
