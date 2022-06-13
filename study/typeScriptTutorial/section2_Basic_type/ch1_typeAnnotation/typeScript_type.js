// :type 예약어는 모든 유형을 허락한다.
// let name: string = 'John';
var age = 25;
var active = true;
var names = ['John', 'Jane', 'Peter', 'David', 'Mary'];
var person;
person = {
    name: 'John',
    age: 25
}; // valid
var greeting;
greeting = function (name) {
    return "Hi ".concat(name);
};
console.log(greeting('asdf'));
