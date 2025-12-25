# 📝 Guia de Execução dos Testes - Exercício EBAC

## ✅ Checklist do Exercício

- [x] **Tarefa 1:** Criar um projeto de testes utilizando o Cypress ✅
- [x] **Tarefa 2:** Testar aplicação https://ebac-agenda-contatos-tan.vercel.app/ ✅
- [x] **Tarefa 3:** Testar funcionalidades de inclusão, alteração e remoção ✅
- [x] **Tarefa 4:** Criar branch `exercicio_cypress` ✅
- [x] **Tarefa 5:** Armazenar projeto na branch ✅
- [ ] **Tarefa 6:** Enviar link do repositório na plataforma ⏳

## 🔗 Link do Repositório

**Branch:** `exercicio_cypress`  
**Repositório:** https://github.com/Kerllonwz/Orienta-o_a_objetos/tree/exercicio_cypress

## 🚀 Como Executar os Testes

### Pré-requisitos
- Node.js v16+ instalado
- Dependências já instaladas com `npm install`

### Opção 1: Modo Interativo (Recomendado para desenvolvimento)

```bash
cd 31_Cypress
npm run cypress:open
```

Este comando abrirá a interface gráfica do Cypress onde você pode:
- Visualizar todos os testes disponíveis
- Executar testes individualmente
- Ver a aplicação sendo testada em tempo real
- Debugar testes com facilidade

### Opção 2: Modo Headless (Para CI/CD e execução rápida)

```bash
cd 31_Cypress
npm run cypress:run
```

ou simplesmente:

```bash
npm test
```

Este comando executará todos os testes no terminal sem abrir a interface gráfica.

## 📊 Estrutura dos Testes Implementados

### 1. Testes de Inclusão
- ✅ Adicionar um novo contato
- ✅ Adicionar múltiplos contatos
- ✅ Verificar limpeza do formulário após inclusão

### 2. Testes de Alteração
- ✅ Editar um contato existente (todos os campos)
- ✅ Editar apenas um campo do contato
- ✅ Verificar carregamento dos dados no formulário

### 3. Testes de Remoção
- ✅ Remover um contato da lista
- ✅ Remover o contato correto (múltiplos contatos)
- ✅ Remover todos os contatos

### 4. Testes de Integração
- ✅ Fluxo completo: adicionar → editar → remover
- ✅ Gerenciar múltiplos contatos simultaneamente

### 5. Testes de Validação
- ✅ Lista vazia inicial
- ✅ Caracteres especiais nos nomes
- ✅ Integridade dos dados após múltiplas operações

## 📸 Capturas de Tela

Os testes geram screenshots automaticamente em caso de falhas na pasta:
```
cypress/screenshots/
```

## 🎯 Resultados Esperados

Ao executar os testes, você verá:
- ✅ Todos os testes passando (verde)
- 📊 Resumo da execução
- ⏱️ Tempo de execução de cada teste
- 📸 Screenshots em caso de falhas

## 🐛 Troubleshooting

### Problema: Testes falhando
- **Solução:** Verifique se a aplicação https://ebac-agenda-contatos-tan.vercel.app/ está online
- **Solução:** Verifique sua conexão com a internet
- **Solução:** Limpe o cache do navegador usado pelo Cypress
- **Nota:** Se você receber erro 402 (Payment Required), a aplicação pode estar temporariamente indisponível. Aguarde ou verifique se há uma URL alternativa

### Problema: Cypress não abre
- **Solução:** Execute `npx cypress verify` para verificar a instalação
- **Solução:** Reinstale as dependências: `rm -rf node_modules && npm install`

### Problema: Testes lentos
- **Solução:** Execute apenas um teste por vez no modo interativo
- **Solução:** Desabilite o vídeo no `cypress.config.js` (já desabilitado)

## 📚 Recursos Adicionais

- [Documentação do Cypress](https://docs.cypress.io/)
- [Best Practices do Cypress](https://docs.cypress.io/guides/references/best-practices)
- [Cypress Examples](https://github.com/cypress-io/cypress-example-recipes)

## 🎓 Sobre o Exercício

Este projeto foi desenvolvido como parte do **Módulo 31 - Cypress** do curso de Front-end da EBAC.

**Objetivos Alcançados:**
- ✅ Compreensão da estrutura de testes E2E
- ✅ Implementação de testes para CRUD completo
- ✅ Uso de comandos customizados do Cypress
- ✅ Organização de testes em suítes
- ✅ Boas práticas de automação de testes

---

**Desenvolvido por:** Aluno EBAC  
**Data:** Dezembro 2025  
**Módulo:** 31 - Testes com Cypress
