// Rota para enviar um comentário
app.post('/comentarios', (req, res) => {
    const { nome, email, comentario } = req.body;
  
    // Simulando armazenamento do comentário (aqui você iria usar um banco de dados real)
    // Aqui, você pode adicionar a lógica para salvar o comentário em um banco de dados, como MongoDB, MySQL, etc.
    // Depois de salvar, você pode enviar uma resposta de sucesso.
    
    res.status(201).send('Comentário enviado com sucesso.');
  });
  
  // Rota para obter todos os comentários
  app.get('/comentarios', (req, res) => {
    // Aqui, você pode recuperar os comentários do banco de dados e enviá-los como uma resposta JSON.
    // Exemplo:
    // res.json(comentarios);
    
    // Por enquanto, vamos simular alguns dados de exemplo.
    const comentarios = [
      { nome: 'Usuário1', email: 'usuario1@example.com', comentario: 'Este é um comentário de exemplo.' },
      { nome: 'Usuário2', email: 'usuario2@example.com', comentario: 'Outro comentário de exemplo.' }
    ];
    
    res.json(comentarios);
  });
  