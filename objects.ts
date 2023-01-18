/*
    Object Types
*/
function greet(person: { name: string; age: number }) {
    return "Hello " + person.name;
}

// or

interface Person {
    name: string;
    age: number;
}
/*
type Person = {
    name: string;
    age: number;
};
*/
function greetA(person: Person) {
    return "Hello " + person.name;
}


/*
    readonly 속성
    -> 
*/
interface SomeType {
    readonly prop: string;
}
function doSomething(obj: SomeType) {
    // We can read from 'obj.prop'
    console.log(`prop has the value '${obj.prop}'.`);

    // But we can't re-assign it.
    obj.prop = "hello";
}


interface Home {
    readonly resident: { name: string; age: number };
}
function visitForBirthday(home: Home) {
    // We can read and update properties from 'home.resident'.
    console.log(`Happy birthday ${home.resident.name}!`);
    home.resident.age++;
}
function evict(home: Home) {
    // But we can't write to the 'resident' property itself on a 'Home'.
    home.resident = {
        name: "Victor the Evictor",
        age: 42,
    };
}

// works like that
interface Person {
    name: string;
    age: number;
}

interface ReadOnlyPerson {
    readonly name: string;
    readonly age: number;
}

let writablePerson: Person = {
    name: "Person McPersonface",
    age: 42,
};

let readOnlyPerson: ReadOnlyPerson = writablePerson;

console.log(readOnlyPerson.age); // 42
writablePerson.age++;
console.log(readOnlyPerson.age) //43

