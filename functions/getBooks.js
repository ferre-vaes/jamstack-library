const { GET_BOOKS } = require('./utils/constants')
const sendQuery = require('./utils/sendQuery')

exports.handler = async (event) => {
  try {
    const res = await sendQuery(GET_BOOKS, {})
    const data = res.allLinks.data

    return {
      statusCode: 200,
      body: JSON.stringify(data)
    }
  } catch (error) {
    console.log(error)
    return {
      statusCode: 500,
      body: JSON.stringify({msg: 'Something went wrong'})
    }
  }
}
