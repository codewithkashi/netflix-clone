import serverAuth from "@utils/serverAuth";
import { NextApiRequest, NextApiResponse } from "next";
import prismadb from "@utils/prismadb";
import { without } from "lodash";
const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { currentUser } = await serverAuth(req, res);
    if (req.method === "POST") {
      const { movieId } = req.body;
      const foundMovie = await prismadb.movie.findUnique({
        where: {
          id: movieId,
        },
      });
      if (!foundMovie) return res.status(404).end("Invalid ID");
      const favourited = await prismadb.user.update({
        where: {
          email: currentUser?.email || "",
        },
        data: {
          favoriteIds: {
            push: movieId,
          },
        },
      });
      return res.status(200).json(favourited);
    }
    if (req.method === "DELETE") {
      const { movieId } = req.body;
      const foundMovie = await prismadb.movie.findUnique({
        where: {
          id: movieId,
        },
      });
      if (!foundMovie) return res.status(404).end("Invalid ID");
      const updatedUser = without(currentUser?.favoriteIds, movieId);
      const favourited = await prismadb.user.update({
        where: {
          email: currentUser?.email || "",
        },
        data: {
          favoriteIds: updatedUser,
        },
      });
      return res.status(200).json(favourited);
    }
    if (req.method === "GET") {
      const { currentUser } = await serverAuth(req, res);

      const favoritedMovies = await prismadb.movie.findMany({
        where: {
          id: {
            in: currentUser?.favoriteIds,
          },
        },
      });
      return res.status(200).json({ favoritedMovies });
    }
  } catch (error) {
    console.log(error);
    res.status(400).end();
  }
};

export default handler;
