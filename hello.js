// Greeting World
console.log("Hello world!");
function greet(person, date) {
    console.log("Hello ".concat(person, ", today is ").concat(date.toDateString(), "!"));
}
greet("Maddison", new Date());
// 타입 시스템이 알아서 올바른 타입을 어떻게든 잘 알아낼 수 있다면 타입 표기를 적지 않는 것이 좋다.
var msg = "hello there!";
