const axios = require('axios');
require('dotenv').config();

const testLocal = async () => {
  const API_KEY = process.env.PIXABAY_API_KEY;
  const query = 'spongebob';
  const url = `http://localhost:3000?key=${API_KEY}&q=${query}`;

  try {
    const response = await axios.get(url);
  } catch (error) {
    console.log(API_KEY);
    console.log(query);
    console.error('Error:', error.response ? error.response.data : error.message);
  }
};

testLocal();
