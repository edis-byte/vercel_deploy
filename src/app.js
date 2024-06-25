const express = require('express');
require('dotenv').config();
const bookRouter = require('./routes/book.route');
const process = require('node:process');


const app = express();
    app.use(express.json());
    app.use('/api/book', bookRouter);
    app.get('/', (req,resp) => {
        resp.send({message: 'ciao SALVOOOO!!', pid: process.pid})
    });

    const port = process.env.SERVER_PORT || 3300;
    app.listen(port, console.log(`App listening in port ${port}`));

    module.exports = app;


