const Query = {
  type: 'object',
  properties: {
    latitude: {
      type: 'number',
      maximum: 90,
      minimum: -90
    },
    longitude: {
      type: 'number',
      maximum: 180,
      minimum: -180
    },
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
