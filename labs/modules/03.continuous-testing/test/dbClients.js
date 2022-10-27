const { expect } = require('chai')
let db

describe('Redis', () => {

  before(() => {
    db = require('../lab/src/dbClient')
  })

  it('should connect to Redis', () => {
    expect(db.connected).to.eql(true)
  })
})
