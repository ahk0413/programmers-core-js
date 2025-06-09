/* ----------------------- */
/* Functions → Expression  */
/* ----------------------- */


function calcTotal(moneyA, moneyB, moneyC, moneyD) {
  return moneyA + moneyB + moneyC + moneyD;
}

const resultX = calcTotal(10000, 8900, 1360, 2100);
const resultY = calcTotal(21500, 3200, 9800, 4700);
const resultZ = calcTotal(9000, -2500, 5000, 11900);

// console.log(resultX);
// console.log(resultY);
// console.log(resultZ);


// 함수 선언 → 일반 함수 (표현)식
let calculateTotal = function (){
  
  // 집합 데이터
  // 함수 안에서만 접근 가능한 인수들의 집합 객체 : arguments 

  let total = 0;

  // for문 total 내보내기 
  // for(let i = 0; i < arguments.length; i++){
  //   total = total + arguments[i];
  // }

  // for..of
  // for(const value of arguments) total += value;
  // return total;

  // 배열의 메서드 
  // forEach, reduce, map, filter ...

  // const arr = Array.prototype.slice.call(arguments); // array instance method
  // const arr = Array.from(arguments);  // array static method
  const arr = [...arguments]; // spread syntax

  // function a(value,index){
  //   total += value;    
  // }
  // arr.forEach(,)

  // arr.forEach(function(value){
  //   total += value;
  // })
  
  // return total

  console.log( arr );
  
  // return arr.reduce(function(acc,current,index){
  //    return acc + current
  // },0)




  // arguments => 유사배열 => forEach 빌려쓰기 .call 
  
  // first: 빌리는 대상
  // second : 인수
  // Array.prototype.forEach.call(arguments,function(value){
  //   total += value;
  // })
  

  // return total

  // 바꿔치기
  arguments.__proto__ = Array.prototype

  console.log(arguments);

};

const result = calculateTotal(1000,3000,5000,2300,5000,2300,3000,1000);

console.log( result );


console.clear();

  // forEach : 값을 반환하지 x 
  // reduce  : 새로운 값을 반환 (any)
  // map     : 새로운 배열을 반환


const friends = ['이승은','이소민','황유정','문태민'];

const newFriends = friends.map(function(name, index){
  return `<li data-order="${index}">이름 : [FE]${name}</li>`
})


console.log( newFriends );

document.body.insertAdjacentHTML('beforeend',newFriends.join(''))














// 익명(이름이 없는) 함수 (표현)식
let anonymousFunctionExpression;


// 유명(이름을 가진) 함수 (표현)식
let namedFunctionExpression;


// 콜백 함수 (표현)식
let callbackFunctionExpression;

let cb = 
function(condition, success, fail){
  
  if(condition) success()
  else fail()
};

cb(
  true,
  function(){console.log('성공입니다.')},
  function(){console.log('실패입니다.')}
)

console.clear();

function movePage(url,success,fail){
  // if(url.includes('https')){
    
  // }
}

movePage(
  'https://www.naver.com',
  function(){
    console.log('3초 뒤 해당 사이트로 이동합니다.');
  },
  function(){
    console.log('잘못된 url 정보를 입력하셨습니다.');
  }
)

function getGeolocation(success){
  let data;

  navigator.geolocation.getCurrentPosition(function(so){

    const data = so.coords.latitude;

    success(data); // arguments
  })
}

// promise

// getGeolocation(function(value){
//   console.log(value);
// })


// 함수 선언문 vs. 함수 (표현)식


// 즉시 실행 함수 (표현)식
// Immediately Invoked Function Expression
let IIFE;

// encapsulation(캡슐화)
const MASTER = (function(){

  var uuid = 'zxasnzxj!@#asBd_12387zj$$!ak'

  return {
    getKey(){
      return uuid
    },
    setKey(value){
      uuid = value;
    }
  }
})

console.log(MASTER);

console.clear();

/* 다음 함수를 작성해봅시다. */

// rem()

function rem(pxValue, base = 16) {

  if(!pxValue) {
    throw new Error('rem 함수의 첫 번째 인수는 필수 입력 값 입니다.')
  }

  if(typeof base === 'string'){
    throw new TypeError('rem 함수의 두 번째 인수는 숫자 타입 이어야 합니다.')
  }

  if (typeof pxValue === 'string') {
    pxValue = parseInt(pxValue);
  }

  return pxValue / base + 'rem';
}

console.assert(rem(20) === '1.25rem');
console.assert(rem('25px') === '1.5625rem');
console.assert(rem('30px', 10) === '3rem');


// 1. 함수의 이름
// 2. 함수의 실행부 작성
// 3. 매개변수 확인
// 4. return value
// 5. validation
// 6. Test Driven Development(TDD)

// setter function
function setCss(node, prop, val){
  if(typeof node === 'string') node = document.querySelector(node);

  if(!(prop in document.body.style)) throw new ReferenceError('setCss 함수의 두 번째 인수는 유효한 css 속성 이어야 합니다.')
  
  if(!val) throw new Error('setCss 함수의 세 번째 인수는 필수 입력 값 입니다.')

  node.style[prop] = val;
}

// setCss(first,'color','orange');

// getter function
function getCss(node, prop){

  if(typeof node === 'string') node = document.querySelector(node);



  if(!(prop in document.body.style)) throw new ReferenceError('setCss 함수의 두 번째 인수는 유효한 css 속성 이어야 합니다.')

  return getComputedStyle(node)[prop];
}

const fontSize = getCss('.first','font-size')

// console.log(fontSize);


function css(node,prop,value){
  /* if(!value){
    getCss(node, prop)
  }else {
    setCss(node,prop,value)
  } */

  !value ? getCss(node,prop) : setCss(node,prop,value);
}
css('.first','color') // get
css('.first','color','blue')  // set

// 화살표 함수
const _css = (node,prop,value) => !value ? getCss(node.prop) : setCss(node,prop,value);

// 캡슐화 => 오늘날엔 많이 안씀.
(function(){
    function setCss(node, prop, val){
      if(typeof node === 'string') node = document.querySelector(node);

      if(!(prop in document.body.style)) throw new ReferenceError('setCss 함수의 두 번째 인수는 유효한 css 속성 이어야 합니다.')
      
      if(!val) throw new Error('setCss 함수의 세 번째 인수는 필수 입력 값 입니다.')

      node.style[prop] = val;
    }

    setCss('.first','color','orange');

    // getter function
    function getCss(node, prop){

      if(typeof node === 'string') node = document.querySelector(node);



      if(!(prop in document.body.style)) throw new ReferenceError('setCss 함수의 두 번째 인수는 유효한 css 속성 이어야 합니다.')

      return getComputedStyle(node)[prop];
    }

    const fontSize = getCss('.first','font-size')

    // console.log(fontSize);


    function css(node,prop,value){
      /* if(!value){
        getCss(node, prop)
      }else {
        setCss(node,prop,value)
      } */

      !value ? getCss(node,prop) : setCss(node,prop,value);
    }

    return css
})()