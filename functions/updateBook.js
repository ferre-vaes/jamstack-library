const { UPDATE_BOOK } = require('./utils/linkQueries')
const sendQuery = require('./utils/sendQuery')
const formatRespone = require('./utils/formatResponse')

exports.handler = async (event) => {
  const { id, title, author, average_rating, isbn, language_code, num_pages } = JSON.parse(event.body)
  const variables = { id, title, author, average_rating, isbn, language_code, num_pages } 
  console.log(variables)
  try {
    const { updateBook } = await sendQuery(UPDATE_BOOK, variables)

    return formatRespone(200, updateBook)
  } catch (error) {
    console.log(error)
    return formatRespone(500, {msg: 'Something went wrong'})
  }
}