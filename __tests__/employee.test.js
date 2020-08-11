const Employee = require('../lib/Employee')

test('creates an employee object', () => {
    const employee = new Employee('Marlon','1','marlon.guandique@gmail.com')

    expect(employee.name).toBe('Marlon')
    expect(employee.role).toBe('Employee')
    expect(employee.employeeID).toBe('1')
    expect(employee.email).toBe('marlon.guandique@gmail.com')
})