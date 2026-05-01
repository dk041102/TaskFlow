module.exports = (role) => {
  return (req, res, next) => {
    console.log("USER ROLE:", req.user?.role); // 🔥 DEBUG
    console.log("REQUIRED ROLE:", role);       // 🔥 DEBUG

    if (req.user.role !== role) {
      return res.status(403).json({ msg: 'Access denied' });
    }

    next();
  };
};