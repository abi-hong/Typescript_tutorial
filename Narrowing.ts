/*
    Narrowing
    -> the process of refining types to more specific types than
    declared
*/
function padLeft(padding: number | string, input: string) {
    if (typeof padding === "number") {
        return " ".repeat(padding) + input;
    }
    return padding + input;
}


// typeof
// -> 'string', 'number', 'bigint', 'boolean', 'symbol', 'undefined', 'object', 'function'
// typeof는 null을 return하지 않는다
/*
function printAll(strs: string | string[] | null) {
    if (typeof strs === "object") {
        for (const s of strs) {
            console.log(s);
        }
    } else if (typeof strs === "string") {
        console.log(strs);
    } else {
        // do nothing
    }
}
*/


//Truthiness narrowing
function getUsersOnlineMessage(numUsersOnline: number) {
    if (numUsersOnline) {
        return `There are ${numUsersOnline} online now!`;
    }
    return "Nobody's here. :(";
}
// both of these result in 'true'
Boolean("hello"); // type: boolean, value: true
!!"world"; //type: true, value: true

function printAll(strs: string | string[] | null) {
    if (strs && typeof strs === "object") {
        for (const s of strs) {
            console.log(s);
        }
    } else if (typeof strs === "string") {
        console.log(strs);
    } else {
        // do nothing
    }
}
/*
function printAll(strs: string | string[] | null) {
    // !!!!!!!!!!!!!!!!
    //  DON'T DO THIS!
    //   KEEP READING
    // !!!!!!!!!!!!!!!!
    if (strs) {
      if (typeof strs === "object") {
        for (const s of strs) {
          console.log(s);
        }
      } else if (typeof strs === "string") {
        console.log(strs);
      }
    }
  }
*/
/*
  function printAll(strs: string | string[] | null) {
    if (strs !== null) {
        if (typeof strs === "object") {
            for (const s of strs) {
                console.log(s);
            }
        } else if (typeof strs === "string") {
            console.log(strs);
        }
    }
  }
*/

  function multiplyAll(
    values: number[] | undefined,
    factor: number
  ): number[] | undefined {
    if (!values) {
        return values;
    } else {
        return values.map((x) => x * factor);
    }
  }


// Equality narrowing
function example(x: string | number, y: string | boolean) {
    // === : 값과 타입이 같아야 한다.
    if (x === y) {
        // We can now call any 'string' method on 'x' or 'y'
        x.toUpperCase();
        y.toLowerCase();
    } else {
        console.log(x);
        console.log(y);
    }
}

// null == undefined
interface Container {
    value: number | null | undefined;
}

function multiplyValue(container: Container, factor: number) {
    // Remove both 'null' and 'undefined' from the type.
    if (container.value != null) {
        console.log(container.value);

        // Now we can safely multiply 'container.value'.
        container.value *= factor;
    }
}


// The in operator narrowing
// -> in이란 객체에 이 속성이 존재하는지를 나타냄
type Fish = { swim: () => void };
type Bird = { fly: () => void };
type Human = { swim?: () => void; fly?: () => void };

function move(animal: Fish | Bird) {
    if ("cook" in animal) {
        return animal.swim();
    }
    return animal.fly();
}


// Control flow analysis
function exampleAnalysis() {
    let x: string | number | boolean;

    x = Math.random() < 0.5;
    console.log(x);

    if (Math.random() < 0.5) {
        x = "hello";
        console.log(x);
    } else {
        x = 100;
        console.log(x);
    }
    return x;
}

// Using type predicates
// -> parameteraName(value) is Type
function isFish(pet: Fish | Bird): pet is Fish {
    return (pet as Fish).swim !== undefined;
}

declare function getSmallPet(): Fish | Bird;
let pet = getSmallPet();
if (isFish(pet)) {
    pet.swim();
} else {
    pet.fly();
}


// Discriminated unions
interface Shape {
    kind: "circle" | "square";
    radius?: number;
    sideLength?: number;
}

function getArea(shape: Shape) {
    if (shape.kind === "circle") {
        return Math.PI * shape.radius! ** 2;
    }   
}

// do better
interface Circle {
    kind: "circle";
    radius: number;
}
interface Square {
    kind: "square";
    sideLength: number;
}
type ShapeBetter = Circle | Square;

function getAreaBetter(shape: ShapeBetter) {
    // that narrowed shape down to the type Circle !!
    if (shape.kind === "circle") {
        return Math.PI * shape.radius ** 2;
    }
}

// or
/*
function getAreaBetter(shape: ShapeBetter) {
    switch (shape.kind) {
        case "circle":
            return Math.PI * shape.radius ** 2;
        case "square":
            return shape.sideLength ** 2;
    }
}
*/


/*
    The never type
    -> to represent a state which shouldn't exist
*/
//Exhaustiveness checking 
// -> you can use narrowing and rely on 'never' turning up to do exhaustive checking in a switch statement
/*
function getAreaBetter(shape: ShapeBetter) {
    switch (shape.kind) {
        case "circle":
            return Math.PI * shape.radius ** 2;
        case "square":
            return shape.sideLength ** 2;
        default:
            const _exhaustiveCheck: never = shape;
            return _exhaustiveCheck;
    }
}
*/