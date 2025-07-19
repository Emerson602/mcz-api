import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import customerRoutes from './src/routes/customer.routes.js';
import publicRoutes from './src/routes/public.routes.js';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(cors({
  origin: 'http://127.0.0.1:5500', 
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(express.json());

app.use('/customers', customerRoutes);
app.use('/', publicRoutes);

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
