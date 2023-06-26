const axios = require('axios')

const fetchData = async () => {
  const res = await axios.get('https://raw.githubusercontent.com/davidecscorp/mock-api/master/books.json')

  console.log(res.data)
}

fetchData()