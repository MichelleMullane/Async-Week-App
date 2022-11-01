const router = require('express').Router();
const { Item } = require('../db');

// GET /api/items
router.get('/', async (req, res, next) => {
  try {
    const allItems = await Item.findAll();
    res.send(allItems);
  } catch (error) {
    next(error);
  }
});

// POST /api/items
router.post('/', async (req, res, next) => {
  try {
    res.status(201).send(await Item.create(req.body));
  } catch (error) {
    next(error);
  }
});

module.exports = router;
