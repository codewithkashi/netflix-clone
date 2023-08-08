import { NextApiResponse, NextApiRequest } from "next";
import prismadb from "@utils/prismadb";
import serverAuth from "@utils/serverAuth";
const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== "GET") return res.status(405).end("bad requrest");
  try {
    await serverAuth(req, res);
    const movieCount = await prismadb.movie.count();
    const randomIndex = Math.floor(Math.random() * movieCount);
    const randomMovies = await prismadb.movie.findMany({
      take: 1,
      skip: randomIndex,
    });

    return res.status(200).json(randomMovies[0]);
  } catch (error) {
    console.log(error);
    res.status(422).end("Internal server error");
  }
};

export default handler;
