const axios = require('axios')

const fetchData = async () => {
  const res = await axios.get('http://localhost:8000/books')

  console.log(res.data)
}

fetchData()