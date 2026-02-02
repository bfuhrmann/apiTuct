import bcrypt from "bcryptjs";
import { prisma } from "../prisma/client";
import { generateToken } from "../utils/jwt";

interface RegisterDTO {
  name: string;
  email: string;
  password: string;
  roleId: number;
}

interface LoginDTO {
  email: string;
  password: string;
}

export class AuthService {
  static async register(data: RegisterDTO) {
    const userExists = await prisma.users.findUnique({
      where: { email: data.email },
    });

    if (userExists) {
      throw new Error("Usuário já existe");
    }

    const hashedPassword = await bcrypt.hash(data.password, 10);

    const user = await prisma.users.create({
      data: {
        name: data.name,
        email: data.email,
        password: hashedPassword,
        roleId: data.roleId,
      },
      select: {
        id: true,
        name: true,
        email: true,
      },
    });

    return user;
  }

  static async login(data: LoginDTO) {
    const user = await prisma.users.findUnique({
      where: { email: data.email },
      include: { role: true },
    });

    if (!user) {
      throw new Error("Usuário ou senha inválidos");
    }

    const passwordMatch = await bcrypt.compare(
      data.password,
      user.password
    );

    if (!passwordMatch) {
      throw new Error("Usuário ou senha inválidos");
    }

    const token = generateToken({
      id: user.id,
      role: user.role.name,
    });

    return {
      token,
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role.name,
      },
    };
  }
}
