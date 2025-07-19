import { Router } from 'express';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

const router = Router();
const SECRET_KEY = process.env.SECRET_KEY;

router.post('/login', (req, res) => {
  const { username, password } = req.body;

  if (username === process.env.LOGIN && password === process.env.PASSWORD) {
    const token = jwt.sign({ username }, SECRET_KEY, { expiresIn: '1h' });
    return res.status(200).json({ token });
  }

  res.status(401).send('Usuário ou senha inválidos');
});

export default router;
