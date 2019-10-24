import passport from "passport";

export default passport.authenticate('google', { scope: 'email' }, console.log);
