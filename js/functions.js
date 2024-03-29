const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Middleware para analisar corpos de solicitação
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Dados simulados de usuários cadastrados
const users = [
  { email: 'usuario1@example.com', senha: 'senha1' },
  { email: 'usuario2@example.com', senha: 'senha2' }
];

// Dados simulados de comentários
let comentarios = [];

// Rota para cadastro de novo usuário
app.post('/cadastro', (req, res) => {
  const { nome, email, senha, confirmar_senha } = req.body;

  // Validação simples de senha
  if (senha !== confirmar_senha) {
    return res.status(400).send('As senhas não coincidem.');
  }

  // Simulando armazenamento do novo usuário (aqui você iria usar um banco de dados real)
  users.push({ email, senha });

  res.status(201).send('Usuário cadastrado com sucesso.');
});

// Rota para login de usuário
app.post('/login', (req, res) => {
  const { email, senha } = req.body;

  // Verificar se o usuário existe e a senha está correta
  const user = users.find(user => user.email === email && user.senha === senha);
  if (!user) {
    return res.status(401).send('Credenciais inválidas.');
  }

  res.status(200).send('Login bem-sucedido.');
});

// Rota para enviar um comentário
app.post('/comentarios', (req, res) => {
  const { nome, email, comentario } = req.body;

  // Simulando armazenamento do comentário (aqui você iria usar um banco de dados real)
  comentarios.push({ nome, email, comentario });

  res.status(201).send('Comentário enviado com sucesso.');
});

// Rota para obter todos os comentários
app.get('/comentarios', (req, res) => {
  res.json(comentarios);
});

// Iniciar o servidor
app.listen(port, () => {
  console.log(`Servidor iniciado na porta ${port}`);
});
