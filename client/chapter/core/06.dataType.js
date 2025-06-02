/* ------------------------ */
/* Data Types               */
/* ------------------------ */

/* ECMAScript의 8가지 데이터 타입 -------------------------------------------- */

// 1. 존재하지 않는(nothing) 값 / 비어있는(empty) 값 / 알 수 없는(unknown) 값
let empty = null;
console.log(typeof empty);
// 2. 값이 할당되지 않은 상태
let a = NaN;
console.log(typeof a);
// 3. 따옴표를 사용해 묶은 텍스트(큰", 작은', 역`)
const double = "tiger";
const single = 'hello';
const backtick = `hello ${double/10} 선범이야`;

console.log(backtick);
console.clear()

const str = new String('hello'); // 문자 생성자 함수 (string constructor function)

// console.log(single);
// console.log(str);


// 4. 정수, 부동 소수점 숫자(길이 제약)
const integer = 150;
const floatingPointNumber = 1.23;

// console.log(typeof integer);

const num = new Number(20); // number constructor function

console.log(num);

// 5. 길이에 제약이 없는 정수(예: 암호 관련 작업에서 사용)
let num02 = 10n;
console.log(typeof num02);

// 6. 참(true, yes) 또는 거짓(false, no)

const bool = new Boolean(false);

console.log( bool );

// 7. 데이터 컬렉션(collection) 또는 복잡한 엔티티(entity)


// console.log(obj);


// 8. 고유한 식별자(unique identifier)
const uuid1 = Symbol('uuid');
const uuid2 = Symbol('uuid');

console.log(uuid1, uuid2);
/* typeof 연산자의 2가지 사용법 ---------------------------------------------- */

// 1) 연산자 typeof
typeof x
// 2) 함수 typeof()
typeof(x)
// 언어 상, 오류
typeof null



// Object
console.clear();

// Array

// function

// this

//화살표 함수(arrow function) : this를 바인딩하지 않습니다. (상위 컨텍스트에서 this를 찾습니다.)

const obj =  {
  name: 'tiger',
  age: 30,
  sayHi: function(){
    console.log(this);
  },
  sayHi2:() => {
    console.log(this);
  },
  sayHi3:() => {
    console.log(this);
  }
}
