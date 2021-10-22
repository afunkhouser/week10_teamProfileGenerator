const Engineer = require("../lib/Engineer")

test('creates an engineer object', () => {
    const employee = new Engineer('Aaron C', '08', 'asamcent@gmail.com', 'acenteno');

    expect(employee.name).toBe('Aaron C');
    expect(employee.id).toBe('08');
    expect(employee.email).toBe('asamcent@gmail.com');
    expect(employee.github).toBe('acenteno');
});

test("getRole() should return \"Engineer\"", () => {
    const testRole = "Engineer";
    const employee = new Engineer("Aaron C", 8, "asamcent@gmail.com", "acenteno");
    expect(employee.getRole()).toBe(testRole);
});

test("Can get GitHub username via getGithub()", () => {
    const testUser = "acenteno";
    const employee = new Engineer("Aaron C", 8, "asamcent@gmail.com", testUser);
    expect(employee.getGithub()).toBe(testUser);
});