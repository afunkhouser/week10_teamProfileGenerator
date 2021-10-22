const Employee = require("../lib/Employee");

test('creates an employee object', () => {
    const employee = new Employee('Aaron C', '08', 'asamcent@gmail.com');

    expect(employee.name).toBe('Aaron C');
    expect(employee.id).toBe('08');
    expect(employee.email).toBe('asamcent@gmail.com');
});

test('can set name via constructor arguments', () => {
    const name = 'Aaron';
    const employee = new Employee(name);
    expect(employee.name).toBe(name);
});

test('Can set id via constructor argument', () => {
    const testId = 8;
    const employee = new Employee('Aaron C', testId);
    expect(employee.id).toBe(testId);
});

test('Can set email via constructor argument', () => {
    const testEmail = 'asamcent@gmail.com';
    const employee = new Employee('Aaron C', 1, testEmail);
    expect(employee.email).toBe(testEmail);
});