const AJV = require('ajv')
const assert = require('assert')
const { Query } = require('../query')

const ajv = new AJV({
  allErrors: true,
  coerceTypes: true
})

exports.test_coords_valid = () => {
  const isValid = ajv.validate(Query, {
    latitude: '52.5069312',
    longitude: '13.1445476'
  })
  assert.strictEqual(isValid, true)
}

exports.test_coords_invalid = () => {
  const isValid = ajv.validate(Query, {
    latitude: '90.5069312',
    longitude: '13.1445476'
  })
  assert.strictEqual(isValid, false)
  assert.strictEqual(ajv.errors.length, 1)
  assert.strictEqual(ajv.errors[0].dataPath, '.latitude')
  assert.strictEqual(ajv.errors[0].message, 'should be <= 90')
}

exports.test_query_valid = () => {
  const isValid = ajv.validate(Query, {
    limit: '10',
    radius: '100'
  })
  assert.strictEqual(isValid, true)
}

exports.test_query_limit_invalid = () => {
  const isValid = ajv.validate(Query, {
    limit: '400',
    radius: '-100'
  })
  assert.strictEqual(isValid, false)
  assert.strictEqual(ajv.errors.length, 2)
  assert.strictEqual(ajv.errors[0].dataPath, '.limit')
  assert.strictEqual(ajv.errors[0].message, 'should be <= 100')
  assert.strictEqual(ajv.errors[1].dataPath, '.radius')
  assert.strictEqual(ajv.errors[1].message, 'should be >= 0')
}
