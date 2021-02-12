const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const methodOverride = require('method-override');
const dotenv = require('dotenv').config();
require('./config/db');
const sesions = require('express-session');
const flash= require('connect-flash');
const expressLayouts=require('express-ejs-layouts');
const indexRouter = require('./src/routes/index');
const authorRouter =require('./src/routes/author');

const app = express();

// view engine setup
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './src/views'));
app.set('layout', path.resolve(__dirname, './src/views/layouts/layout'));
app.use(expressLayouts);
app.use(express.static('public'));
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({limit:'10mb', extended: false }));
app.use(cookieParser());
app.use(methodOverride('_method'));
//session flash
app.use(sesions(
  {
    secret:"3ae5fb05a52bfc82d8cd79a78f70c9f9",
    resave:false,
    saveUninitialized:true,
    cookie:{
      maxAge: 2678400000 
    }
  }
));
app.use(flash())

app.use('/', indexRouter);
app.use('/authors',authorRouter);





app.listen(process.env.PORT || 3000, function(){
  console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});

module.exports = app;
