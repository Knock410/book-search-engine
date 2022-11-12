import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const SAVE_BOOK = gql`
  mutation saveBook($data: BookInput) {
    saveBook(input: $data ) {
        _id: ID
        username: String
        email: String
        bookCount: Int
        savedBooks: [Book]
    }
  }
`;



export const REMOVE_BOOK= gql`
  mutation removeBook($id: ID!) {
    removeFriend(bookId: $id) {
        _id: ID
        username: String
        email: String
        bookCount: Int
        savedBooks: [Book]
    }
  }
`;