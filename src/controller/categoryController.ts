import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const addCategory = async (req: Request, res: Response) => {
  const { category_name } = req.body;

  if (!category_name)
    return res
      .status(400)
      .json({ message: "Category Name Required", success: false, data: {} });

  const category = await prisma.category.create({
    data: {
      name: category_name,
    },
  });

  return res.status(200).json({
    message: "Category Add Successfully",
    success: true,
    data: { category },
  });
};

// export const categoryOnPost = async (req: Request, res: Response) => {
//     const { postId, categoryId, assignedBy } = req.body;

//     if (!(postId && categoryId && assignedBy)) return res.status(400).json({ message: 'All Field Required', success: false, data: {} });

//     const categoryOnPost = await prisma.categoriesOnPosts.create({
//         data: {
//             postId: postId,
//             categoryId: categoryId,
//             assignedBy: assignedBy
//         }
//     });

//     return res.status(200).json({ message: 'Category On Post Add', success: true, data: { categoryOnPost } });
// }
