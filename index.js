const express = require('express');
const {engine} = require('express-handlebars');
const session = require('express-session')
const MongoStore = require('connect-mongodb-session')(session)
require('dotenv').config();

// db connection
const connectDB = require('./config/connectDB');

const app = express();

// db connection
connectDB()

// session initialization
const store = new MongoStore({
    collection: 'sessions',
    uri: process.env.MONGO_URI
})

app.use(session({
    secret: process.env.SECTION_SECRET,
    resave: false,
    saveUninitialized: false,
    store
}))

app.use(express.static('public'));

// handlebars initialization
app.engine('hbs', engine({extname: 'hbs',}));
app.set('view engine', 'hbs');

// json configiration
app.use(express.json())
app.use(express.urlencoded({extended: true}))

// router initialization

app.use('/auth', require('./router/auth.routes'))

app.use(
  '/admin', 
  require('./middleware/auth').protected, 
  require('./router/admin.routus')
)

app.use('/', require('./router/public.routes'))

app.get('/:id', require('./controls/404.pages.errors'))





// server listening
const PORT = process.env.PORT || 5000;
app.listen(PORT, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log(`Server running on port ${PORT}`);
  }
});



