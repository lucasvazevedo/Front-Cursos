# Script Tech

## Visão Geral do Projeto

O projeto consiste no desenvolvimento de um portal de cursos online, que permitirá aos usuários se inscreverem em cursos, acessarem materiais didáticos e acompanharem seu progresso. Além disso, será implementado um dashboard de administração para gerenciar cursos, usuários e conteúdo.

TODO: Processo de implantação e configuração do ambiente para desenvolvimento.
TODO: Flow de aceite de Merge Request configurado.
TODO: Flow de Deploy da página no Github Pages ou em outro ambiente.


---
# Requisitos Funcionais

- Cadastro de Usuário:
    - Os usuários devem poder se cadastrar no portal.
    - O cadastro deve incluir informações básicas, como nome, e-mail e senha.

- Gerenciamento de Cursos:
    - Os administradores devem poder adicionar, editar e excluir cursos.
    - Cada curso deve ter um título, descrição, instrutor, categoria e lista de módulos.

- Inscrição em Cursos:
    - Os usuários devem poder se inscrever em cursos disponíveis no portal.
    - Após a inscrição, os usuários devem ter acesso ao conteúdo do curso.

- Dashboard do Usuário:
    - Os usuários devem ter um painel onde possam ver os cursos em que estão inscritos e seu progresso em cada curso.

- Dashboard de Administração:
    - Os administradores devem ter acesso a um painel para gerenciar usuários, cursos e conteúdo.
    - O dashboard de administração deve incluir funcionalidades para adicionar, editar e excluir cursos e usuários.

## Requisitos Técnicos

- Tecnologias Utilizadas:
    - Frontend: HTML, CSS, JavaScript (Framework a ser decidido, ex: React.js)
    - Backend: Node.js (ou outra linguagem de sua escolha), Express.js (ou outro framework), MongoDB (ou outro banco de dados)
    - Autenticação: JWT (JSON Web Tokens) para autenticação de usuários

- Segurança:
    -Implementação de medidas de segurança, como proteção contra ataques de injeção de SQL e XSS (Cross-Site Scripting).

- Responsividade:
    - O portal deve ser responsivo, garantindo uma boa experiência do usuário em dispositivos móveis e desktop.

## Fluxo de Trabalho

- Planejamento:
    - Definir os requisitos detalhados do sistema.
    - Criar esboços da interface do usuário e diagramas de banco de dados.

- Desenvolvimento Frontend:
    - Criar a interface do usuário utilizando HTML, CSS e JavaScript.
    - Implementar a integração com o backend para recuperar e exibir dados dinâmicos.

- Desenvolvimento Backend:
    - Configurar o servidor utilizando Node.js e Express.js.
    - Implementar a lógica de negócios, incluindo autenticação de usuários e operações de CRUD para cursos e usuários.

- Integração de Banco de Dados:
    - Configurar e conectar o banco de dados (por exemplo, MongoDB).
    - Definir e implementar modelos de dados para cursos, usuários e outras entidades necessárias.

- Testes:
    - Realizar testes de unidade e integração para garantir o bom funcionamento do sistema.
    - Realizar testes de usabilidade para garantir uma boa experiência do usuário.

- Implantação:
    - Hospedar a aplicação em um servidor web (por exemplo, Heroku, AWS, etc.).
    - Configurar o ambiente de produção e garantir a escalabilidade e disponibilidade da aplicação.

