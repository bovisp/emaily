const express = require('express');
const cookieSession = require('cookie-session');
const passport = require('passport');

require('./models');
require('./services');

const keys = require('./config/keys');

const app = express();

app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey]
  })
);

app.use(passport.initialize());
app.use(passport.session());

require('./routes/auth')(app);

const PORT = process.env.PORT || 5000;

app.listen(PORT);
