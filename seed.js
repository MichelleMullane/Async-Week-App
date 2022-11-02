const { db, Item } = require('./server/db');

const seed = async () => {
  try {
    await db.sync({ force: true });

    const placeholder = await Item.create({
      brand: 'bike brand',
      price: 55.3,
      size: 'small',
    });
  } catch (err) {
    console.log(err);
  }
};

module.exports = seed;

if (require.main === module) {
  seed()
    .then(() => {
      console.log('Seeding success!');
      db.close();
    })
    .catch((err) => {
      console.error('Oh noes! Something went wrong!');
      console.error(err);
      db.close();
    });
}
