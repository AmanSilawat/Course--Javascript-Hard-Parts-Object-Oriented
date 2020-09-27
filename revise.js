// Object create method
// this method is create a new object and assign old object prototype in newly object.

// .
// .
// create new object without Objcet.create() method (both obj. are same reference)
var obj1 = { num: 'value' };
var obj2 = obj1;
obj2.num = 99;

obj1, obj2; // {num: 99} {num: 99}

// . ----------
// . --------------------
// . ------------------------------
// create new object with Objcet.create() method (both obj. are unique reference)
var objA = { prop1: 'value' };
var objB = Object.create(objA);
objB.prop1 = 'zz';

objA, objB; // {prop1: "value"} {prop1: "zz"}

// . ----------
// . --------------------
// . ------------------------------
// The old object data is inside the __proto__ of the newly created object
var objX = { prop1: 'value1' };
// var objY = Object.create(objX);
var objY = Object.create(objX, obj1.num);
objY.prop2 = 'value2';

objY.prop1; // value1
objY.prop2; // value2
objY; // {prop2: "value2"} -> inside of __proto__ -> prop1: "value1"

// . ----------
// . --------------------
// . ------------------------------
// without constructor function
function UserCreate01(fName, lName) {
    let newObj = Object.create(userObj);
    newObj.fName = fName;
    newObj.lName = lName;
    return newObj;
}

const userObj = {
    fullName() {
        return `${this.fName} ${this.lName}`;
    },
};

let getData01 = new UserCreate01('Aman', 'Silawat');
getData01.fullName(); // Aman silawat

// continue with paid user
function PaidUserCreate01(fName, lName, country) {
    let paidObj = UserCreate01(fName, lName);
    Object.setPrototypeOf(paidObj, paidUserObj01);
    paidObj.country = country;
    return paidObj;
}

let paidUserObj01 = {
    getFullDetails() {
        return `My name is ${this.fullName()} and i am living in ${
            this.country
        }.`;
    },
};
Object.setPrototypeOf(paidUserObj01, userObj);

let paidUser01 = new PaidUserCreate01('Aman', 'silawat', 'India');
paidUser01.getFullDetails(); // My name is Aman silawat and i am living in India.

// . ----------
// . --------------------
// . ------------------------------
// constructor function
function UserCreate(fName, lName) {
    this.fName = fName;
    this.lName = lName;
}

UserCreate.prototype.fullName = function () {
    return `${this.fName} ${this.lName}`;
};

let getData = new UserCreate('Aman', 'silawat');
getData.fullName(); // Aman silawat

// contiue with paid user
function PaidUserCreate(fName, lName, country) {
    UserCreate.call(this, fName, lName);
    this.country = country;
}

PaidUserCreate.prototype = Object.create(UserCreate.prototype);
PaidUserCreate.prototype.getFullDetails = function () {
    return `My name is ${this.fullName()} and i am living in ${this.country}.`;
};

let paidUser = new PaidUserCreate('Aman', 'silawat', 'India');
paidUser.getFullDetails(); // revise.js:107 My name is Aman silawat and i am living in India.

// . ----------
// . --------------------
// . ------------------------------
// . class approch
class UserCreate2 {
    constructor(fName, lName) {
        this.fName = fName;
        this.lName = lName;
    }

    fullName() {
        return `${this.fName} ${this.lName}`;
    }
}

let getData2 = new UserCreate2('Aman', 'silawat');
getData2.fullName(); // Aman silawat

// contiue with paid user
class PaidUserCreate2 extends UserCreate2 {
    constructor(fName, lName, country) {
        super(fName, lName);
        this.country = country;
    }

    getFullDetails() {
        return `My name is ${this.fullName()} and i am living in ${
            this.country
        }.`;
    }
}

let paidUser2 = new PaidUserCreate2('Aman', 'silawat', 'India');
paidUser2.getFullDetails(); //My name is Aman silawat and i am living in India.

// ..
// ....
// ......
// ******** Reflect.construct() ********

function func1(a, b, c) {
    this.sum = a + b + c;
}

const args = [1, 2, 3];
const object1 = new func1(...args);
const object2 = Reflect.construct(func1, args);

object2.sum; // expected output: 6
object1.sum; // expected output: 6

// example  (diff Object.create and Reflect.construct)
function OneClass() {
    this.name = 'one';
    this.ageOne = 1;
}

function OtherClass() {
    this.name = 'other';
    this.ageOther = 2;
}

// Calling this:
let obj11 = Reflect.construct(OneClass, args, OtherClass);

// ...has the same result as this:
let obj22 = Object.create(OtherClass.prototype);
OneClass.apply(obj22, args);

console.log(obj11); // OtherClass {name: "one", ageOne: 1} (? inside OneClass properties)
console.log(obj22); // OtherClass {name: "one", ageOne: 1} (? inside OneClass properties)

console.log(obj11 instanceof OneClass); // false
console.log(obj22 instanceof OneClass); // false

console.log(obj11 instanceof OtherClass); // true
console.log(obj22 instanceof OtherClass); // true

function OneClassA() {
    console.log('OneClassA');
    console.log(new.target);
}
function OtherClassA() {
    console.log('OtherClassA');
    console.log(new.target);
}

// let ob1 = Reflect.construct(OneClassA, args)
// // Output:
// //     OneClassA
// //     function OneClassA { ... }

// let ob2 = Reflect.construct(OneClassA, args, OtherClassA)
// // Output:
// //     OneClassA
// //     function OtherClassA { ... }

// let ob3 = Object.create(OtherClassA.prototype);
// OneClassA.apply(ob3, args)
// // Output:
// //     OneClassA
// //     undefined

// ..
// ....
// ......
// check instanse of
let d = Reflect.construct(Date, [1776, 6, 4]);
d instanceof Date; // true
d.getFullYear(); // 1776

console.log(d);
console.log(Date.prototype);

// ..
// ....
// ......
// push array into array without loop
const array = ['a', 'b'];
const elements = [0, 1, 2];
array.push.apply(array, elements);
array; // ["a", "b", 0, 1, 2]

// ..
// ....
// ......
// min/max number in an array
const numbers = [5, 6, 2, 3, 7];

// using Math.min/Math.max apply
let max = Math.max.apply(null, numbers);
// This about equal to Math.max(numbers[0], ...)
// or Math.max(5, 6, ...)
max; // 7

// ..
// ....
// ......
// find min max using simple loop
let minVal = +Infinity;
let maxVal = -Infinity;
for (const val of numbers) {
    if (val > maxVal) {
        maxVal = val;
    }

    if (val < minVal) {
        minVal = val;
    }
}
console.log(minVal, maxVal);
