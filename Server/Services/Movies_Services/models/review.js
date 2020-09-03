'use strict';
module.exports = (sequelize, DataTypes) => {
  const {Model} = sequelize.Sequelize
  class Review extends Model{}
  Review.init({
    MovieId: DataTypes.INTEGER,
    UserId: DataTypes.INTEGER,
    description: {
      type: DataTypes.STRING,
    },
    rating:  {
      type: DataTypes.FLOAT,
      validate : {
        notEmpty : {
          args: true,
          message: 'Please give rating to submit'
        }
      }
    }
  },{sequelize})
  Review.associate = function(models) {
    // associations can be defined here
  };
  return Review;
};