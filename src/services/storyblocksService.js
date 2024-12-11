const storyblocksService = async (searchTerm) => {
    // Simulating Storyblocks API response
    return [
      {
        image_ID: `mock-${searchTerm}`,
        thumbnails: 'https://via.placeholder.com/150',
        preview: 'https://via.placeholder.com/600',
        title: `${searchTerm} (Storyblocks)`,
        source: 'Storyblocks',
        tags: [searchTerm],
      },
    ];
  };
  
module.exports = storyblocksService;
  
