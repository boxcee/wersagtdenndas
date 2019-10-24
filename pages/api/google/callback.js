import passport from "passport";

export default (req, res) => {
  passport.authenticate('google', {
    failureRedirect: '/api/google/login'
  }, console.log);
  res.send();
}
