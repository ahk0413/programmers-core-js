
document.querySelector(".todo").addEventListener("submit", (e) => {
  e.preventDefault();
});

class Todo {
// 생성자
  constructor({ input, button, renderPlace }) {
    this.input = document.querySelector(input);
    this.button = document.querySelector(button);
    this.renderPlace = document.querySelector(renderPlace);

    this.attachEvent();
  }

// input value 가져오기
  getTodoValue() {
    return this.input.value;
  }

// 아이템 html 받아오기
  getItemText(value){
    return `<li>${value}</li>`
  }

// todo li 설정
  setTodoValue() {
    let value = this.getTodoValue();
    if (value.trim() !== "") {
      this.renderPlace.insertAdjacentHTML("beforeend", `${this.getItemText(value)}`);
      this.input.value = "";
    }
  }

// 이벤트 부여
  attachEvent() {
    this.button.addEventListener("click", this.setTodoValue.bind(this));
  }
}
