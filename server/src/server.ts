import fastify from "fastify";
import { PrismaClient } from "@prisma/client";

const app = fastify();
const prisma = new PrismaClient();

app.get("/hello", () => {
  const users = prisma.user.findMany();

  return users;
});

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log(`🤬 server is running on port 3333`);
  });
