const jwt = require('jsonwebtoken');

const authMiddleware = async (req, res, next) => {
  try {
    console.log("Middleware HIT");

    const authHeader = req.headers.authorization;

    console.log("JWT SECRET:", process.env.JWT_SECRET);
    console.log("AUTH HEADER:", authHeader);

    if (!authHeader) {
      return res.status(401).json({ msg: "No token provided" });
    }

    
    const token = authHeader.startsWith("Bearer ")
      ? authHeader.split(" ")[1]
      : authHeader;

    console.log("TOKEN:", token);

    if (!token) {
      return res.status(401).json({ msg: "Token missing" });
    }

    // Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    console.log("DECODED:", decoded);

    req.user = decoded;

    next();

  } catch (err) {
    console.log("AUTH ERROR:", err.message);

    return res.status(403).json({
      msg: "Invalid or expired token",
      error: err.message
    });
  }
};

module.exports = authMiddleware;
