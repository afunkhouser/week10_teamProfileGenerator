const Manager= require('../lib/Manager');
const Employee = require('../lib/Employee');
const { TestWatcher } = require('@jest/core');

test('Can set office number via constructor argument', () => {
    const testOffice = 8;
    const employee = new Manager('Paul', 8, 'paul@mail.com', testOffice);
    expect(employee.officeNumber).toBe(testOffice)
})

test('Can set name via constructor argument', () => {
    
})