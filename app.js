//importa as bibliotecas
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const session = require('express-session');
const sequelize = require('sequelize');
const methodOverride = require('method-override');

//importa as rotas
const homeRouter = require('./routes/index');
const userRouter = require('./routes/user');
const shopRouter = require('./routes/shop');


var app = express();
//const app = require('../../express-isAuth/app'); não sei de onde isso veio nem pra que serve

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static('public')) //indica onde estão as imagens, não precisa mais indicar o caminho /public pra acessar

//codigos importados do petshop
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({
    secret: 'palavrasecreta',
    resave: true,
    saveUninitialized: true
}));
app.use(methodOverride('_method'));

app.use('/home', homeRouter);
app.use('/shop', shopRouter);
app.use('/user', userRouter);

// catch 404 and forward to error handler
app.use(async function(req, res, next) {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
        } catch (error) {
        console.error('Unable to connect to the database:', error);
        }    
    next(createError(404));
});

  // error handler
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});


module.exports = app;
