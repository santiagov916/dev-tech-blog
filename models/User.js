const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const bcrypt = require('bcrypt');

// User class model
class User extends Model {

// check password before allowed access
    checkPassword(loginPw) {
        return bcrypt.compareSync(loginPw, this.password);
    }
}

// column setups for User model
User.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [4],
        },
    },
},
{
    hooks : {
        // make sure password is hashed with bcrypt before User creation
        beforeCreate: async (newUserData) => {
            newUserData.password = await bcrypt.hash(newUserData.password, 10);
            return newUserData;
        },
        beforeUpdate: async (updateUserData) => {
            updateUserData.password = await bcrypt.hash(updateUserData.password, 10);
            return updateUserData;
        }
    },
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'user'
    }
);

module.exports = User;