const router = require('express').Router();
const { Comment } = require('../../models');

console.log('comment-routes open');

router.post('/', (req, res) => {
    Comment.create({ ...req.body, userId: req.session.userId})
    .then(newComment => {
        res.json(newComment);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

module.exports = router;