
# 🌴 Explore MCZ API

API RESTful desenvolvida com **Node.js** e **Express** que fornece informações sobre locais para visitar em **Maceió (AL)**. A aplicação é protegida por autenticação JWT e atualmente oferece funcionalidades de login e listagem de locais cadastrados para frequentar.

---

## 🧰 Tecnologias Utilizadas

- Node.js (ES Modules)
- Express
- Prisma ORM
- JWT (jsonwebtoken)
- Dotenv
- Cors
- Nodemon (dev)

---

## ✅ Requisitos

- Node.js v16+
- npm (gerenciador de pacotes)

---

## ⚙️ Instalação

Instale as dependências com:

```bash
npm install
```

---

## ▶️ Execução

Para iniciar o servidor em modo de desenvolvimento:

```bash
npm run dev
```

---

## 🔐 Autenticação

A API utiliza **JWT** para proteger as rotas privadas.

### Login

**POST** `/login`

Envie no corpo da requisição:

```json
{
  "username": "admin",
  "password": "suasenha"
}
```

Se as credenciais estiverem corretas, o servidor retorna:

```json
{
  "token": "seu_token_jwt"
}
```

Utilize esse token no header `Authorization` das requisições protegidas:

```
Authorization: Bearer seu_token_jwt
```

---

## 📡 Endpoints Disponíveis

### 🔓 Pública

| Método | Rota     | Autenticação | Descrição                  |
|--------|----------|---------------|----------------------------|
| POST   | `/login` | ❌            | Gera um token de acesso    |

### 🔐 Protegida

| Método | Rota         | Autenticação | Descrição                                  |
|--------|--------------|--------------|--------------------------------------------|
| GET    | `/customers` | ✅            | Lista todos os locais cadastrados          |

---

## 🧪 Variáveis de Ambiente

Crie um arquivo `.env` na raiz com:

```
PORT=3000
SECRET_KEY=sua_chave_secreta
LOGIN=admin
PASSWORD=senha_segura
```

---

## 🗂️ Estrutura do Projeto

```
├── app.js
├── .env
├── generated
├── node_modules
├── package.json
├── package-lock.json
├── src
│   ├── controllers
│   ├── middlewares
│   ├── models
│   ├── prisma
│   ├── routes
│   └── useCases
└── README.md
```

---

## 📌 Descrição Resumida

Esta API tem como propósito **fornecer dados de lugares em Maceió** — como bares, pontos turísticos e estabelecimentos — permitindo que usuários autenticados consultem sugestões de locais para visitar.

---

## 📝 Licença

Este projeto está sob a licença ISC.
