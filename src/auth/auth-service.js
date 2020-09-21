const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const config = require('../config')

const AuthService = {
  getAdminWithName(db, name) {
    return db('admins')
      .where({ name })
      .first()
  },
    compareAdminUserName(db, name) {
      return db('admins')
        .where({ name })
        .first()
    },
    comparePasswords(password, hash){
      return bcrypt.compare(password, hash)
    },
    createJWT(subject, payload){ 
      return jwt.sign(payload, config.JWT_SECRET, {
        subject,
        expiresIn: config.JWT_EXPIRY,
        algorithm: 'HS256'
      })
    },
    verifyJwt(token) {
      return jwt.verify(token, config.JWT_SECRET, {
        algorithms: ['HS256'],
      })
    },    
    parseBasicToken(token) {
      return Buffer
        .from(token, 'base64')
        .toString('')
        .split(':')
    },
  }
  
  module.exports = AuthService
  