const router = require('express').Router();
const withAuth = require('../../utils/auth');
const { Post, User, Comment } = require('../../models');

router.post('/', withAuth, (req, res) => {
    const body = req.body;
    Post.create({ ...body, user_id: req.session.user_id })
    .then(newPost => {
        res.json(newPost);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.put('/:id', (req, res) => {
    Post.update(req.body, {
        where: {
            id:req.params.id
        }
    })
    .then(affectedRows => {
        if (!affectedRows > 0) {
            res.status(200).end();
        } else {
            res.status(404).end();
        }
    })
    .catch((err) => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.get('/', (req, res) => {
    Post.findAll({})
    .then(allPost => {
        res.json(allPost);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.delete('/:id', (req, res) => {
    Post.destroy({
        where: {
            id: req.params.id
        }
    })
    .then(affectedRows => {
        if (affectedRows > 0) {
            res.status(200).end();
        } else {
            res.status(404).end();
        }
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});
module.exports = router;