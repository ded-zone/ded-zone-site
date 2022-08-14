import { prisma } from "~/db.server";

export function createTitle(title: string) {
  return prisma.title.create({ data: { title } });
}

export function getAllTitles() {
  return prisma.title.findMany();
}

export async function getShuffledTitles() {
  const titles = await getAllTitles();
  return titles
    .map((title) => ({ title, seed: Math.random() }))
    .sort((a, b) => a.seed - b.seed)
    .map(({ title }) => title);
}
