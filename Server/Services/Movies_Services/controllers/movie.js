const {Movie} = require('../models')

class MovieController {
    static showAllMovie(req, res){
        Movie.findAll()
        .then(data => res.status(200).json({data: data}))
        .catch(err => res.status(500).json({message: 'Internal Server Error', err}))
    }

    static showMovieById(req, res){
        let id = req.params.id
        Movie.findByPk(id)
        .then(data => res.status(200).json({data: data}))
        .catch(err => res.status(500).json({message: 'Internal Server Error', err}))
    }

    static createMovie(req,res){
        let newMovie = {
            title: req.body.title,
            description: req.body.description,
            poster: req.body.poster,
            video: req.body.video
        }
        Movie.create(newMovie)
        .then(data => {res.status(201).json({message: `${newMovie.title} has been added to database`})})
        .catch(err => res.status(500).json({message: 'Internal Server Error', err}))
    }
    
    static updateMovie(req,res){
        let updatedMovie = {
            title: req.body.title,
            description: req.body.description,
            poster: req.body.poster,
            video: req.body.video
        }
        Movie.update(updatedMovie,{where:{id: req.params.id}})
        .then(data => {res.status(201).json({message: `${updatedMovie.title} has been updated`})})
        .catch(err => res.status(500).json({message: 'Internal Server Error', err}))
    }
    
    static deleteMovie(req,res){
        let movieId = req.query.id
        let arrMovieId = movieId.split(',') 
        let deletePromises = []   
        for(let i = 0 ; i <= arrMovieId.length-1; i++){
            deletePromises.push(Movie.destroy({where:{id : arrMovieId[i]}}))
        }
        Promise.all(deletePromises) 
        .then(data => res.status(200).json({message: `${arrMovieId.length} movies has been deleted`}))       
        .catch(err => res.status(500).json({message: 'Internal Server Error', err}))
    }
}

module.exports = MovieController