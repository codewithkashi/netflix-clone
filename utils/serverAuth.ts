import { NextApiRequest, NextApiResponse } from "next";
import { getServerSession } from "next-auth";

import prismadb from "@utils/prismadb";
import { authOptions } from "@/pages/api/auth/[...nextauth]";

const serverAuth = async (req: NextApiRequest, res: NextApiResponse) => {
  const session = await getServerSession(req, res, authOptions);

  if (!session?.user?.email) {
    res.status(404).end("Not signed in");
  }

  const currentUser = await prismadb.user.findUnique({
    where: {
      email: session?.user?.email || "",
    },
  });

  if (!currentUser) {
    res.status(404).end("Not signed in");
  }

  return { currentUser };
};

export default serverAuth;
