// Importando as dependências necessárias
const express = require('express');
const bodyParser = require('body-parser');

// Inicializando o aplicativo Express
const app = express();
const port = 3000;

// Middleware para analisar corpos de solicitação
app.use(bodyParser.urlencoded({ extended: true }));

// Dados simulados de usuários cadastrados
const users = [];

// Rota para cadastro de novo usuário
app.post('/cadastro', (req, res) => {
  const { nome, email, senha, confirmar_senha } = req.body;

  // Validação simples de senha
  if (senha !== confirmar_senha) {
    return res.status(400).send('As senhas não coincidem.');
  }

  // Verificar se o email já está em uso
  if (users.some(user => user.email === email)) {
    return res.status(400).send('Este email já está em uso.');
  }

  // Simulando armazenamento do novo usuário (aqui você iria usar um banco de dados real)
  users.push({ nome, email, senha });

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

// Iniciar o servidor
app.listen(port, () => {
  console.log(`Servidor iniciado na porta ${port}`);
});
