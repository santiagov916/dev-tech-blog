const router = require('express').Router();
const { Post } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', withAuth, (req, res) => {

});

router.get('/new', withAuth, (req, res) => {
    
});

router.get('/edit/:id', withAuth, (req, res) => {

})