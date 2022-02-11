const { Post } = require('../models');

const postData = [
    {
        title: 'Get a scripture for any occassion!',
        body: 'Works!'

    },
    {
        title: 'New Software developed to know what bible study you need!',
        body: 'Works!'


    },
    {
        title: 'How to find a church that`s for you!',
        body: 'Works!'


    },
    {
        title: 'Is the preacher sticking to the bible?',
        body: 'Works!'


    },
    {
        title: 'Bible quizzes and review!',
        body: 'Works!'


    },
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;