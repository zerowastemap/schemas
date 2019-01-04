const Email = {
  type: 'string',
  minLength: 5,
  maxLength: 256
}

const Username = {
  type: 'string',
  minLength: 1,
  maxLength: 48,
  pattern: '^[a-z][a-z0-9_-]*$'
}

const Role = {
  type: 'string',
  enum: ['user', 'admin']
}

const User = {
  type: 'object',
  additionalProperties: false,
  required: ['email'],
  properties: {
    username: Username,
    role: Role,
    email: Email
  }
}

module.exports = {
  Email,
  Role,
  User
}
