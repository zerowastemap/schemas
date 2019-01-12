const Email = {
  type: 'string',
  minLength: 5,
  maxLength: 256
}

const Newsletter = {
  type: 'boolean',
  default: false
}

const Username = {
  type: 'string',
  minLength: 1,
  maxLength: 48,
  pattern: '^[a-z][a-z0-9_-]*$'
}

const Role = {
  type: 'string',
  enum: ['user'], // maybe we will want other user configurable roles here
  default: 'user'
}

const User = {
  type: 'object',
  additionalProperties: false,
  required: ['email'],
  properties: {
    newsletter: Newsletter,
    username: Username,
    role: Role,
    email: Email
  }
}

module.exports = {
  Email,
  Newsletter,
  Role,
  User
}
