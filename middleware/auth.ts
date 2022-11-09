const jwt = require('jsonwebtoken');
const jwtSecret =
  'b3c3edce64ea5bb02c7e19c7960faf2b0f5b9b88659441a1a25584e28c803566d632f2';

exports.adminAuth = (req, res, next) => {
  if (req.headers.authorization) {
    const token = req.headers.authorization.split(' ')[1];

    if (token) {
      jwt.verify(token, jwtSecret, (err, decodedToken) => {
        if (err) {
          return res.status(401).json({ message: 'Not authorized' });
        } else {
          if (decodedToken.role !== 'admin') {
            return res.status(401).json({ message: 'Not authorized' });
          } else {
            next();
          }
        }
      });
    } else {
      return res
        .status(401)
        .json({ message: 'Not authorized, token not available' });
    }
  }
};

exports.userAuth = (req, res, next) => {
  if (req.headers.authorization) {
    const token = req.headers.authorization.split(' ')[1];

    if (token) {
      jwt.verify(token, jwtSecret, (err, decodedToken) => {
        if (err) {
          return res.status(401).json({ message: 'Not authorized' });
        } else {
          if (decodedToken.role !== 'basic' && decodedToken.role !== 'admin') {
            return res
              .status(401)
              .json({ message: "Vous n'avez pas les droit" });
          } else {
            next();
          }
        }
      });
    } else {
      return res
        .status(401)
        .json({ message: 'Not authorized, token not available' });
    }
  }
};
