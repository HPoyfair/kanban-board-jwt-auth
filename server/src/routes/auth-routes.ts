import { Router, Request, Response } from 'express';
import jwt from 'jsonwebtoken';

export const login = async (req: Request, res: Response) => {
  // TODO: If the user exists and the password is correct, return a JWT token

  const { username, password } = req.body;

  // ✅ TEMP: Hardcoded user for testing only
  if (username === 'admin' && password === 'password') {
    const token = jwt.sign({ username }, process.env.JWT_SECRET!, {
      expiresIn: '1h'
    });
    return res.json({ token });
  }

  return res.status(401).json({ message: 'Invalid credentials' });
};

const router = Router();

router.post('/login', login);

export default router;
