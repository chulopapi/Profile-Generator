const Intern = require('../lib/Intern')

test('creates an intern object', () => {
    const employee = new Intern('Marlon','1','marlon.guandique@gmail.com')

    expect(intern.name).toBe('Marlon')
    expect(intern.role).toBe('Intern')
    expect(intern.employeeID).toBe('1')
    expect(intern.email).toBe('marlon.guandique@gmail.com')
    expect(intern.school).toBe('UC Berkeley')
})


test('creates HTML content using the makeCard method', () => {
    const intern = new Intern('Marlon','1','marlon.guandique@gmail.com','marlon-int')
    const card = intern.makeCard()
    expect(card).toContain(intern.name)
    expect(card).toContain(intern.role)
    expect(card).toContain(intern.employeeID)
    expect(card).toContain(intern.email)
    expect(card).toContain(intern.gitHub)
    expect(card).toContain('<div class')
    expect(card).toContain('<ul class')
    expect(card).toContain('<li class')
})