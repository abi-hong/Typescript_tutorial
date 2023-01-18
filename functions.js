// 함수 타입 표현식
function greeter(fn) {
    fn("Hello, World");
}
/*
    (a: string) => void
    문자열 타입 a를 하나의 매개변수로 가지고 반환값이 없는 함수
*/
function printToConsole(s) {
    console.log(s);
}
greeter(printToConsole);
function doSomething(fn) {
    console.log(fn.description + " returned " + fn(6));
}
