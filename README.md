# Techsisters

## Índice

* [1. Resumo do projeto](#1-resumo-do-projeto)
* [2. Definição de produto](#2-definição-de-produto)
* [3. Pesquisas de usuário](#3-pesquisas-de-usuário)
* [4. História de usuário](#4-história-de-usuário)
* [5. Desenho da Interface de Usuário](#6-desenho-da-interface-de-usuário)

***

## 1. Resumo do projeto



## 2. Definição de produto

Techsisters é uma plataforma de rede social projetada para mulheres apaixonadas por tecnologia. Nosso objetivo principal é proporcionar um espaço seguro onde as mulheres possam compartilhar ideias, se expressar livremente e se conectar umas com as outras. Acreditamos que quando as mulheres se unem, elas têm o poder de desafiar limites, inspirar e transformar o mundo através da tecnologia.

De acordo com pesquisas realizadas durante o desenvolvimento do projeto, constatamos que 53% das mulheres com idade entre 25 e 34 anos gostariam que implementássemos duas funcionalidades: Recursos de incentivo ao empreendedorismo feminino e Mentoria e orientação profissional. Essa demanda pode ser interpretada como um indício de que as mulheres enfrentam desafios adicionais ou buscam apoio específico nesses aspectos da carreira profissional. Esses dados confirmam que as oportunidades na área de tecnologia ainda são majoritariamente voltadas para homens. Diante dessa constatação, uma das futuras funcionalidades da rede social será a possibilidade de os clientes oferecerem Recursos de incentivo ao empreendedorismo feminino por meio da Techsisters.

## 3. Pesquisas de usuário

Um dos objetivos do projeto era realizar entrevistas com os potenciais usuários. Para isso, utilizamos um formulário do Google Docs como ferramenta e criamos um questionário para compreender o perfil dos nossos possíveis usuários e analisar suas necessidades.

Durante a pesquisa, buscamos conhecer melhor o nosso público-alvo. Iniciamos o questionário com perguntas sobre idade e necessidades específicas. Dessa forma, identificamos que a maioria dos participantes era do sexo feminino e abrangia diversas faixas etárias, com necessidades semelhantes.

Nossa pesquisa revelou que 53% das mulheres estão na faixa etária de 25 a 34 anos, enquanto 20% estão nas faixas etárias de 18 a 24 e 35 a 44 anos.

![image](./src/img/grafico1.jpeg)

Após identificar nossos usuários iniciais, também adicionamos uma pergunta para compreender como elas se sentem ao compartilhar conteúdo relacionado à tecnologia em redes sociais. Os resultados revelaram que:

33% se sentem um pouco desconfortáveis, especialmente quando o público é majoritariamente masculino.

Essas informações nos direcionam para criar uma plataforma segura, inclusiva e acolhedora, onde as mulheres podem compartilhar, se expressar e se conectar com outras apaixonadas por tecnologia. Nosso objetivo é proporcionar um refúgio virtual onde todas as usuárias se sintam empoderadas e apoiadas

![image](./src/img/grafico2.jpeg)

Finalizamos a pesquisa com uma aceitação de 100% em relação à criação de uma rede social exclusiva para mulheres. Esses resultados confirmam a importância da pesquisa de usuários para orientar o desenvolvimento do projeto e nos fornecer uma visão mais clara para implementações futuras na rede social, considerando possíveis investimentos. Além disso, a pesquisa nos ajudou a compreender se as pessoas veem valor e benefícios em ter um espaço exclusivo para se conectar, compartilhar conhecimentos e experiências com outras mulheres na área de tecnologia.

![image](./src/img/grafico3.jpeg)

## 4. História de usuário

### História de usuário 1:

> "Eu, na condição de visitante do site, estava navegando pela internet em busca de uma comunidade tecnológica exclusiva para mulheres. Foi quando me deparei com a Techsisters, uma rede social destinada a mulheres interessadas em compartilhar conteúdo relacionado à tecnologia. Com isso em mente, meu objetivo é ter a capacidade de me registrar, fazer login, publicar conteúdo, editar e excluir posts ao acessar o site. Além disso, também gostaria de obter informações sobre a empresa por trás da plataforma e conhecer a equipe responsável pelo desenvolvimento do site."

#### Critério de aceitação: 
- O usuário pode se registrar somente usando email, senha e preenchido o apelido/user de como gostaria de ser chamado
- Se o email no momento do preenchimento dos inputs estiver errado retorna um alert com “insira um email válido”
- O usuário pode se registrar de maneira rápida utilizando o “entrar com o google” onde um pop up é aberto e ele pode escolher em qual conta gostaria de fazer login.
- Só pode entrar na página de feed após for concluído o registro do usuário. 
- O registro deve ser realizado facilmente a partir de qualquer dispositivo preservando a interface do aplicativo. 

#### Definição de pronto:
- O código tem, e passa, os testes necessários.
- A página de login estava responsiva para todas as telas
- Finalizou-se a SPA (Single Page Application)
- A história implementada foi testada com, pelo menos 3 usuários (esse nao foi feito com outras pessoas)
- Realizou-se o deploy utilizando o git tag. (fazer ainda)

### História de usuário 2:

> "Como usuário registrado, gostaria de ter a opção de fazer login de forma rápida e segura, utilizando a opção de login com o Google ou inserindo meu e-mail e senha nos campos fornecidos, para ter acesso aos diversos conteúdos disponíveis na plataforma Techsisters."

#### Critério de aceitação: 
- Com o usuário já registrado, seu e-mail e id estão salvos no banco de dados e ativo.
- No momento do preenchimento dos campos para logar no aplicativo, se e-mail e senha conferirem, o usuário clica no botão entrar e  tem acesso ao feed.
- Se o usuário preferir pode clicar no botão entrar com o google e após verificado se está cadastrado ele é redirecionado a página de feed onde poderá ver as postagens de outros usuários ou fazer as suas postagens. 
- Se por algum motivo o usuário errar no momento de preencher os dados no login aparecerá um alert com a seguinte mensagem “email ou senha inválidos”.

#### Definição de pronto:
- O código para o login tem autenticação Firebase;
- O código tem, e passa, os testes necessários.
- A página de login estava responsiva para todas as telas
- Finalizou-se a SPA (Single Page Application)
- A história implementada foi testada com, pelo menos 3 usuários (esse nao foi feito com outras pessoas)
- Realizou-se o deploy utilizando o git tag. (fazer ainda)

### História de usuário 3:

> "Como usuário registrado, ao entrar na página de posts da Techsisters, fiquei impressionado com as publicações inspiradoras das mulheres na comunidade. Decidi compartilhar minhas próprias experiências e interagir com outras usuárias, aprendendo com elas e contribuindo com meus conhecimentos. É importante para mim poder postar conteúdos relevantes e ter controle total sobre minhas publicações, incluindo a opção de excluir meus próprios posts, com uma confirmação prévia. Também gostaria de poder ver e dar likes nas publicações das outras mulheres na plataforma. Ter a exclusividade de excluir meus próprios posts é fundamental para manter a segurança e responsabilidade no ambiente da comunidade Techsisters."

#### Critério de aceitação:

#### Definição de pronto:
- O código guarda o post no Firebase;
- A página de posts estava responsiva para todas as tela
- A história implementada foi testada com, pelo menos 3 usuários (esse nao foi feito com outras pessoas)
- Construiu-se o teste das funções de like, editar e excluir post

### História do usuário 4

> "Eu como usuária de redes sociais, gostaria de poder sair da minha conta da Techsisters, com o objetivo de não deixar tantas contas de redes sociais abertas ao mesmo tempo."

#### Critérios de aceitação:
- Conseguir sair da conta
- Ter a opção de sair visível

#### Definição de pronto:
- Construiu-se o teste da função de deslogar da conta

## 5. Desenho da Interface de Usuário

#### Protótipo de baixa fidelidade

![image](./src/img/baixa-fidelidade.jpeg)

#### Protótipos de alta fidelidade

- PÁGINA INICIAL
  
![image](./src/img/alta-fidelidade-login.jpeg)

![image](./src/img/alta-fidelidade-register.jpeg)

- PÁGINA DE POSTS

![image](./src/img/baixa-fidelidade.jpeg)

## 7. Entrega

O projeto será entregue subindo seu código no GitHub (`commit` /`push`) e a
interface será exibida usando páginas do GitHub ou outro serviço de hospedagem
(Firebase, Netlify, Vercel, etc) que você pode ter encontrado pelo caminho.
Verifica a [Documentação Vite](https://vitejs.dev/guide/static-deploy.html)
para orientá-lo sobre isso.

***

Participe do canal do Slack
[#project-social-network](https://claseslaboratoria.slack.com/archives/C03SE63GFJQ)
para conversar e pedir ajuda no projeto.

### Mobile first

O conceito de [_mobile
first_](https://tableless.com.br/mobile-first-a-arte-de-pensar-com-foco/) faz
referência a um processo de desenho e desenvolvimento que parte de como se vê e
como funciona uma aplicação primeiro em um dispositivo móvel e mais adiante se
analisa como adaptar a aplicação à telas progressivamente maiores. Esta é uma
contraposição ao modelo tradicional, no qual primeiro se desenha os websites (ou
webapps) para desktops e depois os adaptam para telas menores.

A motivação aqui é se assegurar que desde o começo sejam desenhadas telas
_responsivas_. Dessa forma, começamos com a aparência e o comportamento do
aplicativo em uma tela e ambiente móvel.

### Múltiplas telas

Em projetos anteriores, nossas aplicações eram compostas de apenas uma tela
_principal_ (uma só _página_). Neste projeto, precisaremos dividir nossa
interface em várias _views_ ou _pages_ e oferecer uma maneira de navegar entre
essas telas. Esse problema pode ser resolvido de várias maneiras: com arquivos
HTML independentes (cada um com seu próprio URL) e links tradicionais; mantendo
na memória e renderizando condicionalmente (sem atualizar a página);
[manipulando o histórico do
navegador](https://developer.mozilla.org/pt-BR/docs/Web/API/History_API)
com
[`window.history`](https://developer.mozilla.org/es/docs/Web/API/Window/history).
Neste projeto, convidamos você a explorar opções e decidir sobre uma opção de
implementação.

### Gravação de dados

Nos projetos anteriores, consumimos dados, mas ainda não tínhamos escrito dados
(salvar alterações, criar dados, excluir, etc). Neste projeto, você precisará
criar (salvar) novos dados, além de ler, atualizar e modificar os dados
existentes. Esses dados podem ser salvos remotamente usando o
[Firebase](https://firebase.google.com/).

Para usar o Firebase, você deve criar um projeto no console do Firebase e
instale a dependência `firebase` usando `npm`.
Leia [instruções passo a passo aqui](https://firebase.google.com/docs/web/setup).

Outras:

* [Mobile
  First](https://tableless.com.br/mobile-first-a-arte-de-pensar-com-foco/)
* [Mobile First Is NOT Mobile Only - Nielsen Norman
  Group](https://www.nngroup.com/articles/mobile-first-not-mobile-only/)
* [Flexbox - CSS
  Tricks](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
* [Módulos:
  Export](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/export)
* [Módulos:
  Import](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Sentencias/import)
