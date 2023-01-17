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
let obj: any = { x: 0 };
//any를 사용하면 사용자가 TS보다 상황을 더 잘 이해하고 있다고 가정
obj.foo();
obj();
obj.bar = 100;
obj = "hello";
const n: number = obj;


// 변수에 대한 타입 표기 -> 선택사항!
// TS의 경우, 변수의 타입은 해당 변수의 초깃값의 타입을 바탕으로 추론
let myName: string = "Alice"; // 타입 표기는 항상 타입의 대상 뒤쪽에 위치


// 함수
// 매개변수 타입 표기
function greet(name: string) {
    console.log("Hello, " + name.toUpperCase() + "!!");
}
//greet(42);

// 반환 타입 표기 
// 반환 타입은 매개변수 목록 뒤에 표기
// TS가 해당 함수에 들어있는 retuen문을 바탕으로 반환 타입을 추론
function getFavoriteNumber(): number {
    return 26;
}

// 익명 함수
const names = ["Alice", "Bob", "Eve"];
// 함수에 대한 문맥적 타입 부여 -> 함수가 실행되는 문맥을 통하여 해당 함수가 가져야 하는 타입을 알 수 있기 때문에
names.forEach(function (s) {
    console.log(s.toUpperCase());
});
names.forEach((s) => {
    console.log(s.toUpperCase());
})


// 객체 타입
function printCoord(pt: { x: number; y: number }) { // 매개변수의 타입은 객체로 표기되고 있다.
    console.log("The coordinate's x value is " + pt.x);
    console.log("The coordinate's y value is " + pt.y);
}
printCoord({ x: 3, y: 7 });

// 옵셔널 프로퍼티
//객체 타입은 일부 또는 모든 프로퍼티의 타입을 선택적인 타입, 즉 옵셔널로 지정할 수 있다.
function printName(obj: { first: string; last?: string }) {
    console.log(obj.last?.toUpperCase()); // obj.last 값이 제공되지 않는다면 프로그램이 멈춤

    if (obj.last !== undefined) {
        // OK
        console.log(obj.last.toUpperCase());
    }
}
// 둘 다 ok
printName({ first: "Bob" });
printName({ first: "Alice", last: "Alisson" });


// 유니언 타입 [합집합]
// TS에서는 기존의 타입을 기반으로 다양한 연산자를 사용하여 새로운 타입을 만들 수 있다.

// 유니언 타입 정의하기
// 서로 다른 두개 이상의 타입들을 사용하여 만드는 것
// 유니언 타입의 값은 타입 조합에 사용된 타입 중 무엇이든 하나를 타입으로 가질 수 있다.
// 조합에 사용된 각 타입을 유니언 타입의 '멤버'라고 한다.
function printId(id: number | string) {
    console.log("Your ID is: " + id);

    // string | number라는 유니언 타입의 경우, string 타입에만 유효한 메서드는 사용할 수 없다.
    console.log(id.toUpperCase());
    
    // 따라서 이를 해결하려면 코드상에서 유니언을 좁혀야한다!
    if (typeof id === "string") {
        // 이 분기에서 id는 'string' 타입을 가짐
        console.log(id.toUpperCase());
    } else {
        // 여기에서 id는 'number' 타입을 가짐
        console.log(id);
    }
}
// OK
printId(101);
// OK
printId("202");
// 오류
printId({ myID: 22342 });


function welcomePeople(x: string[] | string) {
    if (Array.isArray(x)) {
        // 여기에서 'x'는 'string[]' 타입이다.
        console.log("Hello, " + x.join(" and "));
    } else {
        //여기에서 'x'는 'string' 타입이다.
        console.log("Welcome lone traveler " + x);
    }
}


// 타입 별칭 -> 타입을 위한 이름을 제공
type Point = {
    x: number;
    y: number;
};

function printCoord1(pt: Point) {
    console.log("The coordinate's x value is " + pt.x);
    console.log("The coordinate's y value is " + pt.y);
}
printCoord1({ x: 100, y: 100 });


// 인터페이스 -> 인터페이스 선언은 객체 타입을 만드는 또 다른 방법
interface PointInterface {
    x: number;
    y: number;
}

function printCoord2(pt: PointInterface) {
    console.log("The coordinate's x value is " + pt.x);
    console.log("The coordinate's y value is " + pt.y);
}
printCoord2({ x: 100, y: 100 });

// 타입 별칭과 인터페이스의 차이점
// 타입은 새 프로퍼티를 추가하도록 개방될 수 없다. 인터페이스의 경우 항상 확장될 수 있다.
/* 
    인터페이스 확장 
*/
interface Animal {
    name: string
}
interface Bear extends Animal {
    honey: boolean
}

const bear = getBear()
bear.name
bear.honey

/*
    교집합을 통하여 타입 확장하기
*/
type Aniamal = {
    name: string
}
type Rabbit = Animal & {
    carrot: Boolean
}

const rabbit = getRabbit();
rabbit.name;
rabbit.carrot;
// result : 잘 모르겠다면 우선 interface를 사용하고 이후 문제가 발생하였을 때 type을 사용하기 바랍니다.

