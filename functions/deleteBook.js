const { DELETE_BOOK } = require('./utils/linkQueries')
const sendQuery = require('./utils/sendQuery')
const formatRespone = require('./utils/formatResponse')

exports.handler = async (event) => {
  const { id } = JSON.parse(event.body)
  const variables = { id }
  try {
    const { deleteBook } = await sendQuery(DELETE_BOOK, variables)

    return formatRespone(200, deleteBook)
  } catch (error) {
    console.log(error)
    return formatRespone(500, {msg: 'Something went wrong'})
  }
}