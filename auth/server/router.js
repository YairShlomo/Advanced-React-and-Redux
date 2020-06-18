const Authentication = require("./controllers/authentication");
const passportService = require("./services/passport");
const passport = require("passport");

const requireAuth = passport.authenticate("jwt", { session: false });
const requireSIgnin = passport.authenticate("local", { session: false });

module.exports = function (app) {
  app.get('/', requireAuth, function(req,res) {
    res.send({ hi:'there' })
  });
  app.post('/signin', requireSIgnin, Authentication.signup)
  app.post("/signup", Authentication.signup);
};
