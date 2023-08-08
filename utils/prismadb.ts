import { PrismaClient } from "@prisma/client";
let prisma!: PrismaClient;
const initializePrisma = () => {
  if (!prisma) {
    prisma = new PrismaClient();
  }
};

initializePrisma();

export default prisma;
