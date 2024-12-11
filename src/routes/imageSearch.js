const express = require('express');
const router = express.Router();
const { fetchImages } = require('../services/imageSearchService');

// Endpoint to search images
router.get('/', async (req, res, next) => {
  
  const userQuery = req.query.q;
  if (!userQuery) {
    return res.status(400).json({ error: 'Search term is required' });
  }

  try {
    const results = await fetchImages(userQuery);
    res.json(results);
  } catch (err) {
    next(err);
  }

});

module.exports = router;