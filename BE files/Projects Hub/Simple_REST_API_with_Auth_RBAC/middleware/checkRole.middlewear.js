const checkRole = (req, res, next) => {
  let userRole = req.user.role;

  try {
    if (userRole === "admin") {
      next();
    } else {
      res.status(403).json({
        success: false,
        message: "Forbidden: admin access required"
      });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Unable to authorise the role of user",
    });
  }
};

module.exports = checkRole;
