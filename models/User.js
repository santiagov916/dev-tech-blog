const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');

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
        autoIncrement: true,
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
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
        async beforeCreate(newUserData) {
            newUserData.password = await bcrypt.hash(newUserData.password, 10);
            return newUserData;
        },

        async beforeUpdate(updatedData) {
            updatedData.password = await bcrypt.hash(updatedData.password, 10);
            return updatedData;
        }
    },
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'user'
    }
);

module.exports = User;