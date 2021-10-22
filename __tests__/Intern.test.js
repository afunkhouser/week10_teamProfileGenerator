const Intern = require("../lib/Intern");

test('creates an intern object', () => {
    const employee = new Intern('Aaron C', '08', 'asamcent@gmail.com', 'UCLA');

    expect(employee.name).toBe('Aaron C');
    expect(employee.id).toBe('08');
    expect(employee.email).toBe('asamcent@gmail.com');
    expect(employee.school).toBe('UCLA');
});

test("Can set school via constructor", () => {
    const testSchool = "UCLA";
    const employee = new Intern("Aaron C", 8, "asamcent@gmail.com", testSchool);
    expect(employee.school).toBe(testSchool);
});
  
test("getRole() should return \"Intern\"", () => {
    const testRole = "Intern";
    const employee= new Intern("Aaron C", 8, "asamcent@gmail.com", "UCLA");
    expect(employee.getRole()).toBe(testRole);
});
  
test("Can get school via getSchool()", () => {
    const testSchool = "UCLA";
    const employee = new Intern("Aaron C", 8, "asamcent@gmail.com", testSchool);
    expect(employee.getSchool()).toBe(testSchool);
});