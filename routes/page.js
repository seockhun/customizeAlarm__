const express = require('express');

const router = express.Router();

router.use((req, res, next) => {
    res.locals.alarm = null;
    next();
});

router.get('/join', (req, res) => {
    res.render('join', { title: 'join - NodeBird' });
});

router.get('/', (req, res, next) => {
    const twists = [];
    res.render('main', {
        title: 'NodeBird',
        twists,
    });
});

module.exports = router;