const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const server = express();

var UserRouter = require('./routes/user.router');
var LoginRouter = require('./routes/login.router');
var AdminRouter = require('./routes/admin.routes');
var LogMiddleware = require('./middleware/log');
var connectionDb = require('./config/db.config');

server.use((req, res, next)=>{
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", 'GET,PUT,POST,DELETE');
    server.use(cors());
    next();
});
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({extended: true}));
server.use(LogMiddleware);


server.use(UserRouter);
server.use(LoginRouter);
server.use(AdminRouter);

server.listen(3030, () => {
    console.log('Servidor rodando na porta: 3030')
});