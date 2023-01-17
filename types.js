// Everyday Types
/*
    primitives : string,n number, boolean
 */
/*
    array
    숫자 배열 -> Array<number>
    문자열 배열 -> Array<string>
    generics -> T<U>
*/
/*
    any : 특정 값으로 인하여 타입 검사 오류가 발생하는 것을 원하지 않을 때
*/
var obj = { x: 0 };
//any를 사용하면 사용자가 TS보다 상황을 더 잘 이해하고 있다고 가정
obj.foo();
obj();
obj.bar = 100;
obj = "hello";
var n = obj;
// 변수에 대한 타입 표기 -> 선택사항!
// TS의 경우, 변수의 타입은 해당 변수의 초깃값의 타입을 바탕으로 추론
var myName = "Alice"; // 타입 표기는 항상 타입의 대상 뒤쪽에 위치
// 함수
// 매개변수 타입 표기
function greet(name) {
    console.log("Hello, " + name.toUpperCase() + "!!");
}
//greet(42);
// 반환 타입 표기 
// 반환 타입은 매개변수 목록 뒤에 표기
// TS가 해당 함수에 들어있는 retuen문을 바탕으로 반환 타입을 추론
function getFavoriteNumber() {
    return 26;
}
// 익명 함수
var names = ["Alice", "Bob", "Eve"];
// 함수에 대한 문맥적 타입 부여
names.forEach(function (s) {
    console.log(s.toUpperCase());
});
names.forEach(function (s) {
    console.log(s.toUpperCase());
});
