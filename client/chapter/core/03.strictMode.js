/* ------------------- */
/* Strict Mode         */
/* ------------------- */


// 엄격 모드를 사용한 코드와 그렇지 않은 코드를 비교해봅니다.
'use strict';

//모던 자바스크립트 아닌 버전에서는 변수의 선언을 키워드 없이 작성할 수 있다.
// 이는 다양한 오류를 가져오므로 'use strict'를 활성화해 코딩하는게 좋다.

// #1
const jujeob = '심선범 넌 뭐랄까.. 마치 베를린 같아. 왜냐하면 치명적인 독일 수도.';
console.log(jujeob);

// #2
// 이렇게 선언가능하지만 복잡하기 때문에 모듈 선언함
let self = this;
if (self === window){
  self = undefined;
}
console.log(this); //undefined

// use strict 모드에서는 (모던 자바스크립트) this를 전역객체로 찾는게 불가능합니다.
// 모듈 프로그래밍, 클래스가 아닌 이상 이는 언어적 차원에서  window를 보여주는 형태이다.