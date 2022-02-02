const router = require('express').Router();
const withAuth = require('../../utils/auth');
const { User, Post, Comment } = require('../../models');

console.log('user-routes open');

router.get('/', (req, res) => {
    User.findAll({
        // attributes: { exclude: ['password'] },
    })
    .then(userData => res.json(userData))
    .catch((err) => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.get('/:id', (req, res) => {
    User.findOne({
        attributes: { exclude: ['password'] },
        where: {
            id: req.params.id,
        },
        include: [
            {
                model: Post,
                attributes: ['id', 'title', 'post_url', 'created_at'],
            },
            {
                model: Comment,
                attributes: ['id', 'comment_text', 'created_at'],
                include: {
                    model: Post,
                    attributes: ['title'],
                },
            },
        ],
    })
    .then((userData) => {
        if (!userData) {
            res
            .status(404)
            .json({ message: "No user with id found" });
            return;
        }
        res.json(userData);
    })
    .catch((err) => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.post('/login', (req, res) => {
    User.findOne({
        where: {
            username: req.body.username,
        }
    }).then(userData => {
        if (!userData) {
            res.status(400).json({ message: 'No user found' });
            return;
        }
 
        const validPassword = userData.checkPassword(req.body.password);

        if (!validPassword) {
            res.status(400).json({ message: 'Wrong Password!' });
            return;
        }

        console.log('You have entered the dragon');
        // req.session.save(() => {
        //     req.session.user_id = userData.id;
        //     req.session.username = userData.username;
        //     req.session.loggedIn = true;
            
        //     res.json({ user: userData, message: 'Logged in!'});
        // });
    })
});


router.post('/', (req,res) => {
    User.create({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
    })
    .then(userData => {
        req.session.save(() => {
            req.session.userId = userData.id;
            req.session.username = userData.username;
            req.session.loggedIn = true;

            res.json(userData);
        });
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});


router.post('/logout', withAuth, (req,res) => {
    if (req.session.loggedIn) {
        req.session.destroy(() => {
            res
            .status(204)
            .json({ message: 'Log out complete!' })
            .end();
        });
    } else {
        res.status(400).end();
    }
});

router.delete('/user/id', withAuth, (req,res) => {
    User.destroy({
        where: { 
            id: req.params.id
        },
    })
    .then((userData) => {
        if (!userData) {
            res.status(404).json({ message: 'No user found' });
            return;
        }
        res.json(userData);
    })
    .catch((err) => {
        console.log(err);
        res.status(500).json(err);
    });
});

module.exports = router;