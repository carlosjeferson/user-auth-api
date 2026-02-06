
# 🚀 Learn Backend – Gerenciamento de Usuários & Autenticação

Este projeto consiste em uma **API RESTful** para gerenciamento de usuários e autenticação, desenvolvida com foco em **boas práticas de backend, escalabilidade, segurança e organização de código**.

A aplicação foi totalmente migrada de **JavaScript para TypeScript**, garantindo tipagem forte em todas as camadas (**Controllers, Services e Middlewares**), além de validação de dados, autenticação JWT e testes automatizados.

---

## 📌 Funcionalidades

- Autenticação com **JWT**
- Controle de acesso por perfil (**Admin / User – RBAC**)
- CRUD completo de usuários
- Validação de dados com **Zod**
- Paginação e filtros de busca
- Tratamento global de erros
- Testes automatizados de integração

---

## 🛠️ Tecnologias e Ferramentas

- **Linguagem:** [TypeScript](https://www.typescriptlang.org/) (Node.js)
- **Framework:** [Express](https://expressjs.com/)
- **ORM:** [Prisma](https://www.prisma.io/)
- **Banco de Dados:** [MongoDB Atlas](https://www.mongodb.com/atlas)
- **Validação:** [Zod](https://zod.dev/)
- **Testes:** [Vitest](https://vitest.dev/) & [Supertest](https://github.com/ladjs/supertest)
- **Segurança:** JWT & Bcrypt

---

## 🏗️ Arquitetura e Padrões

A aplicação segue uma **arquitetura em camadas**, facilitando manutenção, testes e escalabilidade:

- **Controllers:** Recebem as requisições HTTP, validam dados com Zod e retornam as respostas.
- **Services:** Contêm toda a lógica de negócio e acesso ao banco de dados via Prisma.
- **Middlewares:** Responsáveis por autenticação JWT, autorização por perfil e tratamento de erros.
- **Tratamento de Erros:** Implementado com a classe customizada `AppError` e middleware global.

---

## 📸 Documentação (Swagger)

### Exemplo da documentação da API
![Documentação Swagger da API](./docs/swagger-api.png)

![Schema Swagger da API](./docs/schema-api.png)

A API é documentada utilizando o padrão **OpenAPI 3.0**, permitindo visualizar e testar todos os endpoints.

Inclui:
- **Autenticação:** Login e rota de perfil (`/me`)
- **Usuários:** CRUD completo com paginação e filtros

> A documentação pode ser acessada após subir o projeto em:
```

[http://localhost:3000/api-docs](http://localhost:3000/api-docs)

````




---

## 🚀 Como Executar o Projeto

### 1. Clone o repositório
```bash
git clone <url-do-seu-repositorio>
cd learn-backend
````

---

### 2. Instale as dependências

```bash
npm install
```

---

### 3. Configure as variáveis de ambiente

Crie um arquivo `.env` na raiz do projeto com base no `.env.example`:

```env
DATABASE_URL="mongodb+srv://..."
JWT_SECRET="sua_chave_secreta"
```

---

### 4. Prepare o banco de dados

Gere o client do Prisma e popule o banco com dados iniciais:

```bash
npx prisma generate
npm run seed
```

---

### 5. Execute a aplicação

#### Ambiente de desenvolvimento

```bash
npm run dev
```

#### Ambiente de produção

```bash
npm run build
npm start
```

---

## 🧪 Testes Automatizados

O projeto conta com **testes de integração** que cobrem o fluxo de autenticação e o CRUD de usuários, garantindo que as regras de negócio e segurança funcionem corretamente.

Para executar os testes:

```bash
npm test
```

### Execução dos testes
![Testes automatizados passando](./docs/tests.png)

---

## 📜 Scripts Disponíveis

* `npm run dev` → Inicia o servidor em modo de desenvolvimento
* `npm run build` → Compila o projeto TypeScript para a pasta `/dist`
* `npm start` → Executa a aplicação compilada
* `npm test` → Executa a suíte de testes automatizados

---



## 👤 Autor

**Carlos Jeferson Jacinto da Silva**
Estudante de Sistemas de Informação – Universidade Federal do Ceará (UFC)

Focado em desenvolvimento **Backend** e boas práticas de engenharia de software.
