const Address = {
  type: 'object',
  additionalProperties: false,
  required: [
    'zip',
    'countryCode'
  ],
  properties: {
    streetName: {
      type: 'string'
    },
    streetNumber: {
      type: 'string'
    },
    zip: {
      type: 'string'
    },
    country: {
      type: 'string'
    },
    phoneNumber: {
      type: 'string'
    },
    countryCode: {
      type: 'string'
    },
    region: {
      type: 'string'
    },
    province: {
      type: 'string'
    },
    city: {
      type: 'string'
    }
  }
}

const FullAddress = {
  type: ['object', 'string'],
  minLength: 1,
  maxLength: 256,
  additionalProperties: false,
  properties: {
    fr: {
      type: 'string'
    },
    nl: {
      type: 'string'
    },
    de: {
      type: 'string'
    },
    en: {
      type: 'string'
    }
  }
}

const Coordinates = {
  type: 'array',
  maxItems: 2,
  items: [
    {
      type: 'number',
      maximum: 90,
      minimum: -90
      // multipleOf: 1e-8
    }, // latitude
    {
      type: 'number',
      maximum: 180,
      minimum: -180
      // multipleOf: 1e-8
    } // longitude
  ]
}

const Email = {
  type: 'string',
  minLength: 5,
  maxLength: 256
}

const Name = {
  type: 'string',
  minLength: 1,
  maxLength: 48
}

const Kind = {
  type: 'string',
  enum: ['supermarket', 'caviste', 'grocery-store', 'market', 'webshop', 'event', 'association', 'coop']
}

const Tags = {
  type: 'array',
  items: {
    type: 'string',
    minLength: 3,
    maxLength: 256
  }
}

const Url = {
  type: 'string',
  minLength: 5,
  maxLength: 256
}

const Image = {
  type: 'object',
  additionalProperties: false,
  required: ['src'],
  properties: {
    src: {
      type: 'string'
    },
    width: {
      type: 'number'
    },
    height: {
      type: 'number'
    }
  }
}

const Rating = {
  type: 'number',
  minimum: 0,
  maximum: 5
}

const Price = {
  type: 'number',
  minimum: 0,
  maximum: 5
}

const Note = {
  type: 'string',
  minLength: 5,
  maxLength: 256
}

const Description = {
  type: 'string',
  minLength: 5,
  maxLength: 1000
}

const Location = {
  type: 'object',
  additionalProperties: false,
  required: ['name', 'coordinates', 'address', 'image'],
  properties: {
    address: Address,
    fullAddress: FullAddress,
    coordinates: Coordinates,
    email: Email,
    kind: Kind,
    name: Name,
    rating: Rating,
    description: Description,
    note: Note,
    price: Price,
    image: Image,
    tags: Tags,
    url: Url
  }
}

module.exports = {
  Address,
  FullAddress,
  Coordinates, // 2d coordinates array, example: [50.85045, 4.34878] for latitude and longitude
  Email,
  Kind,
  Name,
  Tags,
  Url,
  Location
}
