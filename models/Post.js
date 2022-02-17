// Import the elements we will need to build the Post model, 
// which includes the connection to MySQL we stored in connection.js
// as well as the Model and Datatypes from the Sequelize npm package

const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// Define the Post model by adding the following code:

class Post extends Model {}

// Now we will define the columns in the Post model, configure the naming conventions
// and pass the current connection instance to initialize the Post model.

Post.init(
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false
      },
      post_url: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          isURL: true
        }
      },
      user_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'user',
          key: 'id'
        }
      }
    },
    {
      sequelize,
      freezeTableName: true,
      underscored: true,
      modelName: 'post'
    }
  );

module.exports = Post;