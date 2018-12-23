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
      minimum: 1,
      maximum: 100
    },
    radius: {
      type: 'number',
      minimum: 0,
      maximum: 1000 // 1000 km
    }
  }
}

module.exports = {
  Query
}
