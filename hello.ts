// Greeting World
console.log("Hello world!");

function greet(person: string, date: Date) {
    console.log(`Hello ${person}, today is ${date.toDateString()}!`);
}
greet("Maddison", new Date());

// 타입 시스템이 알아서 올바른 타입을 어떻게든 잘 알아낼 수 있다면 타입 표기를 적지 않는 것이 좋다.
let msg = "hello there!";

// TS Strictness
// TS에는 켜고 끌 수 있는 타입 검사 엄격도 플래그가 몇 가지 존재
// noImplicitAny : 이 플래그를 활성화하면 타입이 any로 암묵적으로 추론되는 변수에 대하여 오류를 발생시킨다.
// strictNullChecks : null과 undefined를 보다 명시적으로 처리
