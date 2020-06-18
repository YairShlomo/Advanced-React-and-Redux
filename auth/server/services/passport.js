const passport = require("passport");
const User = require("../models/user");
const config = require("../config");
const JwtStrategy = require("password-jwt").Strategy;
const ExtractJwt = require("password-jwt").ExtractJwt;

// Setup options for jwt Strategy
const jwtOptions = {
  jwtFromRequest: ExtractJwt.fromHeader("authentication"),
  secretOrKey: config.secret,
};

// create JWT strategy
const jwtLogin = new JwtStrategy(jwtOptions, function (payload, done) {
  // see if userId in the payload exist in our DB.
  // if it does, call 'done' with that user
  // otherwise , call done without a user obj
  User.findById(payload.sub, function (err, user) {
    if (err) {
      return done(err, false);
    }
    if (user) {
      done(null, user);
    } else {
      done(null, false);
    }
  });
});

// tell passport to use this strategy
passport.use(jwtLogin);