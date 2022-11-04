const Sequelize = require('sequelize');

const db = new Sequelize(
  `postgres://ntrmhirrqyaziy:de6ae94e360716dd1953b43511d617ebd128ac55455a4362990758c5a6b7c028@ec2-54-163-34-107.compute-1.amazonaws.com:5432/d1d2g94lf1ebju`,
  {
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
  }
);

db.authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  });

module.exports = db;
