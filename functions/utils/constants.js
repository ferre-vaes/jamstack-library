const GET_BOOKS = `
query {
  allLinks {
    data {
      title
      author
      language_code
      isbn
      num_pages
    }
  }
}`

const URL_API = ''

module.exports = {
  GET_BOOKS,
  URL_API
}