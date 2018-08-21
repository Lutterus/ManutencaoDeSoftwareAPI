const getPrograms = require('../source/routes/programs/mockedGetPrograms.js')
const sinon = require('sinon')
const sinonChai = require('sinon-chai')
const chai = require('chai')
chai.use(sinonChai)
const { expect } = chai

// mocks para teste
const res = {
  send: sinon.spy()
}
const req = {}

describe('getPrograms', () => {
  it('deve retornar um objeto de resposta', () => {
    // Chama a rota
    getPrograms()(req, res)

    // Comportamento esperado da rota
    expect(res.send).to.have.been.calledOnce
  })
})