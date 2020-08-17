const Employee = require("./Employee");

// Manager class uses employee class parameter and it has only one unique paramater when the makecard function is called.
//in this case for a manager is the office number. 

class Manager extends Employee {
    constructor(name,employeeID,email,officeNumber) {
        super(name,employeeID,email);
        this.role = 'Manager';
        this.officeNumber = officeNumber;
    };
    makeCard() {
        return this.startCard(`Office Number: ${this.officeNumber}`)
    };
};

module.exports = Manager;