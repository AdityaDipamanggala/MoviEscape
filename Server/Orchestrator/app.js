const {ApolloServer, gql} = require('apollo-server')
const axios = requires('axios')

const typeDefs = gql`
    type User{
        _id: ID,
        email: String,
        username: String,
        password: String,
        role: String,
    }
    type Review{
        id: ID,
        UserID: Integer,
        MovieID: Integer,
        description: String,
        rating: Float
    }
    type FavMovie{
        _id: ID,
        title: String,
        description: String,
        poster: String,
        video: String
    }
    type Movie{
        id: ID,
        title: String,
        description: String,
        poster: String,
        video: String,
        review: [Review]
    }
    type Query{
        user(email: String, password: String): User,
        movies: [Movie],
        movie(id: ID): Movie,
    }
    type Mutation{
        addUser()
    }
`