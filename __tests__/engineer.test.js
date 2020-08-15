const Engineer = require('../lib/Engineer')

test('creates an engineer object', () => {
    const employee = new Engineer('Marlon','1','marlon.guandique@gmail.com')

    expect(engineer.name).toBe('Marlon')
    expect(engineer.role).toBe('engineer')
    expect(engineer.employeeID).toBe('1')
    expect(engineer.email).toBe('marlon.guandique@gmail.com')
    expect(engineer.gitHub).toBe('marlon-eng')
})


test('creates HTML content using the makeCard method', () => {
    const engineer = new Engineer('Marlon','1','marlon.guandique@gmail.com','marlon-eng')
    const card = engineer.makeCard()
    expect(card).toContain(engineer.name)
    expect(card).toContain(engineer.role)
    expect(card).toContain(engineer.employeeID)
    expect(card).toContain(engineer.email)
    expect(card).toContain(engineer.gitHub)
    expect(card).toContain('<div class')
    expect(card).toContain('<ul class')
    expect(card).toContain('<li class')
})