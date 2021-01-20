const { CREATE_BOOK } = require('./utils/linkQueries')
const sendQuery = require('./utils/sendQuery')
const formatRespone = require('./utils/formatResponse')

exports.handler = async (event) => {
  const variables = JSON.parse(event.body)
  console.log(variables)
  try {
    const { createBook } = await sendQuery(CREATE_BOOK, variables)

    return formatRespone(200, createBook)
  } catch (error) {
    console.log(error)
    return formatRespone(500, {msg: 'Something went wrong'})
  }
}