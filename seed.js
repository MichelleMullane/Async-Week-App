const { db, Item, User } = require("./server/db");

const seed = async () => {
  try {
    await db.sync({ force: true });
    console.log("db synced!");

    // Creating Users
    const users = await Promise.all([
      User.create({
        username: "cody",
        password: "123",
        firstName: "Cody",
        lastName: "Martin",
        email: "codym@email.com",
      }),
      User.create({
        username: "jimmie",
        password: "kfejk@*_",
        firstName: "Jimmie",
        lastName: "Kam",
        email: "jimmiek@email.com",
      }),
      User.create({
        username: "don",
        password: "ewedon",
        firstName: "Don",
        lastName: "Romer",
        email: "donr@email.com",
      }),
      User.create({
        username: "kevin",
        password: "kev09370",
        firstName: "Kevin",
        lastName: "Ryan",
        email: "kr@email.com",
      }),
      User.create({
        username: "john",
        password: "m4345@*_",
        firstName: "John",
        lastName: "Doe",
        email: "jd@email.com",
      }),
      User.create({
        username: "Mary",
        password: "mary",
        firstName: "mary",
        lastName: "Doe",
        email: "mary@email.com",
        isAdmin: true,
      }),
    ]);

    console.log(`seeded ${users.length} users`);

    // Placeholder bicycle item

    const items = await Promise.all([
      Item.create({
        brand: "bike brand",
        price: 500.0,
        size: "small",
      }),
    ]);

    console.log(`seeded ${items.length} items`);
    console.log(`seeded successfully`);

    return {
      users: {
        cody: users[0],
        jimmie: users[1],
        don: users[2],
        kevin: users[3],
        john: users[4],
        mary: users[5],
      },
      items: {
        placeholderItem: items[0],
      },
    };

    // Creating Users
    // const cody = await User.create({
    //   username: "cody",
    //   password: "123",
    //   firstName: "Cody",
    //   lastName: "Martin",
    //   email: "codym@email.com",
    //   isAdmin: false,
    // });

    // const jimmie = User.create({
    //   username: "jimmie",
    //   password: "kfejk@*_",
    //   firstName: "Jimmie",
    //   lastName: "Kam",
    //   email: "jimmiek@email.com",
    //   isAdmin: false,
    // });

    // const don = User.create({
    //   username: "don",
    //   password: "ewedon",
    //   firstName: "Don",
    //   lastName: "Romer",
    //   email: "donr@email.com",
    //   isAdmin: false,
    // });

    // const kevin = User.create({
    //   username: "kevin",
    //   password: "kev09370",
    //   firstName: "Kevin",
    //   lastName: "Ryan",
    //   email: "kr@email.com",
    //   isAdmin: false,
    // });

    // const john = User.create({
    //   username: "john",
    //   password: "m4345@*_",
    //   firstName: "John",
    //   lastName: "Doe",
    //   email: "jd@email.com",
    //   isAdmin: false,
    // });

    // const mary = User.create({
    //   username: "Mary",
    //   password: "mary",
    //   firstName: "mary",
    //   lastName: "Doe",
    //   email: "mary@email.com",
    //   isAdmin: true,
    // });

    // Placeholder bicycle item

    // const placeholder = await Item.create({
    //   brand: "bike brand",
    //   price: 55.3,
    //   size: "small",
    // });
  } catch (err) {
    console.log(err);
  }
};

async function runSeed() {
  console.log("seeding...");
  try {
    await seed();
  } catch (err) {
    console.error(err);
    process.exitCode = 1;
  } finally {
    console.log("closing db connection");
    await db.close();
    console.log("db connection closed");
  }
}

if (module === require.main) {
  runSeed();
}

// if (require.main === module) {
//   seed()
//     .then(() => {
//       console.log("Seeding success!");
//       db.close();
//     })
//     .catch((err) => {
//       console.error("Oh noes! Something went wrong!");
//       console.error(err);
//       db.close();
//     });
// }

module.exports = seed;
