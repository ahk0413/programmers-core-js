/* ---------------- */
/* Condition        */
/* ---------------- */

  // let result = prompt("자바스크립트의 공식 이름은 무엇일까요",'');

  // if (result === 'ECMAScript') {
  //   alert('정답입니다.');

  // } else {
  //   alert('틀렸습니다.');
  // }

// 그 영화 봤니?
//     ↓
// Yes | No
//     | 영화 볼거니?
//           ↓
//       Yes | No


/* let didWatchMovie = confirm('너 진격의 거인 영화 봤어?');

if(didWatchMovie) {
  console.log('그 영화 재밌더라');
} else {
  let goingToWatchMovie = confirm('그 영화보러갈래?');

  if(goingToWatchMovie){
    //보러갈래
    let withWho = prompt('누구랑 볼거니??');
    if(withWho == '너') {
      console.log('그래 좋아 같이 보자');
    } else if(withWho == '가족') {
      console.log('재밌게봐!');
    } else {
      console.log('나말고 누구야?');
    }
  }else {
    //나도 사실 별로야
    console.log('나도 사실 별로야');
  }
} */

// if 문(statement)

// else 절(clause)

// else if 복수 조건 처리

// 조건부 연산자
let didWatchMovie = 'no';
let goingToWatchMovie = 'yes';

// 멀티 조건부 연산자 식

const message = didWatchMovie === 'yes' ? '영화 재밌더라 한번 봐봐' : goingToWatchMovie === 'yes' ? '언제 볼까? 재밌겠다!!' : '그래...'

//조건부 렌더링
// function render(node, isActive) {
//   const template = `
//   <div>${}</div>`

// }