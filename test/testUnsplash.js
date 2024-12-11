const axios = require('axios');
require('dotenv').config();

const testUnsplash = async () => {
  const API_KEY = process.env.UNSPLASH_ACCESS_KEY; // Make sure this is your Unsplash access key
  const query = 'spongebob';
  const url = `https://api.unsplash.com/search/photos?client_id=${API_KEY}&query=${query}`;

  try {
    const response = await axios.get(url);
    console.log('Response:', response.data);
  } catch (error) {
    console.error('Error:', error.response ? error.response.data : error.message, url);
  }
};

testUnsplash();