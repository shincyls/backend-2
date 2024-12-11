const axios = require('axios');

const testLocal = async () => {
  const query = 'spongebob';
  const url = `http://localhost:3000/api/images?q=${query}`;
  try {
    const response = await axios.get(url);
    // Log the response data
    console.log('Success:', response.data);
  } catch (error) {
    console.error('Error:', error.response ? error.response.data : error.message);
  }
};

testLocal();