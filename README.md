# 📦 Explore MCZ API

API RESTful feita com **Node.js** e **Express**, protegida por autenticação JWT. Fornece rotas para consultar locais disponíveis durante o dia, noite e busca por nome.

---

## 🧰 Tecnologias Utilizadas

- Node.js (com suporte a ES Modules)
- Express
- JWT (jsonwebtoken)
- CORS
- Dotenv
- Nodemon (dev)

---

## 🧾 Requisitos

- ✅ Node.js (versão 16 ou superior recomendada)
- ✅ npm (gerenciador de pacotes do Node)

---

## ⚙️ Instalação Rápida

Instale todas as dependências com o comando:

```bash
npm install
```

---

## 📦 Instalação Manual (opcional)

### Dependências principais:

```bash
npm install express cors dotenv jsonwebtoken
```

### Dependência de desenvolvimento (recarregamento automático):

```bash
npm install --save-dev nodemon
```

---

## ▶️ Execução

Para iniciar a aplicação com recarregamento automático via nodemon:

```bash
npm run dev
```

---

## 🔐 Autenticação

Esta API exige autenticação com JWT para acessar as rotas protegidas.

### Login

**POST /login**

Corpo da requisição:

```json
{
  "username": "Usuario",
  "password": "Senha"
}
```

Resposta:

```json
{
  "token": "seu_token_jwt"
}
```

Use o token no header das requisições seguintes:

```
Authorization: Bearer seu_token_jwt
```

---

## 📡 Endpoints

| Método | Rota            | Autenticado | Descrição                                  |
|--------|------------------|-------------|--------------------------------------------|
| POST   | `/login`         | ❌          | Retorna token JWT                          |
| GET    | `/`              | ✅          | Retorna todos os dados                     |
| GET    | `/name/:name`    | ✅          | Filtra dados pelo nome                     |
| GET    | `/day`           | ✅          | Retorna apenas locais diurnos              |
| GET    | `/night`         | ✅          | Retorna apenas locais noturnos             |

---

## 📁 Estrutura Esperada

```
├── app.js
├── data.js
├── .env
├── .gitignore
├── package.json
└── README.md
```

---

## 🧪 Arquivo `.env` (exemplo)

Crie um arquivo `.env` na raiz do projeto com:

```
SECRET_KEY=sua_chave_secreta
PORT=3000
```

---

## 📝 Licença

Este projeto está sob a licença ISC.
