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
        return `My name is ${this.fullName()} and i am living in ${this.country}.`;
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
    };
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
        return `My name is ${this.fullName()} and i am living in ${this.country}.`;
    };
}

let paidUser2 = new PaidUserCreate2('Aman', 'silawat', 'India');
paidUser2.getFullDetails(); //My name is Aman silawat and i am living in India.