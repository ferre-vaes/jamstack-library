const { UPDATE_BOOK } = require('./utils/linkQueries')
const sendQuery = require('./utils/sendQuery')
const formatRespone = require('./utils/formatResponse')

exports.handler = async (event) => {
  const variables = JSON.parse(event.body)
  console.log(variables)
  try {
    const { updateBook } = await sendQuery(UPDATE_BOOK, variables)

    return formatRespone(200, updateBook)
  } catch (error) {
    console.log(error)
    return formatRespone(500, {msg: 'Something went wrong'})
  }
}