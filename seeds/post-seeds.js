const { Post } = require('../models');

const postData = [
    {
        title: 'Get a scripture for any occassion!',
        post_url: 'urlforscripture',
        user_id: 1,
    },
    {
        title: 'New Software developed to know what bible study you need!',
        post_url: 'urlforbiblestudy',
        user_id: 1,
    },
    {
        title: 'How to find a church that`s for you!',
        post_url: 'urlforchurchfinding',
        user_id: 1,
    },
    {
        title: 'Is the pastor sticking to the bible?',
        post_url: 'urlforpastorpath',
        user_id: 1,
    },
    {
        title: 'Bible quizzes and review!',
        post_url: 'urlforquizes',
        user_id: 1,
    },
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;