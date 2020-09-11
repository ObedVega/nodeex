const express = require('express')
const app = express()
const port = 8080

const router = require('./routes/routes');
app.use('/', router);
app.use('/about', router);
app.use('/contact', router);

app.listen(port, () => {
  console.log('Server Started..');
});
