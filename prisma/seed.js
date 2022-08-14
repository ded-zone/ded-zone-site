const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function seed() {
  const titles = [
    "Software Engineer",
    "Product Architect",
    "Code Monkey",
    "Lead Developer",
    "Bug Squasher",
    "Web Ninja",
  ];

  await Promise.all(
    titles.map((title) => prisma.title.upsert({ data: { title } }))
  );

  console.log(`Database has been seeded. 🌱`);
}

seed()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
