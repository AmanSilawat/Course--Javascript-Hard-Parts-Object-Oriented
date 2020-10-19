// create Person class
class Person {
    constructor(fName, lName, producName) {
        this.fName = fName;
        this.lName = lName;
        this.producName = producName;
    }

    // create a method
    getFullName() {
        return `${this.fName} ${this.lName}`;
    }
}

//create constructor class
person1 = new Person('Aman', 'Silawat', 'Dell i3 Laptop');
console.log(person1.getFullName()); // Aman Silawat

// Create Another class and inherite parent class
class StudentPerson extends Person {
    constructor(fName, lName, producName, schoolId) {
        super(fName, lName, producName);
        this.schoolId = schoolId;
    }
    getId() {
        return this.schoolId;
    }
}

//create constructor functing using new keyword
student = new StudentPerson('Rahul', 'Yadav', 'Dell i5 Laptop', '10255');
console.log(student.getId()); // 10255
console.log(student.getFullName()); // Aman Silawat
