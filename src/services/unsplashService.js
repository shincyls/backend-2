const axios = require('axios');

const unsplashService = async (searchTerm) => {
  const response = await axios.get('https://api.unsplash.com/search/photos', {
    params: { query: searchTerm },
    headers: { Authorization: `Client-ID ${process.env.UNSPLASH_ACCESS_KEY}` },
  });

  return response.data.results.map(image => ({
    image_ID: image.id,
    thumbnails: image.urls.thumb,
    preview: image.urls.full,
    title: image.description || 'No title',
    source: 'Unsplash',
    tags: image.tags?.map(tag => tag.title) || [],
  }));
};

module.exports = unsplashService;

