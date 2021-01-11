const axios = require('axios')
require('dotenv').config()
const url = 'https://graphql.fauna.com/graphql'

module.exports = async (query, variables) => { 
  const { 
    data: {
      data , error
    } 
  } = await axios({
    url,
    method: 'POST',
    headers: {
      Authorization: `Bearer ${process.env.FAUNA_DB_KEY}`
    },
    data: {
      query,
      variables
    }
  })

  if(error) {
    console.log(error)
    throw new Error('Something went wrong')
  }

  return data
}