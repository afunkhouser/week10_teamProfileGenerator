const Employee = require('../lib/Employee');

test('Can set employee name via constructor arguments', () => {
    const name = 'Aaron';
    const employee = new Employee(name);
    expect(employee.name).toBe(name);
})