const Intern = require('../lib/Intern')

test('creates an intern object', () => {
    const intern = new Intern('Marlon','10','marlon@mail.com','UC Berkeley')

    expect(intern.name).toBe('Marlon')
    expect(intern.role).toBe('Intern')
    expect(intern.employeeID).toBe('10')
    expect(intern.email).toBe('marlon@mail.com')
    expect(intern.school).toBe('UC Berkeley')
})

test('produces HTML data using the startCard method', () => {
    const intern = new Intern('Marlon','10','marlon@mail.com','UC Berkeley')
    const card = intern.makeCard()
    expect(card).toContain(intern.name)
    expect(card).toContain(intern.role)
    expect(card).toContain(intern.employeeID)
    expect(card).toContain(intern.email)
    expect(card).toContain(intern.school)
    expect(card).toContain('<div class')
    expect(card).toContain('<ul class')
    expect(card).toContain('<li class')
})