const axios = require('axios');

const pixabayService = async (queryKey) => {

  const response = await axios.get('https://pixabay.com/api/', {
    params: { q: queryKey, key: process.env.PIXABAY_API_KEY },
  });

  return response.data.hits.map(image => ({
    image_ID: image.id,
    thumbnails: image.previewURL,
    preview: image.largeImageURL,
    title: image.tags,
    source: 'Pixabay',
    tags: image.tags.split(', '),
  }));

};

module.exports = pixabayService;

