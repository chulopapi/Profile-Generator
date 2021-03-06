const Employee = require('../lib/Employee')

test('creates an employee object', () => {
    const employee = new Employee('Marlon','1','marlon.guandique@gmail.com')

    expect(employee.name).toBe('Marlon')
    expect(employee.role).toBe('Employee')
    expect(employee.employeeID).toBe('1')
    expect(employee.email).toBe('marlon.guandique@gmail.com')
})

test('produces HTML data using the startCard method', () => {
    const employee = new Employee('Marlon','1','marlon.guandique@mail.com')
    const card = employee.startCard('')
    expect(card).toContain(employee.name)
    expect(card).toContain(employee.role)
    expect(card).toContain(employee.employeeID)
    expect(card).toContain(employee.email)
    expect(card).toContain('<div class')
    expect(card).toContain('<ul class')
    expect(card).toContain('<li class')
})