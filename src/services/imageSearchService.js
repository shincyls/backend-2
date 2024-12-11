const unsplashService = require('./unsplashService');
const pixabayService = require('./pixabayService');
// const storyblocksService = require('./storyblocksService'); // Basic $15 skip this service

const fetchImages = async (queryKey) => {
  const results = await Promise.allSettled([
    unsplashService(queryKey),
    pixabayService(queryKey),
    // storyblocksService(queryKey),
  ]);

  return results
    .filter(result => result.status === 'fulfilled')
    .flatMap(result => result.value);

};

module.exports = { fetchImages };
