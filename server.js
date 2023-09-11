const path = require('path');
const express = require('express');
const session = require('express-session');
const expBars = require('express-handlebars');
const routes = require('./controllers');
const helper = require('./utils/util');
const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const app = express();
const PORT = process.env.PORT || 3001;
const Bars = expBars.create(helper);

const sessionObj = {
  secret: 'secret key',
  cookie: {
    maxAge: 300000,
    httpOnly: true,
    secure: false,
    sameSite: 'strict',
  },
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
};

app.use(session(sessionObj));

app.engine('handlebars', Bars.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(routes);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`server listening on port ${PORT}`));
});
