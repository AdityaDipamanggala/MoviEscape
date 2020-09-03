const {Review} = require('../models')

class ReviewController{

    static showAllReview(req, res){
        Review.findAll()
        .then(data => res.status(200).json({data: data}))
        .catch(err => res.status(500).json({message: 'Internal Server Error', err}))
    }

    static showReviewById(req, res){
        let id = req.params.id
        Review.findByPk(id)
        .then(data => res.status(200).json({data: data}))
        .catch(err => res.status(500).json({message: 'Internal Server Error', err}))
    }
    
    static createReview(req, res){
        let newReview = {
            UserId : req.userData.id,
            MovieId : req.body.id,
            description : req.body.description,
            rating : req.body.rating
        }
        Review.create(newReview)
        .then(data => res.status(201).json({message: 'Review has been submited'}))
        .catch(err => res.status(500).json({message: 'Internal Server Error', err}))
    }

    static updateReview(req, res){
        let id = req.params.id
        let updatedReview = {
            UserId : req.userData.id,
            MovieId : req.body.id,
            description : req.body.description,
            rating : req.body.rating
        }
        Review.update(updatedReview,{where:{id: id}})
        .then(data => res.status(201).json({message: 'Review has been edited'}))
        .catch(err => res.status(500).json({message: 'Internal Server Error', err}))
    }

    static deleteReview(req, res){
        Review.destroy({where: {id: req.params.id}})
    }

}

module.exports = ReviewController