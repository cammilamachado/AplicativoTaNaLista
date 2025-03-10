# Especificações do Projeto

<span style="color:red">Pré-requisitos: <a href="01-Documentação de Contexto.md"> Documentação de Contexto</a></span>

O cotidiano de muitas pessoas, especialmente de estudantes universitários e moradores de repúblicas, é marcado pela falta de organização na gestão de compras domésticas. A partir deste, o projeto "Compras App" tem como objetivo entender as necessidades dos usuários e mapear como a solução proposta pode atender a essas demandas de forma eficiente. Para isso, serão abordados os seguintes pontos:

### 1. Personas: 
Será criada uma representação dos usuários típicos que utilizarão o "Compras App". O diagrama de personas ajudará a ilustrar as características, necessidades e comportamentos dos usuários, a fim de garantir que o aplicativo seja desenvolvido com foco no seu público-alvo.

### 2. Histórias de Usuários: 
Serão descritas as funcionalidades do aplicativo do ponto de vista dos usuários. As histórias de usuários servirão para mapear as interações que os usuários terão com o sistema, destacando suas necessidades e objetivos.

### 3. Indicadores de desempenho: 
Avaliar o sucesso do aplicativo e da gestão das compras, com foco em como os usuários estão utilizando a ferramenta e se estão atingindo seus objetivos.

### 4. Requisitos Funcionais: 
Serão listados os requisitos essenciais que o aplicativo deve atender para garantir que os usuários possam atingir seus objetivos de maneira eficiente. Isso incluirá funcionalidades como criar, editar, compartilhar e visualizar listas de compras, além de permitir a organização e a gestão de itens.

### 5. Requisitos Não Funcionais: 
Serão descritos os requisitos relacionados ao desempenho, segurança, usabilidade e confiabilidade do aplicativo. Estes requisitos garantirão que o "Compras App" funcione de maneira otimizada e segura, proporcionando uma experiência satisfatória para o usuário.

### 6. Restrições do Projeto: 
Serão destacadas as limitações ou condições que precisam ser consideradas durante o desenvolvimento do aplicativo, como o uso das tecnologias React Native para o desenvolvimento multiplataforma (Android e iOS), a necessidade de uma interface simples e intuitiva e a compatibilidade com dispositivos de diferentes especificações

### 7. Diagramas de casos de uso: 
Representar as interações entre os usuários e o sistema, identificando as funcionalidades essenciais que o aplicativo deve oferecer.

### 8. Gerenciamento de projeto: 
Planejar e controlar todas as etapas do desenvolvimento do aplicativo, assegurando que o projeto seja concluído dentro do prazo, custo e qualidade desejados.
### Ferramentas:
Projects: Ferramentas de gestão de tarefas que permitem a organização de atividades, criação de sprints e acompanhamento do progresso da equipe.
Metodologia Ágil (Scrum ou Kanban): Usada para garantir entregas incrementais e contínuas, com feedback constante.

### 9. Gerenciamento de tempo: 
O gerenciamento de tempo é fundamental para garantir que todas as tarefas do projeto sejam realizadas dentro do prazo estipulado, otimizando a produtividade da equipe e evitando atrasos no desenvolvimento do "Compras App". Para alcançar isso, são utilizadas as seguintes ferramentas e técnicas:
### Ferramentas Utilizadas:
Pomodoro: Técnica que divide o trabalho em intervalos de tempo curtos (geralmente 25 minutos), seguidos de uma pausa curta. Isso ajuda a manter o foco e a evitar a procrastinação.
Time Tracking (Toggl, Harvest): Ferramentas que permitem o rastreamento do tempo gasto em cada tarefa, possibilitando ajustes no planejamento e assegurando que os prazos sejam cumpridos.

### 10. Gerenciamento de equipe: 
Garantir que a equipe de desenvolvimento esteja utilizando seu tempo de forma eficiente e que as atividades sejam concluídas dentro do prazo estipulado.

### 11. Gestão de orçamento: 
Controlar o custo total do desenvolvimento do aplicativo, garantindo que os recursos sejam alocados adequadamente e dentro do orçamento previsto.

## Personas

