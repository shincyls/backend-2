const unsplashService = require('./unsplashService');
const pixabayService = require('./pixabayService');
const storyblocksService = require('./storyblocksService');

const fetchImages = async (searchTerm) => {
  const results = await Promise.allSettled([
    unsplashService(searchTerm),
    pixabayService(searchTerm),
    storyblocksService(searchTerm),
  ]);

  return results
    .filter(result => result.status === 'fulfilled')
    .flatMap(result => result.value);
};

module.exports = { fetchImages };
