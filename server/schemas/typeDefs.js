// import the gql tagged template function
const { gql } = require('apollo-server-express');

// create our typeDefs
const typeDefs = gql`
    type User{
        _id: ID
        username: String
        email: String
        bookCount: Int
        savedBooks: [Book]
    }
    type Book{
        bookId: String
        authors: [String]
        title: String
        description: String
        image: String
        link: String
    }
    type Auth{
        token: ID!
        user: User
    }
    input BookInput{
        bookId: String!
        title: String!
        authors: [String]!
        description: String!
        image: String!
        link: String!
    }
    type Query{
        me: User
        users: [User]
    }
    type Mutation{
        addUser(username: String!, email: String!, password: String!): Auth
        login(email: String!, password: String!): Auth
        saveBook(input: BookInput!): User
        removeBook(bookId: String!): User
    }
`;

// export the typeDefs
module.exports = typeDefs;