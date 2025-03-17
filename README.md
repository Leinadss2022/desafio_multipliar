Testes E2E - Cadastro de Usuário em Loja Virtual

Visão Geral

Este repositório contém os testes automatizados E2E para validar o fluxo de cadastro de usuário na loja virtual Automation Practice. Os testes foram desenvolvidos utilizando Playwright, garantindo a confiabilidade do processo de registro e login.

Motivação

Atualmente, o fluxo de cadastro da loja virtual não possui testes automatizados, o que pode ocasionar falhas não detectadas em produção. Com a automação dos testes, buscamos:

Reduzir dependência de testes manuais e acelerar a validação a cada release.

Minimizar falhas no cadastro de novos clientes.

Mitigar riscos de regressão em futuras mudanças.

Cenários de Teste

Cenário 1 - Cadastro bem-sucedido

Dado que o usuário acessa a página de cadastro da loja virtual.Quando ele preenche os campos obrigatórios com dados válidos e confirma o cadastro.Então o sistema deve criar a conta e redirecioná-lo para a página "My account".

Cenário 2 - Logout da conta da loja

Dado que o usuário está logado na loja.Quando ele clica no botão de Logout.Então o sistema deve redirecioná-lo para a tela de login.

Cenário 3 - Tentativa de cadastro com campos obrigatórios vazios

Dado que o usuário acessa a página de cadastro.Quando ele tenta finalizar o cadastro sem preencher todos os campos obrigatórios.Então o sistema deve exibir mensagens de erro para cada campo faltante.

Tecnologias Utilizadas

Playwright

Node.js

Geração de logs e screenshots em caso de falha

Configuração do Ambiente

1. Pré-requisitos

Certifique-se de ter instalado:

Node.js: Download Node.js

Git: Download Git

2. Clonar o Repositório

git clone https://github.com/seu-usuario/nome-do-repositorio.git
cd nome-do-repositorio

3. Instalar Dependências

npm install
npx playwright install

Execução dos Testes

npx playwright test

Critérios de Aceite

Testes devem cobrir os cenários principais do fluxo de cadastro e logout.

Logs e screenshots devem ser gerados em caso de falha.

Evidência em vídeo da execução dos testes (tela e terminal).

Código armazenado em um repositório Git público.



