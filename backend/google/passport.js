const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const GOOGLE_CLIENT_ID = "766661825985-kbhf220o8fh8iiaffrpt3gaqbe0jtl62.apps.googleusercontent.com"
const GOOGLE_CLIENT_SECRET = "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"

passport.use(new GoogleStrategy({
    clientID: GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: "/auth/google/callback"
},
    function (accessToken, refreshToken, profile, done) {
        done(null, profile)
    }
));

passport.serializeUser((user, done) => {
    done(null,user)
})


passport.deserializeUser((user, done) => {
    done(null,user)
})