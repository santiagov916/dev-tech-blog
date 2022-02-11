const { Comment } = require('../models');

const commentData = [
    {
        body: 'Well done, good and faithful servant',

    },
    {
        body: 'Very well done, good and faithful servant. Excellent Job',

    },
    {
        body: 'Though I walk through the valley of the shadow of death..',
    },
    {
        body: 'Be still, and know that I am God.',

    },
    {
        body: 'Be angry and do not sin.',

    },
    {
        body: 'Whatsoever thing is pure, whatsoever thing is just..',

    },
    {
        body: 'Repent and be baptized everyone of you,..',

    },
    {
        body: 'Do not fear them, for the LORD your God shall fight for you.',

    },
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;