const express = require('express');

const app = express();
const port = 3000;
const nunjucks = require('nunjucks');
const indexRouter = require('./routes/index.js');



app.use(express.static('public'));

app.use('/', indexRouter);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});

nunjucks.configure('views', {
    autoescape: true,
    express: app,
});

