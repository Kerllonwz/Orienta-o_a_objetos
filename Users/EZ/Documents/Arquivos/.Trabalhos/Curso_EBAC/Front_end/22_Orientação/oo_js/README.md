Exercício: Orientação a Objetos em JavaScript

Requisitos atendidos:
- Criei uma classe de abstração: `Animal` (não pode ser instanciada diretamente).
- Criei pelo menos duas classes herdeiras: `Dog` e `Cat`.
- Criei pelo menos três instâncias: `dog1`, `cat1`, `dog2`.

Como visualizar localmente:
1. Abra `22_Orientação/oo_js/index.html` no seu navegador.

Git: criar branch `oo_js` e enviar para o repositório remoto

Se o repositório local já tiver um remote configurado para o repositório do curso, execute (PowerShell):

```powershell
# criar e trocar para a branch
git checkout -b oo_js
# adicionar os arquivos criados
git add 22_Orientação/oo_js
# commit
git commit -m "Exercício OO em JS: Animal, Dog, Cat e instâncias"
# enviar para o remoto e criar branch remota
git push -u origin oo_js
```

Se você ainda não tem um remote configurado e quer usar o repositório fornecido no enunciado, adicione o remote (substitua se necessário) e então envie:

```powershell
git remote add origin https://github.com/Kerllonwz/Orienta-o_a_objetos.git
git push -u origin oo_js
```

Observação: verifique se o nome do remote (`origin`) e a URL estão corretos antes de sobrescrever um remote já existente.

---
Autor: (adicione seu nome aqui se desejar)
