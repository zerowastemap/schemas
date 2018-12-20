const AJV = require('ajv')
const assert = require('assert')
const { Location } = require('../location')

const ajv = new AJV({
  allErrors: true
  // multipleOfPrecision: 6
})

// Name
exports.test_name_null = () => {
  const isValid = ajv.validate(Location, {
    name: null
  })
  assert.strictEqual(isValid, false)
  assert.strictEqual(ajv.errors.length, 1)
  assert.strictEqual(ajv.errors[0].dataPath, '.name')
  assert.strictEqual(ajv.errors[0].message, 'should be string')
}

// Bad coordinates
exports.test_coordinates_out_of_bound = () => {
  const isValid = ajv.validate(Location, {
    coordinates: [95.5069312, -198.1445476]
  })
  assert.strictEqual(isValid, false)
  assert.strictEqual(ajv.errors.length, 2)
  assert.strictEqual(ajv.errors[0].dataPath, '.coordinates[0]')
  assert.strictEqual(ajv.errors[1].dataPath, '.coordinates[1]')
  assert.strictEqual(ajv.errors[0].message, 'should be <= 90')
  assert.strictEqual(ajv.errors[1].message, 'should be >= -180')
}

/*
testing decimal precision is a bit out of scope
exports.test_coordinates_precision = () => {
  const isValid = ajv.validate(Location, {
    coordinates: [-41.28666552, 174.772996908]
  })
  assert.strictEqual(isValid, false)
  assert.strictEqual(ajv.errors.length, 1)
  assert.strictEqual(ajv.errors[0].dataPath, '.coordinates[1]')
  assert.strictEqual(ajv.errors[0].message, 'should be multiple of 1e-8')
}

*/

// Valid coordinates
exports.test_coordinates_valid = () => {
  assert(ajv.validate(Location, { coordinates: [52.5069312, 13.1445476] }))
  assert(ajv.validate(Location, { coordinates: [50.8503396, 4.3517103] }))
}

// Valid kind (enum)
exports.test_kind_valid = () => {
  assert(ajv.validate(Location, { kind: 'supermarket' }))
  assert(ajv.validate(Location, { kind: 'grocery-store' }))
  assert(ajv.validate(Location, { kind: 'coop' }))
}

// Invalid kind (enum)
exports.test_kind_invalid = () => {
  const isValid = ajv.validate(Location, {
    kind: 'foo'
  })
  assert.strictEqual(isValid, false)
  assert.strictEqual(ajv.errors.length, 1)
  assert.strictEqual(ajv.errors[0].dataPath, '.kind')
  assert.strictEqual(ajv.errors[0].message, 'should be equal to one of the allowed values')
}

// Complete location object
exports.test_location_valid = () => {
  assert(ajv.validate(Location, {
    name: 'Original Unverpackt',
    address: {
      streetName: 'Wiener Straße',
      streetNumber: '16',
      countryCode: 'DE',
      city: 'Berlin',
      zip: '10999'
    },
    tags: ['bio', 'bulk'],
    email: 'kontakt@original-unverpackt.de',
    rating: 5,
    price: 3,
    url: 'https://original-unverpackt.de/',
    image: {
      src: 'https://static.zerowastemap.app/file/zerowastemap/1928699b-410a-4e70-8ccd-eba63b174ffe'
    },
    note: `
      Amazing place!
    `,
    coordinates: [52.5069312, 13.1445476],
    kind: 'supermarket'
  }))
}
