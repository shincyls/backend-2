const axios = require('axios');
require('dotenv').config();

const testStoryblocks = async () => {
  const API_KEY = process.env.STORYBLOCKS_API_KEY; // Your Storyblocks API key
  const query = 'spongebob'; // Replace with your search term
  const url = `https://api.storyblocks.com/api/v1/media/search?query=${query}&api_key=${API_KEY}`;

  try {
    const response = await axios.get(url);
    console.log('Response:', response.data);
  } catch (error) {
    console.error(
      'Error:',
      error.response ? error.response.data : error.message,
      url
    );
  }
};

testStoryblocks();