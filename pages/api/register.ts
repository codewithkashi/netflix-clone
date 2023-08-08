import { NextApiRequest, NextApiResponse } from "next";
import prismadb from "@utils/prismadb";
import bcrypt from "bcrypt";
const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== "POST") return res.status(405).end("bad request");

  try {
    const { name, email, password } = req.body;
    const user = await prismadb.user.findUnique({
      where: {
        email,
      },
    });
    if (user) {
      return res.status(422).end("Email already taken");
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await prismadb.user.create({
      data: {
        name,
        email,
        hashedPassword,
        image: "",
        emailVerified: new Date(Date.now()),
      },
    });
    if (newUser) {
      return res.status(201).json({
        success: true,
        message: "Account created",
      });
    }
  } catch (error) {
    console.log(error);
    return res.status(400).end("Internal server error");
  }
};

export default handler;
