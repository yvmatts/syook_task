const jwt = require('jsonwebtoken')
const conf = require('../conf')
const requireAuth = (req, res, next) => {
  const token = req.cookies.jwt

  // check json web token exists & is verified
  if (token) {
    jwt.verify(token, conf.secretKey, (err, decodedToken) => {
      if (err) {
        res.status(404).json({message: 'Authentication Failed'})
      } else {
        next();
      }
    });
  } else {
    res.status(404).json({message: 'Authentication Failed'})
  }
};

module.exports = { requireAuth };
