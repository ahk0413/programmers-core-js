/* ---------------------- */
/* Functions → Arrow      */
/* ---------------------- */

const calculateTotal = function(moneyA, moneyB, moneyC, moneyD) {
  return moneyA + moneyB + moneyC + moneyD;
}

let resultX = calculateTotal(10000, 8900, 1360, 2100);
let resultY = calculateTotal(21500, 3200, 9800, 4700);
let resultZ = calculateTotal(9000, -2500, 5000, 11900);

// console.log(resultX);
// console.log(resultY);
// console.log(resultZ);


// 함수 선언 → 화살표 함수 (표현)식 :arguments 존재 x , 일반함수&함수선언식에서만 존재

/* rest parameter */
let calcAllMoney = (...args) => {

  let total = 0
  // // for ...of total 출력
  // for (const value of args) {
  //   total += value;
  // }
  // return total;

  // args.forEach((item,index) => {
  //   total += item;
  // });

  total = args.reduce((acc,cur)=>{
    return acc + cur
  },0)

  total = args.reduce((acc,cur)=>acc + cur,0)

  return total;

};


let _calcAllMoney = (...args) => {
  return args.reduce((acc,cur) => acc + cur ,0);
}



// console.log(calcAllMoney(1000,3000,5000,2500));


// 화살표 함수와 this

// 일반 함수는 나를 호출한 대상을 기준으로 this를 바인딩합니다.
function a(){
  console.log(this);
}

window.a();

const b = () => {
  console.log(this);
}

// b()

// 자바스크립트의 함수는 양면의 얼굴
// 1. 일반 함수 (normal function)
// 2. 생성자 함수 (constructor function)

function createUser(name,age){
  return {
    name:name,
    age:age
  }
}

console.log(createUser('tiger',30));

function Button(text = 'empty') {
  this.text = text;
}

const btn = new Button();

console.log(btn);

class Button_ {

}

const arrow = () => {

}

const _btn = new Button_();

console.log(_btn);

console.clear();

// this 찾기

// 일반 함수
// constructor 내장 (concise method 예외)
// this : 나를 호출한 대상 this
// 객체의 메서드로 많이 사용됨 => this를 찾기 위해

// 화살표 함수
// constructor 비내장 (성증 최적화) <- -> class
// this : 바인딩 하지 않음 => 상위 컨텍스트에서 찾음
// 메서드 안에서의 함수 => 내 상위 컨텍스트에서 this를 가져와야 해!

const user = {
  name: '박수진',
  total: 0,
  grades: [50,70,40],
  totalGrades(){

    // this.grades.forEach(g=>this.total +=g)

    /* this.grades.forEach(function(g){
      this.total += g;
    },this)
    console.log(this.total); */

    this.total = this.grades.reduce((acc,cur) => acc + cur,0)
  },
  
  sayHi(){

  }
}

/* 다음 함수를 작성해봅니다. -------------------------------------------------- */

// pow(numeric: number, powerCount: number): number;
let pow = (numeric, powerCount) => {
  
  let total = 1;
  for(let i = 0; i < powerCount; i++){
    total = total * numeric
  }
  return total;
};

// let _pow = (numeric, powerCount) => {
//   return Array(powerCount).fill(null).reduce((acc,cur)=>{
//     return acc * numeric
//   },1)
// }

let _pow = (numeric, powerCount) => Array(powerCount).fill(null).reduce((acc)=>acc * numeric,1)



// repeat(text: string, repeatCount: number): string;
let repeat = (text, repeatCount) => {
  let result = '';
  for (let i = 0; i < repeatCount; i++) {
    result += text;
  }
  return result;
};

let _repeat = (text, repeatCount) => {
  Array(repeatCount).fill(null).reduce(acc =>{
    acc + text
  },'')
}