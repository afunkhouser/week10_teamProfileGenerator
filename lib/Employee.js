class Employee {
    constructor(name, id, email, employee) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.employee = employee;
        this.role = 'Employee';
    }

    async getName() {
        return this.name
    }

    async getId() {
        return this.id
    }

    async getEmail() {
        return this.email
    }

    async getRole() {
        return 'Emplyoee'
    };
}

module.exports = Employee;