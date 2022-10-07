import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const Register = async (req: any, res: any) => {
  const { firstName, lastName, email, password } = req.body;

  if (!(firstName && lastName && email && password))
    return res
      .status(400)
      .json({ message: "All Input Field Required", success: false, data: {} });

  const alreadyExists = await prisma.user.findFirst({
    where: { email: email },
  });
  if (alreadyExists) {
    return res
      .status(400)
      .json({ message: "User Already Register", success: false, data: {} });
  }

  const users = await prisma.user.create({
    data: {
      firstName,
      lastName,
      email,
      password,
    },
  });

  const payload = {
    firstname: users.firstName,
    lastname: users.lastName,
    email: users.email,
  };

  return res
    .status(200)
    .json({ message: "Register Success", success: true, data: { payload } });
};

export const Login = async (req: any, res: any) => {
  const { email, password } = req.body;

  if (!(email && password))
    return res
      .status(400)
      .json({ message: "All Input Field Required", success: false, data: {} });

  const checkEmail = await prisma.user.findFirst({ where: { email: email } });

  if (!checkEmail) {
    return res
      .status(200)
      .json({ message: "Wrong Email", success: false, data: {} });
  }

  if (checkEmail.email === email && checkEmail.password === password) {
    return res
      .status(200)
      .json({ message: "Login Success", success: true, data: {} });
  } else {
    return res
      .status(400)
      .json({ message: "Please Check Credentials", success: false, data: {} });
  }
};
