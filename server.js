const express = require('express');
const path = require('path');

const app = express();

const PORT = process.env.PORT || 3004;

const sequelize = require('./config/connection');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(require('./controllers/'));

sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log(`PORT ${PORT}` + 'now open.'))
});
