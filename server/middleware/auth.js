const jwt = require("jsonwebtoken");

module.exports = function (req, res, next) {
  const token = req.header("x-auth-token");

  if (!token) {
    return res.status(401).json({ errors: [{ msg: "Authorization failed" }] });
  }

  try {
    jwt.verify(token, process.env.JWT_PASSWORD, (error, decoded) => {
      if (error) {
        return res.status(401).json({ errors: [{ msg: "Invalid Token" }] });
      } else {
        req.user = decoded.user;
        next();
      }
    });
  } catch (err) {
    console.error("something wrong with auth middleware");
    return res.status(500).send("Server Error");
  }
};
