

import {diceAnimation, getNode, attr, insertLast} from './lib/index.js'

const buttons = document.querySelectorAll('.buttonGroup button');

const [rollingButton, recordButton, resetButton] = document.querySelectorAll('.buttonGroup button');

const recordListWrapper = getNode('.recordListWrapper');

const cube = getNode('#cube');
// setInterval(diceAnimation, 1000);

/* 
  1. 주사위 굴리기 버튼을 선택 
  2. 클릭 이벤트 바인딩

  3. setInterval diceAnimation
*/

/* 
  1. 주사위 눈 가져오기
    - cube의 dice 속성 값
  2. 태그 만들고 
  3. 태그 렌더링하기
*/
let count = 0;
let total = 0;

function createItem(value){
  const template = `
    <tr>
      <td>${++count}</td>
      <td>${value}</td>
      <td>${total += value}</td>
    </tr>
  `;

  return template;
}

function renderRecordTime(){
  
  const diceNumber = +attr('#cube','dice');
  
  
  insertLast('tbody', createItem(diceNumber));
}

const handleRollingDice = (() => {
  let isClicked = false;
  let id;

  return () => {
    if(!isClicked) {
      id = setInterval(diceAnimation, 100);
      recordButton.disabled = true;
      resetButton.disabled = true;
    } else {
      clearInterval(id);
      recordButton.disabled = false;
      resetButton.disabled = false;

    }
  
    isClicked = !isClicked;
  };
})()

function handleRecord(){
  recordListWrapper.hidden = false;
  renderRecordTime();
}

function handleReset(){
  recordListWrapper.hidden = true;
}

rollingButton.addEventListener('click',handleRollingDice);
recordButton.addEventListener('click',handleRecord);
resetButton.addEventListener('click',handleReset);