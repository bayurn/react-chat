var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const mongoose = require('mongoose');
var cors = require('cors');

var indexRouter = require('./routes/index');
var chatsRouter = require('./routes/chats');
var usersRouter = require('./routes/users');

var app = express();

mongoose.connect('mongodb://localhost:27017/react-chat', { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false });

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors())

mongoose.Promise = global.Promise;

//connect to Mongodb
mongoose.connect('mongodb://localhost:27017/react-chat', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: true
})
    .then(() => console.log('Berhasil terhubung dengan MongoDB'))
    .catch((err) => console.error(err));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/chats', chatsRouter);

module.exports = app;
