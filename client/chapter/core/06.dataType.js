let empty = null;
console.log(typeof empty);


// 2. 값이 할당되지 않은 상태
let undef;

console.log(typeof undef);

// 3. 따옴표를 사용해 묶은 텍스트(큰", 작은', 역`)
const double = 'tiger'; // string literal
const single = 'hello';
const backtick = `hello ${double / 10} 선범이야`;

console.log(backtick);

console.clear();

const str = new String('hello'); // 문자 생성자 함수 (string constructor function)

// console.log( single );
// console.log( str );

// 4. 정수, 부동 소수점 숫자(길이 제약)

const integer = 150; // number literal
const floatingPointNumber = 1.23;

// console.log( typeof integer );

const num = new Number(20.23); // number constructor function

console.log(num);

// 5. 길이에 제약이 없는 정수(예: 암호 관련 작업에서 사용)

const bigInt = 123n;

console.log(typeof bigInt);

const b = BigInt(3);
console.log(b);

// 6. 참(true, yes) 또는 거짓(false, no)

const isActive = false;
// const hasActive = false;

// console.log(typeof isActive);

const bool = new Boolean(false);

console.log(bool);

// 7. 데이터 컬렉션(collection) 또는 복잡한 엔티티(entity)

const _obj = {};

// console.log(typeof obj);

const newObj = new Object({});

console.log(newObj);

// 8. 고유한 식별자(unique identifier)

const uuid1 = Symbol('uuid');
const uuid2 = Symbol('uuid');

console.log(uuid1 === uuid2);

/* typeof 연산자의 2가지 사용법 ---------------------------------------------- */

@@ -25,15 +82,74 @@ console.log(typeof empty);

// 언어 상, 오류

// Object

console.clear();

// 일반 함수 -> this : 나를 호출한 대상

// 화살표 함수 (arrow function) : this를 바인딩하지 않습니다. (상위 컨텍스트에서 this를 찾습니다.)

console.log(this); // undefined

/* 
1: normal function method
2: arrow function method -> 객체의 메서드로 잘 사용되지 않나요? 네. 
3: concise method
*/

const obj = {
  name: 'tiger',
  age: 30,
  sayHi: function () {
    console.log(this);
  },
  sayHi2: () => {
    console.log(this);
  },
  sayHi3() {
    console.log(this);
  },
};






// Object




console.log(obj);

// Array

const arr = ['a', 100, { name: 'tiger' }, ['a', 'b'], true, () => {}];

// const _arr = new Array([]);

// console.log( arr );

// function

// this
function a() {
  return 'a함수가 실행됐습니다.';
}

// console.log( a() );

function 붕어빵틀(재료) {
  return `따끈하고 맛있는 ${재료} 맛 붕어빵입니다.`;
}

const 팥붕 = 붕어빵틀('팥');
const 슈붕 = 붕어빵틀('슈크림');
const 피붕 = 붕어빵틀('피자');
const 와붕 = 붕어빵틀('와사비');

const f = new Function();

// console.log( f );

// this