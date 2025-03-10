
# Metodologia

O desenvolvimento do aplicativo seguirá a abordagem Ágil, utilizando a metodologia Scrum para garantir flexibilidade e entregas incrementais. O projeto será dividido nas seguintes fases:  

## 1. Levantamento de Requisitos  
- Coleta de necessidades dos usuários por meio de entrevistas e pesquisas.  
- Definição das funcionalidades essenciais do aplicativo.  

## 2. Planejamento e Design  
- Elaboração de wireframes e prototipagem da interface.  
- Foco na usabilidade e experiência do usuário (UX/UI).  

## 3. Desenvolvimento  
- Implementação das funcionalidades em ciclos curtos (sprints).  
- Utilização das tecnologias:
  - React Native para o front-end.  
  - .NET (C#) para a API.  

## 4. Testes e Validação  
- Aplicação de testes unitários e testes de integração.  
- Testes com usuários para validação da experiência e eficiência do sistema.  

## 5. Implantação e Feedback  
- Publicação da versão inicial do aplicativo (APK).  
- Coleta de feedback dos usuários e ajustes para melhorias contínuas.  

# Relação de Ambientes de Trabalho  

Os artefatos do projeto são desenvolvidos em diferentes ambientes, garantindo um fluxo de trabalho eficiente e organizado. A tabela abaixo apresenta a relação dos ambientes, as plataformas utilizadas e os respectivos links de acesso.  

| **Ambiente**      | **Plataforma**                                      | **Link de Acesso**                         |
|------------------|--------------------------------------------------|--------------------------------------------|
| **Desenvolvimento** | React Native, Expo, .NET (C#), SQLite             | [GitHub - Repositório do Projeto](#)      |
| **Homologação**   | Firebase (Auth, Firestore), Render, TestFlight     | [TestFlight - Versão Beta](#)             |
| **Produção**      | Google Play Store, App Store, API em AWS/Firebase | [Google Play Store](#) / [App Store](#)   |

## Tecnologias e Frameworks Utilizados  

- **Front-end:** React Native + Expo  
- **Back-end:** .NET Core (C#)  
- **Banco de Dados:** SQLite (desenvolvimento), Firebase Firestore (produção)  
- **Autenticação:** Firebase Auth  
- **Hospedagem da API:** Render ou AWS  
- **Testes:** NUnit ou xUnit para .NET  
- **Distribuição:** Inicialmente um arquivo APK para cada usuário e posteriormente Google Play Store / App Store.  

Cada ambiente tem um propósito específico:  
- **Desenvolvimento:** Local, utilizado para a implementação de novas funcionalidades.  
- **Homologação:** Validação e testes com usuários antes da publicação.  
- **Produção:** Aplicativo disponível para os usuários finais.    

## Controle de Versão
A ferramenta de controle de versão adotada no projeto foi o Git, com o GitHub para hospedagem do repositório. O controle de versões permite rastrear alterações, colaborar de forma eficiente e manter a integridade do código ao longo do desenvolvimento.

O projeto segue a seguinte convenção para o nome de branches:
- main: versão estável já testada do software
- unstable: versão testada, mas ainda instável
- testing: versão em fase de testes
- dev: versão em desenvolvimento, onde novas funcionalidades são implementadas

Além disso, para facilitar a gerência do código e o rastreamento de mudanças, o projeto segue boas práticas para commits, merges e tags:
Commits: Mensagens de commit seguem o padrão [tipo]: descrição breve, por exemplo:
- feat: adicionar funcionalidade de notificação
- fix: corrigir erro na sincronização 
- docs: atualizar documentação do controle de versão

Merges: Utiliza-se a estratégia de pull requests para garantir revisões de código antes de fusões. 

Tags: As versões do sistema são marcadas com tags seguindo o formato vX.Y.Z, onde:
- X = grandes mudanças
- Y = melhorias e novas funcionalidades
- Z = correções de bugs

Quanto à gerência de issues, o projeto adota a seguinte convenção para etiquetas:
- bug: indica um erro identificado no sistema
- feature: uma nova funcionalidade a ser desenvolvida
- enhancement: uma funcionalidade precisa ser melhorada
- documentation: melhorias ou acréscimos à documentação. 
Essa estrutura proporciona um fluxo de trabalho funcional e organizado, garantindo que o código esteja sempre atualizado e bem documentado.

## Gerenciamento de Projeto

### Divisão de Papéis

Apresente a divisão de papéis entre os membros do grupo.

Exemplificação: A equipe utiliza metodologias ágeis, tendo escolhido o Scrum como base para definição do processo de desenvolvimento. A equipe está organizada da seguinte maneira:
- Scrum Master: Felipe Domingos;
- Product Owner: Rommel Carneiro;
- Equipe de Desenvolvimento: Pedro Penna, Pedro Ivo, Rodrigo Richard;
- Equipe de Design: Simone Nogueira.

> **Links Úteis**:
> - [11 Passos Essenciais para Implantar Scrum no seu Projeto](https://mindmaster.com.br/scrum-11-passos/)
> - [Scrum em 9 minutos](https://www.youtube.com/watch?v=XfvQWnRgxG0)
> - [Os papéis do Scrum e a verdade sobre cargos nessa técnica](https://www.atlassian.com/br/agile/scrum/roles)

### Processo

Coloque  informações sobre detalhes da implementação do Scrum seguido pelo grupo. O grupo deverá fazer uso do recurso de gerenciamento de projeto oferecido pelo GitHub, que permite acompanhar o andamento do projeto, a execução das tarefas e o status de desenvolvimento da solução.
 
> **Links Úteis**:
> - [Planejamento e Gestáo Ágil de Projetos](https://pucminas.instructure.com/courses/87878/pages/unidade-2-tema-2-utilizacao-de-ferramentas-para-controle-de-versoes-de-software)
> - [Sobre quadros de projeto](https://docs.github.com/pt/issues/organizing-your-work-with-project-boards/managing-project-boards/about-project-boards)
> - [Project management, made simple](https://github.com/features/project-management/)
> - [Sobre quadros de projeto](https://docs.github.com/pt/github/managing-your-work-on-github/about-project-boards)
> - [Como criar Backlogs no Github](https://www.youtube.com/watch?v=RXEy6CFu9Hk)
> - [Tutorial Slack](https://slack.com/intl/en-br/)

### Ferramentas

As ferramentas empregadas no projeto são:

- Editor de código.
- Ferramentas de comunicação
- Ferramentas de desenho de tela (_wireframing_)

O editor de código foi escolhido porque ele possui uma integração com o sistema de versão. As ferramentas de comunicação utilizadas possuem integração semelhante e por isso foram selecionadas. Por fim, para criar diagramas utilizamos essa ferramenta por melhor captar as necessidades da nossa solução.

Liste quais ferramentas foram empregadas no desenvolvimento do projeto, justificando a escolha delas, sempre que possível.
 
> **Possíveis Ferramentas que auxiliarão no gerenciamento**: 
> - [Slack](https://slack.com/)
> - [Github](https://github.com/)
