import serverAuth from "@utils/serverAuth";
import { NextApiRequest, NextApiResponse } from "next";
import prisma from "@utils/prismadb";
const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== "GET") return res.status(405).end("bad requrest");
  try {
    await serverAuth(req, res);
    const movies = await prisma.movie.findMany();
    res.status(200).json(movies);
  } catch (error: any) {
    console.log(error);
    res.status(400).end(error.message);
  }
};
export default handler;
