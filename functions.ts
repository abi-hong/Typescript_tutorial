// 함수 타입 표현식
function greeter(fn: (a: string) => void) {
    fn("Hello, World");
}
/*
    (a: string) => void
    문자열 타입 a를 하나의 매개변수로 가지고 반환값이 없는 함수
*/

function printToConsole(s: string) {
    console.log(s);
}

greeter(printToConsole);


/*
    호출 시그니처(:)
*/
// -> 호출 가능하면서 프로퍼티를 가진 무언가를 설명하려고 하면, 객체 타입에 호출 시그니처를 사용하여 표현가능
type DescribableFunction = {
    description: string;

    // 함수를 나타냄
    // 이 문법은 함수 타입 표현식과 다르다. 매개변수 타입과 반환값의 타입 사이에 =>가 아닌 :를 사용해야 한다.
    (someArg: number): boolean;
};

function doSomething(fn: DescribableFunction) {
    console.log(fn.description + " returned " + fn(6));
}


/*
    구성 시그니처
    -> 생성자
*/
type SomeConstructor = {
    new (s: string): SomeObject;
};

function fnConstruct(ctor: SomeConstructor) {
    return new ctor("hello");
}


/*
    제너릭 함수
    -> 제너릭은 여러 타입에 대해 동작하는 요소를 정의하되, 해당 요소를 사용할 때가 되어야 알 수 있는 타입 정보를 정의에 사용하는 것
*/
function firstElement(arr: any[]) {
    return arr[0];
}

// TS에서 제네릭 문법이 두 값 사이의 상관관계를 표현하기 위해서 사용됨
// -> 함수 시그니처에 타입 매개변수를 선언함으로서 그런 표현을 할 수 있다.
// -> 부등호 기호 안에 정의도니 타입 변수의 실제 타입은 실제 값이 넘어오는 시점에 결정된다.
function firstElementG<Type>(arr: Type[]): Type | undefined  {
    return arr[0];
}
// 타입 매개변수 'Type'을 이 함수에 선언하고, 필요한 두곳에 사용함으로서 
// 함수의 입력값과 출력값 사이에 연결고리를 만들었다. -> 함수를 호출할 때, 더 명확한 타입을 얻을 수 있다.

// s는 "string" 타입
const s = firstElementG(["a", "b", "c"]);
// n은 "number" 타입
const n = firstElementG([1, 2, 3]);
// u는 "undefined" 타입
const u = firstElementG([]);


function map<Input, Output>(arr: Input[], func: (arg: Input) => Output): Output[] {
    return arr.map(func);
}
const parsed = map(["1", "2", "3"], (n) => parseInt(n));
// -> 이 예제에서 TS는 Input 타입과 Output 타입을 함수 표현식의 반환 값을 통해서 추론할 수 있다.


/*
    타입 제한 조건
    -> 이 조건을 사용하여 타입 매개변수가 받아들일 수 있는 타입들을 제한할 수 있다.
*/
function longest<Type extends { length: number }>(a: Type, b: Type) {
    if (a.length >= b.length) {
        return a;
    } else {
        return b;
    }
}
// 위 longest 함수의 경우, Type을 { length: number }로 제한했기 때문에, 
// a와 b 매개변수에 대해서 .length 프로퍼티에 접근할 수 있다.

const longArray = longest([1, 2], [1, 2, 3]);
const longString = longest("alice", "bob");
const notOk = longest(10, 100); // number 타입이 .length 프로퍼티를 가지고 있지 않아 호출이 거부됨



