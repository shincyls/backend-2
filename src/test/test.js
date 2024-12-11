const axios = require('axios');

const testPixabay = async () => {
  const API_KEY = process.env.PIXABAY_API_KEY; // Replace with your key
  const query = 'cat'; // Replace with your search term
  const url = `https://pixabay.com/api/?key=${API_KEY}&q=${query}`;

  try {
    const response = await axios.get(url);
    console.log('Response:', response.data);
  } catch (error) {
    console.error('Error:', error.response ? error.response.data : error.message, url);
  }
};

testPixabay();
