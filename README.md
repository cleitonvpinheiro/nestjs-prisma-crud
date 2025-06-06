# Vamos criar o arquivo README.md com o conteúdo formatado

readme_content = """
# 🚀 NestJS + Prisma CRUD API

![GitHub repo size](https://img.shields.io/github/repo-size/cleitonvpinheiro/nestjs-prisma-crud)
![GitHub license](https://img.shields.io/github/license/cleitonvpinheiro/nestjs-prisma-crud)
![GitHub stars](https://img.shields.io/github/stars/cleitonvpinheiro/nestjs-prisma-crud?style=social)

API RESTful utilizando **NestJS** com **Prisma ORM** para gerenciar registros de empresas. Este projeto implementa operações completas de **CRUD (Create, Read, Update, Delete)** e pode servir como base sólida para aplicações mais robustas.

---

## 🧪 Features

✅ Cadastro de empresas  
✅ Listagem de empresas  
✅ Consulta por ID  
✅ Atualização de dados  
✅ Remoção de registros  
🔄 Integração com banco de dados via Prisma  
🧱 Arquitetura modular com NestJS  
🚧 Pronto para evoluir com autenticação, testes e documentação

---

## 🛠️ Tecnologias utilizadas

- [NestJS](https://nestjs.com/)
- [Prisma ORM](https://www.prisma.io/)
- [Node.js](https://nodejs.org/)
- [PostgreSQL](https://www.postgresql.org/) ou outro banco compatível
- [TypeScript](https://www.typescriptlang.org/)

---

## 📁 Estrutura de pastas

\`\`\`
nestjs-prisma-crud/
├── src/
│   ├── company/
│   │   ├── company.controller.ts
│   │   ├── company.service.ts
│   │   └── company.module.ts
│   ├── prisma/
│   │   └── schema.prisma
│   └── main.ts
├── .env
├── package.json
└── README.md
\`\`\`

---

## 📦 Instalação

\`\`\`bash
# Clone o repositório
git clone https://github.com/seu-usuario/nestjs-prisma-crud.git
cd nestjs-prisma-crud

# Instale as dependências
npm install
\`\`\`

---

## ⚙️ Configuração do Prisma e Banco de Dados

1. Crie um arquivo \`.env\` na raiz:

\`\`\`env
DATABASE_URL="postgresql://usuario:senha@localhost:5432/nome_do_banco"
\`\`\`

2. Gere o client do Prisma:

\`\`\`bash
npx prisma generate
\`\`\`

3. Rode as migrations para criar as tabelas:

\`\`\`bash
npx prisma migrate dev --name init
\`\`\`

---

## ▶️ Rodando a aplicação

\`\`\`bash
# Em modo de desenvolvimento
npm run start:dev

# Em modo de produção
npm run start
\`\`\`

---

## 📮 Endpoints da API

| Método | Rota           | Descrição             |
|--------|----------------|------------------------|
| POST   | /companies     | Cria uma nova empresa |
| GET    | /companies     | Lista todas empresas  |
| GET    | /companies/:id | Retorna uma empresa   |
| PUT    | /companies/:id | Atualiza uma empresa  |
| DELETE | /companies/:id | Remove uma empresa    |

---

## 🧪 Testes

> **(Opcional)**: Testes podem ser implementados com Jest ou outra ferramenta compatível com NestJS.

---

## 📌 To-do

- [ ] Autenticação (JWT)
- [ ] Swagger (documentação automática da API)
- [ ] Testes com Jest
- [ ] Deploy via Docker ou Railway

---

## 🤝 Contribuindo

1. Faça um fork do projeto
2. Crie sua branch (\`git checkout -b feature/nova-feature\`)
3. Commit suas alterações (\`git commit -m 'Adiciona nova feature'\`)
4. Dê push na branch (\`git push origin feature/nova-feature\`)
5. Abra um Pull Request

---

## 📄 Licença

Este projeto está sob a licença **MIT**. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

## 👨‍💻 Autor

**Cleiton Pinheiro**  
Desenvolvedor Fullstack JavaScript  
[GitHub](https://github.com/cleitonvpinheiro) | [LinkedIn](https://www.linkedin.com/in/cleitonvpinheiro)

---

## 🌟 Dê uma estrela

Se este projeto te ajudou ou inspirou, deixe uma ⭐ no repositório para apoiar o trabalho!
"""

# Salvar o conteúdo em um arquivo
readme_path = "/mnt/data/README.md"
with open(readme_path, "w", encoding="utf-8") as f:
    f.write(readme_content)

readme_path
