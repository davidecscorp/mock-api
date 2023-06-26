const axios = require('axios')

const fetchData = async () => {
  const res = await axios.get('https://raw.githubusercontent.com/davidecscorp/mock-api/master/books2.json')

  console.log(res.data)
}

fetchData()