import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const createProfile = async (req: Request, res: Response) => {
  const {
    id,
  }: {
    id: number;
  } = req.body;

  console.log(id, "user");

  if (!id)
    return res
      .status(400)
      .json({ message: "user ID Required", success: false, data: {} });

  const userProfile = await prisma.profile.create({
    data: {
      userId: id,
    },
  });

  return res
    .status(200)
    .json({ message: "Profile Created", success: true, data: { userProfile } });
};
