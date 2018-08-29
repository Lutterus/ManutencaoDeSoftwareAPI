const getPrograms = require('../../../source/routes/programs/all.get.js')
const sinon = require('sinon')
const sinonChai = require('sinon-chai')
const chai = require('chai')
chai.use(sinonChai)
const { expect } = chai
const { modelMock } = require('../../mocks')

// mocks para teste
const Programa = modelMock(sinon)
const res = {
  send: sinon.spy()
}
const req = {}

describe('getPrograms', () => {
  it('deve retornar um objeto de resposta', () => {
    // Chama a rota
    Programa.findAll.resolves({a:'a'})
    // res.send()
    getPrograms(Programa)(req, res)

    // Comportamento esperado da rota
    expect(Programa.findAll, 'findAll call').to.have.been.calledOnce
    expect(res.send).to.have.been.calledOnce
  })
})