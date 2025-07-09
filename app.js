import express from 'express';
import cors from 'cors';
import jwt from 'jsonwebtoken';
import allData from './data.js';
import dotenv from 'dotenv';
dotenv.config();


const app = express();
const port = process.env.PORT || 3000;

// Chave secreta (melhor usar dotenv em produção)
const SECRET_KEY = process.env.SECRET_KEY;

app.use(cors());
app.use(express.json());

// Simulação de login
app.post('/login', (req, res) => {
  const { username, password } = req.body;

  // Autenticação fictícia
  if (username === 'admin' && password === '1234') {
    const token = jwt.sign({ username }, SECRET_KEY, { expiresIn: '1h' });
    return res.status(200).json({ token });
  }

  res.status(401).send('Usuário ou senha inválidos');
});

// Middleware para verificar o token
function authenticateToken(req, res, next) {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1]; // "Bearer <token>"

  if (!token) {
    return res.status(401).send('Token não fornecido');
  }

  jwt.verify(token, SECRET_KEY, (err, user) => {
    if (err) return res.status(403).send('Token inválido ou expirado');
    req.user = user;
    next();
  });
}

// --- Rotas protegidas com JWT ---
app.get('/', authenticateToken, (req, res) => {
  res.status(200).send(allData);
});

app.get('/name/:name', authenticateToken, (req, res) => {
  const nameParam = req.params.name.toLowerCase();
  const result = allData.filter(item => item.name.toLowerCase() === nameParam);

  if (result.length === 0) {
    return res.status(404).send(`Name "${nameParam}" not found.`);
  }

  res.status(200).send(result);
});

app.get('/day', authenticateToken, (req, res) => {
  const result = allData.filter(item => item.day === true);

  if (result.length === 0) {
    return res.status(404).send('No daytime locations found.');
  }

  res.status(200).send(result);
});

app.get('/night', authenticateToken, (req, res) => {
  const result = allData.filter(item => item.night === true);

  if (result.length === 0) {
    return res.status(404).send('No nighttime locations found.');
  }

  res.status(200).send(result);
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
