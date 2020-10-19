// create Person function
function Person(fName, lName, producName) {
    this.fName = fName;
    this.lName = lName;
    this.producName = producName;
}

// create a method
Person.prototype.getFullName = function () {
    return `${this.fName} ${this.lName}`;
};

//create constructor functing using new keyword
person1 = new Person('Aman', 'Silawat', 'Dell i3 Laptop');
console.log( person1.getFullName() );
