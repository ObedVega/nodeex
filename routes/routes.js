const express = require('express');
const router = express.Router();

router.get('/', (req, res) =>{
    res.send('Index');
});

router.get('/about', function(req, res) {
    res.sendFile('about.html', { root: 'public' });
});

router.get('/contact', (req, res) =>{
    res.send('Contact Us');
});

module.exports = router
