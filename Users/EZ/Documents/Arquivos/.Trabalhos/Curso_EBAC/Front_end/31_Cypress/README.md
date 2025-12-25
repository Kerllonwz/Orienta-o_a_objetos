# 🧪 Projeto de Testes E2E com Cypress - Agenda de Contatos

## 📋 Sobre o Projeto

Este projeto contém testes automatizados E2E (End-to-End) para a aplicação de agenda de contatos da EBAC, desenvolvidos com Cypress.

**URL da Aplicação:** https://ebac-agenda-contatos-tan.vercel.app/

> ⚠️ **Nota Importante:** Se a aplicação retornar erro 402 ou não estiver disponível, pode ser necessário verificar a disponibilidade da URL ou aguardar a restauração do serviço. Os testes estão configurados corretamente e executarão assim que a aplicação estiver acessível.

## ✨ Funcionalidades Testadas

- ✅ **Inclusão de Contatos** - Adiciona novos contatos à agenda
- ✅ **Alteração de Contatos** - Edita informações de contatos existentes
- ✅ **Remoção de Contatos** - Remove contatos da agenda

## 🛠️ Tecnologias Utilizadas

- **Cypress** ^13.6.2 - Framework de testes E2E
- **JavaScript** - Linguagem de programação

## 📁 Estrutura do Projeto

```
31_Cypress/
├── cypress/
│   ├── e2e/
│   │   └── agenda-contatos.cy.js    # Testes da aplicação
│   ├── fixtures/
│   │   └── contatos.json             # Dados de teste
│   └── support/
│       ├── commands.js               # Comandos customizados
│       └── e2e.js                    # Configurações globais
├── cypress.config.js                 # Configuração do Cypress
├── package.json                      # Dependências do projeto
└── README.md                         # Este arquivo
```

## 🚀 Como Executar

### Pré-requisitos

- Node.js instalado (v16 ou superior)
- npm ou yarn

### Instalação

```bash
cd 31_Cypress
npm install
```

### Executar os Testes

**Modo Interativo (Interface Gráfica):**
```bash
npm run cypress:open
```

**Modo Headless (Terminal):**
```bash
npm run cypress:run
```

ou

```bash
npm test
```

## 📝 Descrição dos Testes

### 1. Teste de Inclusão
- Acessa a aplicação
- Preenche o formulário com nome, e-mail e telefone
- Submete o formulário
- Verifica se o contato foi adicionado à lista

### 2. Teste de Alteração
- Adiciona um contato inicial
- Clica no botão de editar
- Altera as informações do contato
- Verifica se as alterações foram salvas

### 3. Teste de Remoção
- Adiciona um contato inicial
- Clica no botão de remover
- Verifica se o contato foi removido da lista

## 📦 Dependências

```json
{
  "devDependencies": {
    "cypress": "^13.6.2"
  }
}
```

## 🎯 Exercício EBAC

Este projeto foi desenvolvido como parte do exercício do módulo de Cypress do curso Front-end da EBAC.

**Requisitos atendidos:**
1. ✅ Projeto Cypress criado
2. ✅ Testes para aplicação da agenda de contatos
3. ✅ Testes de inclusão, alteração e remoção
4. ✅ Branch `exercicio_cypress` criada
5. ✅ Conteúdo armazenado no repositório

## 📄 Licença

ISC

---

**Desenvolvido como parte do curso Front-end da EBAC** 🎓