### Persona 1:
João, o Estudante Universitário Organizado. 22 anos, estudante de Engenharia, mora sozinho em um apartamento, utiliza como tecnologia: Smartphone Android, Laptop, Apps de produtividade. 

#### Objetivos:
Organizar suas compras de maneira eficiente, evitando desperdícios e mantendo o orçamento controlado.
Controlar o que já possui em casa, para não comprar produtos desnecessários.
Planejar suas compras com antecedência, para garantir que não faltem itens essenciais durante a semana.

#### Frustrações:
Esquece o que tem em casa, acabando por comprar mais do que precisa.
Se sente perdido ao tentar organizar as compras no meio de uma rotina agitada de estudos.
Dificuldade em controlar os gastos mensais, já que o orçamento é apertado.

#### Como o "Compras App" pode ajudar:

O aplicativo permite que ele registre e visualize suas listas de compras e quantidades necessárias.
A funcionalidade de controle de validade ajuda a evitar desperdício de alimentos.
A organização das listas por categorias e o compartilhamento com outros membros da casa facilita a comunicação e o controle.

### Persona 2:
Maria, a moradora de república conectada, 20 anos, estudande de medicina, mora em uma república com 4 colegas, utiliza como tecnologia: Smartphone iOS, Apps de comunicação (WhatsApp, Facebook), GPS.

#### Objetivos:
Garantir que todas as necessidades da casa sejam atendidas sem causar conflitos entre os colegas de república.
Manter o orçamento compartilhado equilibrado, dividindo as compras de forma justa.
Evitar o acúmulo de produtos, já que a casa tem espaço limitado.

#### Frustrações:
Muitas vezes, os colegas compram os mesmos itens sem saber que outros já compraram.
Há pouca comunicação sobre o que precisa ser comprado, resultando em desperdício de alimentos.
Dificuldade em fazer um controle efetivo do que foi comprado e quem pagou por cada item.

#### Como o "Compras App" pode ajudar:
O aplicativo permite que Maria e seus colegas compartilhem listas de compras em tempo real, evitando compras duplicadas.
O sistema de orçamento compartilhado ajuda a garantir que todos contribuam igualmente para as compras, com um histórico de gastos acessível.
As notificações de validade e estoque ajudam a manter o controle dos itens na casa.

### Persona 3:
Lucas, o Jovem Profissional Empreendedor, 25 anos, Freelancer de Design Gráfico, Mora sozinho em um pequeno apartamento, tecnologia utilizada: Smartphone Android, Laptop, Apps de produtividade e finanças.

#### Objetivos:
Economizar dinheiro, mantendo um controle rigoroso sobre suas finanças pessoais e evitando desperdícios com compras desnecessárias.
Organizar suas compras de forma prática, já que ele tem pouco tempo livre devido ao trabalho.
Ter uma ferramenta que ajude a planejar as compras para as semanas seguintes, sem perder tempo no supermercado.

#### Frustrações:
Muitas vezes compra itens impulsivamente e se esquece do que já tem em casa.
Sente que seu orçamento é apertado e não sabe como controlar melhor suas despesas com alimentação.
Demora muito para decidir o que comprar e o que está faltando em casa.

#### Como o "Compras App" pode ajudar:
O "Compras App" oferece a função de adicionar itens à lista de compras rapidamente, ajudando Lucas a economizar tempo.
A função de controle de estoque e validade permite que ele tenha um panorama de tudo o que está em casa e o que precisa ser reabastecido.
O aplicativo também pode gerar relatórios de gastos, ajudando Lucas a manter seu orçamento sob controle.

## Histórias de Usuários

#### Histórias de Usuários para Funcionalidades de Listas de Compras
|EU COMO... `PERSONA`| QUERO/PRECISO ... `FUNCIONALIDADE` |PARA ... `MOTIVO/VALOR`                 |
|--------------------|------------------------------------|----------------------------------------|
|João  | Registrar itens em uma lista de compras        | Não esquecer de comprar os itens que preciso e organizar minha compra de forma eficiente               |
|Maria       | Criar uma lista de compras compartilhada              | Dividir as compras com meus colegas de república e garantir que todos saibam o que falta |
|Lucas       | Adicionar rapidamente itens à minha lista de compras                 | Evitar esquecer o que preciso comprar quando estou ocupado |

