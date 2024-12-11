const axios = require('axios');

const storyblocksService = async (queryKey) => {
  try {
    const response = await axios.get('https://api.storyblocks.com/api/v1/media/search', {
      params: { query: queryKey, api_key: process.env.STORYBLOCKS_API_KEY },
    });

    return response.data.data.map(media => ({
      media_ID: media.id,
      thumbnail: media.thumbnail_url || "",
      preview: media.preview_url || "",
      title: media.title || '',
      source: 'Storyblocks',
      tags: media.tags || "",
    }));
  } catch (error) {
    console.error('Error:', error.response ? error.response.data : error.message);
    throw error;
  }
};

module.exports = storyblocksService;
