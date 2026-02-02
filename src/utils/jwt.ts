import jwt from "jsonwebtoken";

export function generateToken(payload: {
  id: number;
  role: string;
}) {
  return jwt.sign(
    {
      sub: payload.id,
      role: payload.role,
    },
    process.env.JWT_SECRET!,
    {
      expiresIn: "1d",
    }
  );
}
