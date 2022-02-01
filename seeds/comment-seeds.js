const { Comment } = require('../models');

const commentData = [
    {
        comment_text: 'Well done, good and faithful servant',
        user_id: 1,
        post_id: 3
    },
    {
        comment_text: 'Very well done, good and faithful servant. Excellent Job',
        user_id: 2,
        post_id: 1
    },
    {
        comment_text: 'Though I walk through the valley of the shadow of death..',
        user_id: 3,
        post_id: 3
    },
    {
        comment_text: 'Be still, and know that I am God.',
        user_id: 4,
        post_id: 3
    },
    {
        comment_text: 'Be angry and do not sin.',
        user_id: 5,
        post_id: 3
    },
    {
        comment_text: 'Whatsoever thing is pure, whatsoever thing is just..',
        user_id: 3,
        post_id: 3
    },
    {
        comment_text: 'Repent and be baptized everyone of you,..',
        user_id: 2,
        post_id: 1
    },
    {
        comment_text: 'Do not fear them, for the LORD your God shall fight for you.',
        user_id: 4,
        post_id: 3
    },
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;