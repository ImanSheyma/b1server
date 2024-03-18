//импортируем модули
require('dotenv').config();
const express = require("express");
const cors = require('cors');
const db = require('./config/db');
const router = require('./routes/router');
const bodyparser = require('body-parser');

//настраиваем апликейшн
const app = express();
app.use(express.json());
app.use(cors());
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:true}));
app.use(router);

const PORT = process.env.PORT || 3000;

//запускаем сервер
app.listen(PORT, ()=> {
    console.log("listening");
})