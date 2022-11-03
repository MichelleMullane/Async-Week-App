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

// GET /api/items/:itemId
router.get('/:itemId', async (req, res, next) => {
  try {
    console.log(req.params);
    const item = await Item.findByPk(req.params.itemId);
    res.send(item);
  } catch (error) {
    next(error);
  }
});

// POST /api/items
router.post('/', async (req, res, next) => {
  try {
    console.log('add item post route', req.body);
    res.status(201).send(await Item.create(req.body));
  } catch (error) {
    next(error);
  }
});

// DELETE /api/items/:itemId
router.delete('/:itemId', async (req, res, next) => {
  try {
    const item = await Item.findByPk(req.params.itemId);
    item.destroy();
    res.send(item);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
