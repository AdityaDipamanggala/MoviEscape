'use strict';
module.exports = (sequelize, DataTypes) => {
  const {Model} = sequelize.Sequelize
  class Movie extends Model{}
  Movie.init({
    title: {
      type: DataTypes.STRING,
      validate:{
        notEmpty:{
          args: true,
          message: "Please fill the title"
        }
      }
    },
    poster: {
      type: DataTypes.STRING,
      validate : {
        notEmpty : {
          args: true,
          message : `Fill the poster url`
        }
      }
    },
    description: {
      type: DataTypes.STRING,
      validate : {
        notEmpty : {
          args: true,
          message : `Fill the description`
        }
      }
    },
    video: {
      type: DataTypes.STRING,
      validate : {
        notEmpty : {
          args: true,
          message : `Fill the video url`
        }
      }
    },
  },{sequelize})
  Movie.associate = function(models) {
    Movie.hasMany(models.Review)
  };
  return Movie;
};