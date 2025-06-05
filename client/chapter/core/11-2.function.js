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


// 함수 선언문 vs. 함수 (표현)식


// 즉시 실행 함수 (표현)식
// Immediately Invoked Function Expression
let IIFE;