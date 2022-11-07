var jwt = require('jsonwebtoken');
var jwtSecret = 'b3c3edce64ea5bb02c7e19c7960faf2b0f5b9b88659441a1a25584e28c803566d632f2';
exports.adminAuth = function (req, res, next) {
    if (req.headers.authorization) {
        var token = req.headers.authorization.split(' ')[1];
        if (token) {
            jwt.verify(token, jwtSecret, function (err, decodedToken) {
                if (err) {
                    return res.status(401).json({ message: 'Not authorized' });
                }
                else {
                    if (decodedToken.role !== 'admin') {
                        return res.status(401).json({ message: 'Not authorized' });
                    }
                    else {
                        next();
                    }
                }
            });
        }
        else {
            return res
                .status(401)
                .json({ message: 'Not authorized, token not available' });
        }
    }
};
exports.userAuth = function (req, res, next) {
    if (req.headers.authorization) {
        var token = req.headers.authorization.split(' ')[1];
        if (token) {
            jwt.verify(token, jwtSecret, function (err, decodedToken) {
                if (err) {
                    return res.status(401).json({ message: 'Not authorized' });
                }
                else {
                    if (decodedToken.role !== 'Basic' && decodedToken.role !== 'admin') {
                        return res.status(401).json({ message: 'Not authorized' });
                    }
                    else {
                        next();
                    }
                }
            });
        }
        else {
            return res
                .status(401)
                .json({ message: 'Not authorized, token not available' });
        }
    }
};
//# sourceMappingURL=auth.js.map