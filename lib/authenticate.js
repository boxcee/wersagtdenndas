import { getDomain } from "../utils/domain";
import { config } from 'dotenv';
import passport from 'passport';
import { OAuth2Strategy as GoogleStrategy } from 'passport-google-oauth';
import db from '../models/index';

config();

passport.use('google', new GoogleStrategy({
  clientID: process.env.GOOGLE_OAUTH_CLIENT_ID,
  clientSecret: process.env.GOOGLE_OAUTH_CLIENT_SECRET,
  callbackURL: `http://${getDomain(process.env.NODE_ENV)}/api/google/callback`
}, (token, tokenSecret, profile, done) => {
  const { value } = profile.emails.find(email => email.verified);
  db.User
    .findOrCreate({ where: { email: value } })
    .then(([user]) => done(user, null))
    .catch(err => done(null, err));
}));

module.exports = passport;
