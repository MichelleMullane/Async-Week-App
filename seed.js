const { db, Item, User } = require("./server/db");

const seed = async () => {
  try {
    await db.sync({ force: true });
    console.log("db synced!");

    // Creating Users
    const cody = await User.create({
      username: "cody",
      password: "123",
      firstName: "Cody",
      lastName: "Martin",
      email: "codym@email.com",
      isAdmin: false,
    });

    const jimmie = User.create({
      username: "jimmie",
      password: "kfejk@*_",
      firstName: "Jimmie",
      lastName: "Kam",
      email: "jimmiek@email.com",
      isAdmin: false,
    });

    const don = User.create({
      username: "don",
      password: "ewedon",
      firstName: "Don",
      lastName: "Romer",
      email: "donr@email.com",
      isAdmin: false,
    });

    const kevin = User.create({
      username: "kevin",
      password: "kev09370",
      firstName: "Kevin",
      lastName: "Ryan",
      email: "kr@email.com",
      isAdmin: false,
    });

    const john = User.create({
      username: "john",
      password: "m4345@*_",
      firstName: "John",
      lastName: "Doe",
      email: "jd@email.com",
      isAdmin: false,
    });

    const mary = User.create({
      username: "Mary",
      password: "mary",
      firstName: "mary",
      lastName: "Doe",
      email: "mary@email.com",
      isAdmin: true,
    });

    // Placeholder bicycle item
    const placeholder = await Item.create({
      brand: "bike brand",
      price: 55.3,
      size: "small",
    });
  } catch (err) {
    console.log(err);
  }
};

module.exports = seed;

if (require.main === module) {
  seed()
    .then(() => {
      console.log("Seeding success!");
      db.close();
    })
    .catch((err) => {
      console.error("Oh noes! Something went wrong!");
      console.error(err);
      db.close();
    });
}
