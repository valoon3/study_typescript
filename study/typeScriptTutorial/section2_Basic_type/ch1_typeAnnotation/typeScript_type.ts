// :type 예약어는 모든 유형을 허락한다.
// let name: string = 'John';
let age: number = 25;
let active: boolean = true;

let names: string[] = ['John', 'Jane', 'Peter', 'David', 'Mary'];

let person: {
    name: string;
    age: number
};

person = {
    name: 'John',
    age: 25
}; // valid

let greeting : (name: string) => string;

greeting = function (name: string) {
    return `Hi ${name}`;
};

console.log(greeting('asdf'));