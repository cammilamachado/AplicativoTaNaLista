
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
A equipe adota a metodologia ágil Scrum, com as seguintes funções:
- Scrum Master: Edrei Dornelas
- Product Owner: Giordano Norberto
- Equipe de Desenvolvimento:
Camila Machado
Edrei Dornelas
Giordano Norberto
Leonardo Mendes
Márcio Lucas
Tarsis Augustus
Equipe de Design: Camila Machado

Cada um dos membros da equipe assume responsabilidades específicas para garantir a entrega contínua do projeto de forma eficiente e dentro do prazo.

### Processo
O projeto é gerenciado por meio do **GitHub Projects**, permitindo o acompanhamento das tarefas e do progresso por meio de um quadro **Kanban**, que contém as seguintes colunas:

- **Backlog** – Lista de funcionalidades e melhorias a serem implementadas;
- **Em andamento** – Tarefas que estão sendo feitas;
- **Em revisão** – Itens que aguardam por uma validação;
- **Concluído** – Funcionalidades concluídas e integradas ao sistema.

A cada **sprint** (duração de 2 semanas), será revisado e definido as prioridades da próxima iteração, garantindo entregas contínuas e melhorias incrementais.

### Ferramentas
São utilizadas as ferramentas a seguir para otimizar o desenvolvimento e a colaboração:

#### Gerenciamento de Código
- **GitHub**

#### Comunicação
- **Discord**

#### Gerenciamento de Projetos
- **GitHub Projects**

#### Desenvolvimento
- **Editor de Código**: Visual Studio Code + extensões para React Native e .NET
- **Prototipagem**: Figma (para UX/UI e wireframes)
- **Banco de Dados**: SQLite (desenvolvimento) e Firebase Firestore (produção)
- **Hospedagem**: Render (para API) e Firebase (para autenticação e banco de dados)

#### Justificativa
As ferramentas foram escolhidas pela facilidade de integração, compatibilidade com as tecnologias usadas e suporte a práticas ágeis.