#### Histórias de Usuários para Controle de Orçamento e Despesas
|EU COMO... `PERSONA`| QUERO/PRECISO ... `FUNCIONALIDADE` |PARA ... `MOTIVO/VALOR`                 |
|--------------------|------------------------------------|----------------------------------------|
|João  | Controlar meu orçamento de compras               |Evitar gastar mais do que o planejado e garantir que minhas compras fiquem dentro do orçamento
|Maria       | Dividir o valor total das compras entre os membros da república |Garantir que todos contribuam de maneira justa e evitem conflitos sobre quem pagou o quê
|Lucas       | Visualizar o histórico de gastos |Entender onde posso economizar e evitar gastos desnecessários

#### Histórias de Usuários para Controle de Estoque e Validade
|EU COMO... `PERSONA`| QUERO/PRECISO ... `FUNCIONALIDADE` |PARA ... `MOTIVO/VALOR`                 |
|--------------------|------------------------------------|----------------------------------------|
|João  | Registrar a validade dos produtos em minha casa               |Evitar desperdício de alimentos e controlar o que precisa ser consumido mais rapidamente
|Maria       | Verificar a validade dos produtos em nossa casa |Garantir que não compramos itens desnecessários e evitar que os alimentos estraguem
|Lucas       | Receber notificações sobre a validade dos produtos |Planejar minhas compras de forma mais eficiente e evitar que alimentos se percam

#### Histórias de Usuários para Funcionalidades de Compartilhamento e Colaboração
|EU COMO... `PERSONA`| QUERO/PRECISO ... `FUNCIONALIDADE` |PARA ... `MOTIVO/VALOR`                 |
|--------------------|------------------------------------|----------------------------------------|
|João  | Compartilhar minha lista de compras com outros usuários               |Facilitar a comunicação e colaboração em compras familiares ou entre amigos
|Maria       | Compartilhar minha lista de compras com outros usuários              | Garantir que todos saibam o que está faltando e evitar compras duplicadas |


#### Histórias de Usuários para Notificações e Alertas
|EU COMO... `PERSONA`| QUERO/PRECISO ... `FUNCIONALIDADE` |PARA ... `MOTIVO/VALOR`                 |
|--------------------|------------------------------------|----------------------------------------|
|João  | Receber notificações sobre o que está faltando em minha lista de compras              |Lembrar-me de comprar itens essenciais que eu possa ter esquecido
|Lucas       | Receber alertas sobre produtos que estão perto da data de validade | Evitar desperdício de alimentos e consumir o que está prestes a vencer |

## Indicadores de Desempenho

Apresente aqui os principais indicadores de desempenho e algumas metas para o processo. Atenção: as informações necessárias para gerar os indicadores devem estar contempladas no diagrama de classe. Colocar no mínimo 5 indicadores. 

Usar o seguinte modelo: 

![Indicadores de Desempenho](img/02-indic-desemp.png)
Obs.: todas as informações para gerar os indicadores devem estar no diagrama de classe a ser apresentado a posteriori. 

## Requisitos

### Requisitos Funcionais

|ID    | Descrição do Requisito  | Prioridade |
|------|-----------------------------------------|----|
|RF-001| Permitir que o usuário cadastre produtos | ALTA | 
|RF-002| Emitir um relatório de gastos   | MÉDIA |
|RF-003|Permitir que o usuário classifique os produtos por validade   | ALTA |
|RF-004| Permitir receber e emitir notificações sobre produtos faltantes  | ALTA |
|RF-005| Receber alertas de produtos que estão perto da validade   | ALTA  |
|RF-006|Permitir que o usuário compartilhe a lista com outros usuários   |  ALTA  |
|RF-007| Visualizar o histórico de gastos   | MÉDIA |
|RF-008| Adicionar rapidamente itens à minha lista de compras   | ALTA  |
|RF-009| Permitir que o usuário defina um orçamento mensal para compras| MÉDIA |
|RF-010| Permitir que o sistema sugira produtos com base no histórico de compras   | MÉDIA |
|RF-011| Permitir a criação de múltiplas listas de compras   | ALTA |
|RF-012| Permitir que o usuário adicione observações ou notas aos itens da lista   | MÉDIA |
|RF-013| Permitir que o usuário altere o status de um item  | ALTA |

