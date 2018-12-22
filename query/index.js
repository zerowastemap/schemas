const { Coordinates } = require('../location')

const Query = {
  type: 'object',
  properties: {
    coordinates: Coordinates,
    limit: {
      type: 'number',
      maximum: 100
    },
    radius: {
      type: 'number',
      maximum: 1000
    }
  }
}

module.exports = {
  Query
}
