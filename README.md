# 🚀 Learn Backend – API de Usuários & Autenticação

API REST desenvolvida com **Node.js e TypeScript**, focada em **boas práticas de backend**, segurança, organização de código e padrões utilizados no mercado.

O projeto implementa um sistema completo de **gerenciamento de usuários**, com autenticação JWT, controle de acesso por perfil, validação de dados e testes automatizados.  
Toda a aplicação foi migrada de **JavaScript para TypeScript**, garantindo tipagem forte em todas as camadas.

---

## 📌 Funcionalidades

- Autenticação com **JWT**
- Controle de acesso por perfil (**RBAC – Admin / User**)
- CRUD completo de usuários
- Validação de dados com **Zod**
- Paginação e filtros de busca
- Tratamento global de erros
- Testes automatizados de integração
- Seed para popular o banco de dados

---

## 🛠️ Tecnologias Utilizadas

- **Node.js**
- **TypeScript**
- **Express**
- **Prisma ORM**
- **MongoDB Atlas**
- **Zod**
- **JWT**
- **Bcrypt**
- **Vitest**
- **Supertest**

---

## 🏗️ Arquitetura

A aplicação segue uma **arquitetura em camadas**, facilitando manutenção, testes e escalabilidade:

- **Controllers**  
  Responsáveis por receber as requisições HTTP, validar dados e retornar respostas.

- **Services**  
  Contêm toda a lógica de negócio e comunicação com o banco de dados via Prisma.

- **Middlewares**  
  Autenticação JWT, autorização por perfil e tratamento global de erros.

- **Tratamento de Erros**  
  Centralizado com a classe customizada `AppError`.

---

## 📄 Documentação da API (Swagger)

A API é documentada utilizando **OpenAPI 3.0 (Swagger)**, permitindo testar todos os endpoints diretamente pelo navegador.

Após subir a aplicação, a documentação estará disponível em:

```

[http://localhost:3000/api-docs](http://localhost:3000/api-docs)

````

### Exemplos:

![Swagger - Endpoints](./docs/swagger-api.png)
![Swagger - Schemas](./docs/schema-api.png)

---

## 🚀 Como Executar o Projeto

### 1️⃣ Clone o repositório
```bash
git clone <url-do-repositorio>
cd learn-backend
````

### 2️⃣ Instale as dependências

```bash
npm install
```

### 3️⃣ Configure as variáveis de ambiente

Crie um arquivo `.env` na raiz do projeto:

```env
DATABASE_URL="mongodb+srv://..."
JWT_SECRET="sua_chave_secreta"
```

### 4️⃣ Prepare o banco de dados

```bash
npx prisma generate
npm run seed
```

### 5️⃣ Execute a aplicação

**Ambiente de desenvolvimento**

```bash
npm run dev
```

**Ambiente de produção**

```bash
npm run build
npm start
```

---

## 🧪 Testes Automatizados

O projeto possui **testes de integração** cobrindo:

* Fluxo de autenticação
* Permissões de acesso
* CRUD de usuários

Para executar:

```bash
npm test
```

![Testes passando](./docs/tests.png)

---

## 📜 Scripts Disponíveis

* `npm run dev` → Executa em modo desenvolvimento
* `npm run build` → Compila o TypeScript para `/dist`
* `npm start` → Executa a aplicação compilada
* `npm test` → Executa os testes automatizados
* `npm run seed` → Popula o banco com dados iniciais

---

## 👤 Autor

**Carlos Jeferson Jacinto da Silva**
Estudante de Sistemas de Informação – **Universidade Federal do Ceará (UFC)**

Focado em **Desenvolvimento Backend**, APIs REST e boas práticas de engenharia de software.