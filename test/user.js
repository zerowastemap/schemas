const AJV = require('ajv')
const assert = require('assert')
const { User } = require('../user')

const ajv = new AJV({
  allErrors: true
})

exports.test_user_valid = () => {
  assert(ajv.validate(User, {
    username: 'auggod',
    email: 'salut@zerowastemap.app',
    newsletter: true,
    role: 'user'
  }))
}

exports.test_user_invalid = () => {
  const isValid = ajv.validate(User, {
    username: '{user}',
    role: 'admin'
  })
  assert.strictEqual(isValid, false)
  assert.strictEqual(ajv.errors.length, 3)
  assert.strictEqual(ajv.errors[0].dataPath, '.username')
  assert.strictEqual(ajv.errors[0].message, 'should match pattern "^[a-z][a-z0-9_-]*$"')
  assert.strictEqual(ajv.errors[1].dataPath, '.role')
  assert.strictEqual(ajv.errors[1].message, 'should be equal to one of the allowed values')
  assert.strictEqual(ajv.errors[2].message, "should have required property 'email'")
}
