const jwt = require("jsonwebtoken");


const authenticateToken = (req, res, next) => {
  const authHeader = req.headers.authorization;
  console.log("useeeer", req);

  if (authHeader) {
    const token = authHeader && authHeader.split(" ")[1];
    if (token === null) return res.status(401).json("error token");

    jwt.verify(token, process.env.JWT_SEC, (err, user) => {
      if (err) return res.status(403).json("not auth resUser");
      return res.status(200).json(user);
      // req.user = user;
      // next()
    });
  }
};

const verifyTokenAndAdmin = (req, res, next) => {
  authenticateToken(req, res, () => {
    if (req.user.isAdmin === 0) {
      res.status(200).json("admin is here");
      // next();
    } else {
      res.status(403).json("You are not alowed to do that!");
    }
  });
};

module.exports = {
  authenticateToken,
  verifyTokenAndAdmin,

 
};
