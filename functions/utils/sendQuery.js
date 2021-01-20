const axios = require('axios')
require('dotenv').config()
const url = 'https://graphql.fauna.com/graphql'

module.exports = async (query, variables) => { 
  console.log(variables)
  console.log(query)
  const { 
    data: {
      data , errors
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

  if(errors) {
    console.log(errors)
    throw new Error(errors[0].message)
  }
  console.log(data)
  return data
}