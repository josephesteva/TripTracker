const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient();

const bcrypt = require("bcrypt");

async function seed() {
  const bob = await prisma.user.create({
    data: {
      username: "bob",
      password: await bcrypt.hash("123", 5),
    },
  });

  const jill = await prisma.user.create({
    data: {
      username: "jill",
      password: await bcrypt.hash("123", 5),
    },
  });

  const sarah = await prisma.user.create({
    data: {
      username: "sarah",
      password: await bcrypt.hash("123", 5),
    },
  })
};

seed()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });