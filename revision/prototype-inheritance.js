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
person1.getFullName(); // Aman Silawat


// Create Another function
function StudentPerson(fName, lName, producName, schoolId) {
    Person.call(this, fName, lName, producName);
    this.schoolId = schoolId;
}

//inherite prototype
StudentPerson.prototype =  Object.create(Person.prototype);

StudentPerson.prototype.getId = function() {
    return this.schoolId;
}

//create constructor functing using new keyword
student = new StudentPerson('Rahul', 'Yadav', 'Dell i5 Laptop', '10255');
student.getId(); // 10255
student.getFullName(); // Aman Silawat