//github passport auth strategy

//register app on github, create a model for mongoose, setup config file/env variables

var passport = require('passport');
var GitHubStrategy = require('passport-github').
  Strategy;

var GITHUB_CLIENT_ID = 'cdbd12be63cc8b0a93f0';
var GITHUB_CLIENT_SECRET = '88e6f6dead0e7b4000ce065bf54760ea4f853451';

passport.use(new GitHubStrategy({
  clientID: GITHUB_CLIENT_ID,
  clientSecret: GITHUB_CLIENT_SECRET,
  callbackURL: "http://127.0.0.1:3000/auth/github/callback"
  },
  function(accessToken, refreshToken, profile, done) {
    console.log(profile);
    // User.findOrCreate({ githubId: profile.id }, function (err, user) {
    //   return done(err, user);
    // });
  }
));


module.exports = passport;
