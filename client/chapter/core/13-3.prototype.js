
/* 
1.constructor 작성하기
2.click 이벤트 연결하기
3.input값 가져오기(getter) / 설정하기(setter)

*/



class Todo{

  input = null;
  button = null;
  renderPlace = null;

  constructor({input, button, renderPlace}){
    this.input = document.querySelector(input);
    this.button = document.querySelector(button);
    this.renderPlace = document.querySelector(renderPlace);

    this.todoListArray = [];
    this.attachEvent();
  }

  get currentInputValue(){
    return this.input.value;
  }

  set currentInputTodoData(value){
    this.input.value = value;
  }

  createTag(){
    return `<li>${this.currentInputTodoData}</li>`
  }

  #render(){
    this.renderPlace.insertAdjacentHTML('beforeend',this.createTag());
    this.currentInputTodoData = ''
  }

  handleClick(){
    console.log(this.createTab());
    this.#render();
  }

  attachEvent(){
    this.button.addEventListener('click', (e) => {
      e.preventDefault();
      this.handleClick()
    })
  }
}

const todo = new Todo({
  input: '.todoInput',
  button: '.todoButton',
  renderPlace: '.todoList'
});