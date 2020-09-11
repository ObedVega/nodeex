const express = require('express');
const router = express.Router();



router.get('/', (req, res) =>{
    //res.send('Index');
    res.render('pages/index');
});

router.get('/about', function(req, res) {
    res.sendFile('about.html', { root: 'public' });
//    res.render('pages/about')
});

router.get('/contact', function(req, res) {
    res.render('pages/contact');
    //res.send('Contact Us');
});

module.exports = router
