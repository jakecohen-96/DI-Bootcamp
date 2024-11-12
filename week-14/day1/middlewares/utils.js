// midlleware - request ->  middleware()  -> response
const logger = (req, res, next) => {
  console.log(req.url);
  console.log(req.method);
  next();
};

const auth = (req, res, next) => {
  const { admin } = req.query;
  if (admin === "admin") {
    next();
  } else {
    res.status(401).json({ message: "user not authorized to see data" });
  }
};

module.exports = {
  logger,
  auth
};
