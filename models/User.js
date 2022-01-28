const { Model, Datatypes } = require('sequelize');
const sequelize = require('../config/connection');
const bcrypt = require('bcrypt');

class User extends Model {

    checkPassword(loginPw) {
        return bcrypt.compareSync(loginPw, this.password);
    }
}

User.init({
    id: {

    },
    username: {

    },
    email: {

    },
    password: {

    }
},
{
        sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'user'
});

module.exports = User;