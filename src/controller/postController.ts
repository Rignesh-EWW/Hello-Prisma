import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const createPost = async (req: any, res: any) => {
  const { title, content, Id, assigned } = req.body;

  if (!(title && content && Id))
    return res
      .status(400)
      .json({ message: "ALl Field Required", success: false, data: {} });

  const posts = await prisma.post.create({
    data: {
      title: title,
      content: content,
      authorId: Id,
    },
  });

  return res
    .status(200)
    .json({ message: "Post Created", success: true, data: { posts } });
};
