const jwt = require('jsonwebtoken');

module.exports = function(req, res, next) {
  
    const token = req.header('x-auth-token');

    if (!token) {
        return res.status(401).json({ errors: [ { msg: 'No token, Authorization denied' } ] });
    }

    
    try {
        jwt.verify(token, process.env.JWT_PASSWORD, (error, decoded) => {
            if (error) {
                return res.status(401).json({ errors: [ { msg: 'Invalid' } ] });
            } else {
                req.user = decoded.user;
                next();
            }
        });
    } catch (err) {
         
        return res.status(500).send('Server Error');
    }
};
