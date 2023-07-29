const cookie = require('../src/index')

describe('quem comeu o cookie', () => {

    test('deve retornar que o "Who ate the last cookie? It was Zach!" quando for string', () => {
        const x = 'hi'
        expect(cookie(x)).toBe('Who ate the last cookie? It was Zach!')
    })
    test('deve retornar que o "Who ate the last cookie? It was Monica!" quando for float', () => {
        const x = 12
        expect(cookie(x)).toBe('Who ate the last cookie? It was Monica!')
    })

    test('deve retornar que o "Who ate the last cookie? It was Monica!" quando for float', () => {
        const x = 12.3
        expect(cookie(x)).toBe('Who ate the last cookie? It was Monica!')
    })
    test('deve retornar que o "Who ate the last cookie? It was Monica!" quando for float', () => {
        const x = true
        expect(cookie(x)).toBe('Who ate the last cookie? It was the dog!')
    })
})