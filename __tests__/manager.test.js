const Manager = require('../lib/Manager')

test('creates a manager object', () => {
    const manager = new Manager('Marlon','1','marlon.guandique@gmail.com','1')

    expect(manager.name).toBe('Marlon')
    expect(manager.role).toBe('Manager')
    expect(manager.employeeID).toBe('1')
    expect(manager.email).toBe('marlon.guandique@gmail.com')
    expect(manager.officeNumber).toBe('1')
})

test('produces HTML data using the startCard method', () => {
    const manager = new Manager('Marlon','1','marlon.guandique@gmail.com','2')
    const card = manager.makeCard()
    expect(card).toContain(manager.name)
    expect(card).toContain(manager.role)
    expect(card).toContain(manager.employeeID)
    expect(card).toContain(manager.email)
    expect(card).toContain(manager.officeNumber)
    expect(card).toContain('<div class')
    expect(card).toContain('<ul class')
    expect(card).toContain('<li class')
})