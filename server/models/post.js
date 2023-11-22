"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Post extends Model {
    static associate(models) {
      this.belongsTo(models.User, { foreignKey: "UserId" });
    }
  }
  Post.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: "Please enter your name",
          },
          notEmpty: {
            msg: "Please enter your name",
          },
        },
      },
      description: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: "Please enter post description",
          },
          notEmpty: {
            msg: "Please enter post description",
          },
        },
      },
      publishDate: {
        type: DataTypes.DATE,
        defaultValue: new Date(),
      },
      bloodType: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: "Please enter your blood type",
          },
          notEmpty: {
            msg: "Please enter your blood type",
          },
        },
      },
      location: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: "Please enter your location",
          },
          notEmpty: {
            msg: "Please enter your location",
          },
        },
      },
      status: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: "Please specify the level of urgency",
          },
          notEmpty: {
            msg: "Please specify the level of urgency",
          },
        },
      },
      contact: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: "Please enter your contact",
          },
          notEmpty: {
            msg: "Please enter your contact",
          },
        },
      },
      postType: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: "Please specify post as DONOR or RECIPIENT",
          },
          notEmpty: {
            msg: "Please specify post as DONOR or RECIPIENT",
          },
        },
      },
      UserId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notNull: {
            msg: "Require User ID",
          },
          notEmpty: {
            msg: "Require User ID",
          },
        },
      },
    },
    {
      sequelize,
      modelName: "Post",
    }
  );
  Post.beforeCreate((instance) => {
    instance.publishDate = new Date();
  });
  return Post;
};
