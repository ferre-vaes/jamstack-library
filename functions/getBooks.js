const { GET_BOOKS } = require('./utils/linkQueries')
const sendQuery = require('./utils/sendQuery')
const formatRespone = require('./utils/formatResponse')

exports.handler = async (event) => {
  try {
    const res = await sendQuery(GET_BOOKS, {})
    const data = res.allBooks.data

    return formatRespone(200, data)
  } catch (error) {
    console.log(error)
    return formatRespone(500, {err: 'Something went wrong'})
  }
}