### Requisitos Não Funcionais

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-001| O sistema deve ser responsivo para rodar em um dispositivos móvel | ALTA | 
|RNF-002| O sistema deve ser responsivo para rodar em dispositivos WEB|  MÉDIA | 
|RNF-003| Deve processar requisições do usuário em no máximo 3s |  ALTA | 
|RNF-004| Usabilidade |  ALTA | 
|RNF-005| Segurança |  MÉDIA | 
|RNF-006| Escalabilidade |  MÉDIA | 
|RNF-007| Compatibilidade |  ALTA | 
|RNF-008| Acessibilidade |  MÉDIA | 
|RNF-009| Manutenibilidade |  MÉDIA | 
|RNF-010| Confiabilidade |  ALTA | 

## Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir.

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|01| O projeto deverá ser entregue até o final do semestre |
|02| Não pode ser desenvolvido um módulo de backend        |

Enumere as restrições à sua solução. Lembre-se de que as restrições geralmente limitam a solução candidata.

> **Links Úteis**:
> - [O que são Requisitos Funcionais e Requisitos Não Funcionais?](https://codificar.com.br/requisitos-funcionais-nao-funcionais/)
> - [O que são requisitos funcionais e requisitos não funcionais?](https://analisederequisitos.com.br/requisitos-funcionais-e-requisitos-nao-funcionais-o-que-sao/)

## Diagrama de Casos de Uso

![ComprasApp - Diagrama de caso de uso](https://github.com/user-attachments/assets/2f1730ce-c07a-4858-b8f2-45a4be8ecf41)

# Gerenciamento de Projeto

De acordo com o PMBoK v6 as dez áreas que constituem os pilares para gerenciar projetos, e que caracterizam a multidisciplinaridade envolvida, são: Integração, Escopo, Cronograma (Tempo), Custos, Qualidade, Recursos, Comunicações, Riscos, Aquisições, Partes Interessadas. Para desenvolver projetos um profissional deve se preocupar em gerenciar todas essas dez áreas. Elas se complementam e se relacionam, de tal forma que não se deve apenas examinar uma área de forma estanque. É preciso considerar, por exemplo, que as áreas de Escopo, Cronograma e Custos estão muito relacionadas. Assim, se eu amplio o escopo de um projeto eu posso afetar seu cronograma e seus custos.

## Gerenciamento de Tempo

Com diagramas bem organizados que permitem gerenciar o tempo nos projetos, o gerente de projetos agenda e coordena tarefas dentro de um projeto para estimar o tempo necessário de conclusão.

![Diagrama de rede simplificado notação francesa (método francês)](img/02-diagrama-rede-simplificado.png)

O gráfico de Gantt ou diagrama de Gantt também é uma ferramenta visual utilizada para controlar e gerenciar o cronograma de atividades de um projeto. Com ele, é possível listar tudo que precisa ser feito para colocar o projeto em prática, dividir em atividades e estimar o tempo necessário para executá-las.

![Gráfico de Gantt](img/02-grafico-gantt.png)

## Gerenciamento de Equipe

![image](https://github.com/user-attachments/assets/496f65bc-80f9-48f2-b9ae-a5677f6b5283)

![image](https://github.com/user-attachments/assets/0e9f234c-6268-4f53-b757-e24367dc8acf)

## Gestão de Orçamento
#### Recursos Humanos

![image](https://github.com/user-attachments/assets/3adae013-bcce-4002-b8e1-75ee53a56d9f)
#### Hardware

![image](https://github.com/user-attachments/assets/7ed5ac6d-65e9-4c3d-8281-aa6608ec0ae2)
#### Rede

![image](https://github.com/user-attachments/assets/1c1a88bd-0d1e-41e9-88dd-a3e1452a13b7)
#### Software

![image](https://github.com/user-attachments/assets/b59f828a-415a-48ff-8d03-499067aeab67)
#### Serviços

![image](https://github.com/user-attachments/assets/721d3200-d562-428b-933c-381b49bd8f67)
#### Resumo do Orçamento

![image](https://github.com/user-attachments/assets/22dcb557-57df-4d07-a848-c4ad9b323b96)



