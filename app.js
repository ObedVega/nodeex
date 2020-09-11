const express = require('express')
const ejs = require("ejs").__express;
const app = express()
const port = 8080

const router = require('./routes/routes');

// Set view engine
app.set('view engine', 'ejs');

app.use('/', router);
app.use('/about', router);
app.use('/contact', router);


app.listen(port, () => {
  console.log('Server Started..');
});
