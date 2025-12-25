/// <reference types="cypress" />

describe('Agenda de Contatos - Testes E2E', () => {
  
  beforeEach(() => {
    // Visita a aplicação antes de cada teste
    cy.visit('/')
  })

  it('Deve carregar a aplicação corretamente', () => {
    // Verifica se a página carregou
    cy.contains('Agenda de contatos').should('be.visible')
    
    // Verifica se o formulário está presente
    cy.get('form').should('exist')
  })

  describe('Funcionalidade: Inclusão de Contatos', () => {
    
    it('Deve adicionar um novo contato com sucesso', () => {
      const nome = 'João Silva'
      const email = 'joao.silva@email.com'
      const telefone = '11987654321'

      // Preenche o formulário
      cy.get('input[type="text"]').type(nome)
      cy.get('input[type="email"]').type(email)
      cy.get('input[type="tel"]').type(telefone)

      // Submete o formulário
      cy.get('button[type="submit"]').click()

      // Verifica se o contato foi adicionado à lista
      cy.get('.contato').should('contain', nome)
      cy.get('.contato').should('contain', email)
      cy.get('.contato').should('contain', telefone)
    })

    it('Deve adicionar múltiplos contatos', () => {
      // Primeiro contato
      cy.get('input[type="text"]').type('Maria Santos')
      cy.get('input[type="email"]').type('maria@email.com')
      cy.get('input[type="tel"]').type('11912345678')
      cy.get('button[type="submit"]').click()

      // Segundo contato
      cy.get('input[type="text"]').type('Pedro Oliveira')
      cy.get('input[type="email"]').type('pedro@email.com')
      cy.get('input[type="tel"]').type('11998765432')
      cy.get('button[type="submit"]').click()

      // Verifica se ambos os contatos estão na lista
      cy.get('.contato').should('have.length.at.least', 2)
      cy.contains('Maria Santos').should('be.visible')
      cy.contains('Pedro Oliveira').should('be.visible')
    })

    it('Deve limpar o formulário após adicionar um contato', () => {
      // Adiciona um contato
      cy.get('input[type="text"]').type('Ana Costa')
      cy.get('input[type="email"]').type('ana@email.com')
      cy.get('input[type="tel"]').type('11911223344')
      cy.get('button[type="submit"]').click()

      // Verifica se os campos foram limpos
      cy.get('input[type="text"]').should('have.value', '')
      cy.get('input[type="email"]').should('have.value', '')
      cy.get('input[type="tel"]').should('have.value', '')
    })
  })

  describe('Funcionalidade: Alteração de Contatos', () => {
    
    beforeEach(() => {
      // Adiciona um contato antes de cada teste de alteração
      cy.get('input[type="text"]').type('Carlos Souza')
      cy.get('input[type="email"]').type('carlos@email.com')
      cy.get('input[type="tel"]').type('11955566677')
      cy.get('button[type="submit"]').click()
    })

    it('Deve editar um contato existente', () => {
      // Clica no botão de editar do contato
      cy.get('.edit').last().click()

      // Limpa e preenche com novos dados
      cy.get('input[type="text"]').clear().type('Carlos Alberto Souza')
      cy.get('input[type="email"]').clear().type('carlos.alberto@email.com')
      cy.get('input[type="tel"]').clear().type('11966677788')

      // Submete a alteração
      cy.get('button[type="submit"]').click()

      // Verifica se o contato foi atualizado
      cy.contains('Carlos Alberto Souza').should('be.visible')
      cy.contains('carlos.alberto@email.com').should('be.visible')
      cy.contains('11966677788').should('be.visible')
    })

    it('Deve editar apenas o nome do contato', () => {
      const emailOriginal = 'carlos@email.com'
      const telefoneOriginal = '11955566677'

      // Clica no botão de editar
      cy.get('.edit').last().click()

      // Altera apenas o nome
      cy.get('input[type="text"]').clear().type('Carlos José Souza')
      
      // Submete a alteração
      cy.get('button[type="submit"]').click()

      // Verifica se apenas o nome mudou
      cy.contains('Carlos José Souza').should('be.visible')
      cy.contains(emailOriginal).should('be.visible')
      cy.contains(telefoneOriginal).should('be.visible')
    })

    it('Deve carregar os dados do contato no formulário ao clicar em editar', () => {
      // Clica no botão de editar
      cy.get('.edit').last().click()

      // Verifica se os dados foram carregados no formulário
      cy.get('input[type="text"]').should('have.value', 'Carlos Souza')
      cy.get('input[type="email"]').should('have.value', 'carlos@email.com')
      cy.get('input[type="tel"]').should('have.value', '11955566677')
    })
  })

  describe('Funcionalidade: Remoção de Contatos', () => {
    
    beforeEach(() => {
      // Adiciona um contato antes de cada teste de remoção
      cy.get('input[type="text"]').type('Lucia Fernandes')
      cy.get('input[type="email"]').type('lucia@email.com')
      cy.get('input[type="tel"]').type('11944455566')
      cy.get('button[type="submit"]').click()
    })

    it('Deve remover um contato da lista', () => {
      // Verifica que o contato existe
      cy.contains('Lucia Fernandes').should('be.visible')

      // Obtém o número de contatos antes da remoção
      cy.get('.contato').then(($contatos) => {
        const qtdAntes = $contatos.length

        // Clica no botão de remover
        cy.get('.delete').last().click()

        // Verifica se o contato foi removido
        cy.get('.contato').should('have.length', qtdAntes - 1)
      })
    })

    it('Deve remover o contato correto da lista', () => {
      // Adiciona mais um contato
      cy.get('input[type="text"]').type('Roberto Lima')
      cy.get('input[type="email"]').type('roberto@email.com')
      cy.get('input[type="tel"]').type('11933344455')
      cy.get('button[type="submit"]').click()

      // Verifica que ambos os contatos existem
      cy.contains('Lucia Fernandes').should('be.visible')
      cy.contains('Roberto Lima').should('be.visible')

      // Remove o primeiro contato (Lucia)
      cy.get('.delete').first().click()

      // Verifica que Lucia foi removida e Roberto permanece
      cy.contains('Lucia Fernandes').should('not.exist')
      cy.contains('Roberto Lima').should('be.visible')
    })

    it('Deve permitir remover todos os contatos', () => {
      // Adiciona mais dois contatos
      cy.get('input[type="text"]').type('Fernanda Alves')
      cy.get('input[type="email"]').type('fernanda@email.com')
      cy.get('input[type="tel"]').type('11922233344')
      cy.get('button[type="submit"]').click()

      cy.get('input[type="text"]').type('Ricardo Martins')
      cy.get('input[type="email"]').type('ricardo@email.com')
      cy.get('input[type="tel"]').type('11911122233')
      cy.get('button[type="submit"]').click()

      // Remove todos os contatos
      cy.get('.delete').each(($btn) => {
        cy.wrap($btn).click()
        cy.wait(200) // Pequeno delay para garantir a remoção
      })

      // Verifica que não há mais contatos na lista
      cy.get('.contato').should('not.exist')
    })
  })

  describe('Testes de Integração - Fluxo Completo', () => {
    
    it('Deve realizar um fluxo completo: adicionar, editar e remover', () => {
      // 1. ADICIONAR
      cy.get('input[type="text"]').type('Teste Completo')
      cy.get('input[type="email"]').type('teste@email.com')
      cy.get('input[type="tel"]').type('11900000000')
      cy.get('button[type="submit"]').click()

      // Verifica inclusão
      cy.contains('Teste Completo').should('be.visible')

      // 2. EDITAR
      cy.get('.edit').last().click()
      cy.get('input[type="text"]').clear().type('Teste Completo Editado')
      cy.get('button[type="submit"]').click()

      // Verifica edição
      cy.contains('Teste Completo Editado').should('be.visible')
      cy.contains('Teste Completo').should('not.exist')

      // 3. REMOVER
      cy.get('.delete').last().click()

      // Verifica remoção
      cy.contains('Teste Completo Editado').should('not.exist')
    })

    it('Deve gerenciar múltiplos contatos simultaneamente', () => {
      const contatos = [
        { nome: 'Contato A', email: 'a@email.com', tel: '11911111111' },
        { nome: 'Contato B', email: 'b@email.com', tel: '11922222222' },
        { nome: 'Contato C', email: 'c@email.com', tel: '11933333333' }
      ]

      // Adiciona múltiplos contatos
      contatos.forEach(contato => {
        cy.get('input[type="text"]').type(contato.nome)
        cy.get('input[type="email"]').type(contato.email)
        cy.get('input[type="tel"]').type(contato.tel)
        cy.get('button[type="submit"]').click()
      })

      // Verifica se todos foram adicionados
      contatos.forEach(contato => {
        cy.contains(contato.nome).should('be.visible')
      })

      // Edita o segundo contato
      cy.get('.edit').eq(1).click()
      cy.get('input[type="text"]').clear().type('Contato B Modificado')
      cy.get('button[type="submit"]').click()

      // Verifica edição
      cy.contains('Contato B Modificado').should('be.visible')

      // Remove o primeiro contato
      cy.get('.delete').first().click()
      cy.contains('Contato A').should('not.exist')

      // Verifica que os outros permanecem
      cy.contains('Contato B Modificado').should('be.visible')
      cy.contains('Contato C').should('be.visible')
    })
  })

  describe('Validações e Edge Cases', () => {
    
    it('Deve exibir a lista vazia inicialmente ou após limpar todos', () => {
      // Se houver contatos, remove todos
      cy.get('body').then(($body) => {
        if ($body.find('.delete').length > 0) {
          cy.get('.delete').each(($btn) => {
            cy.wrap($btn).click()
          })
        }
      })

      // Verifica que não há contatos
      cy.get('.contato').should('not.exist')
    })

    it('Deve adicionar contato com caracteres especiais no nome', () => {
      cy.get('input[type="text"]').type('José D\'Angelo-Sánchez')
      cy.get('input[type="email"]').type('jose@email.com')
      cy.get('input[type="tel"]').type('11988888888')
      cy.get('button[type="submit"]').click()

      cy.contains('José D\'Angelo-Sánchez').should('be.visible')
    })

    it('Deve manter a integridade dos dados após múltiplas operações', () => {
      // Adiciona contato inicial
      cy.get('input[type="text"]').type('Integridade Teste')
      cy.get('input[type="email"]').type('integridade@email.com')
      cy.get('input[type="tel"]').type('11977777777')
      cy.get('button[type="submit"]').click()

      // Edita várias vezes
      for (let i = 1; i <= 3; i++) {
        cy.get('.edit').last().click()
        cy.get('input[type="text"]').clear().type(`Integridade Teste ${i}`)
        cy.get('button[type="submit"]').click()
      }

      // Verifica a última alteração
      cy.contains('Integridade Teste 3').should('be.visible')
    })
  })
})
