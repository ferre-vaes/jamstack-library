const GET_BOOKS = `
query {
  allBooks {
    data {
      _id
      title
      author
      language_code
      isbn
      num_pages
    }
  }
}`

const CREATE_BOOK = `
mutation ($title: String!,$author: String!,$average_rating: Float!,$isbn: String!,$language_code: String!,$num_pages: Int!) {
  createBook(data: {title: $title, author: $author, average_rating: $average_rating, isbn: $isbn, language_code: $language_code,num_pages: $num_pages}) {
    _id
    title
    author
  }
}
`;

const UPDATE_BOOK = `
mutation ($id: ID!,$title: String!,$author: String!,$average_rating: Float!,$isbn: String!,$language_code: String!,$num_pages: Int!) {
  updateBook(id: $id, data: {title: $title, author: $author, average_rating: $average_rating, isbn: $isbn, language_code: $language_code,num_pages: $num_pages}) {
    _id
    title
    author
  }
}
`;

const DELETE_BOOK = `
mutation ($id: ID!) {
  deleteBook(id: $id) {
    _id
  }
}
`;

module.exports = {
  GET_BOOKS,
  CREATE_BOOK,
  UPDATE_BOOK,
  DELETE_BOOK
}