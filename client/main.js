import { getNode, getStorage, setStorage, deleteStorage } from './lib/index.js';

function debounce(f, limit = 1000) {
  let timeout;

  return function (e) {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      f.call(this,e)
    }, limit);
  };
}



const textField = getNode('#textField');
const clearButton = getNode('button[data-name="clear"]');

function handleText(){
  const value = this.value;
  console.log(value);

  setStorage('text',value)
};

function init(){
  getStorage('text')
  .then((res)=>{
    textField.value = res;
  })
}

textField.addEventListener('input',debounce(handleText,300));
window.addEventListener('DOMContentLoaded',init);