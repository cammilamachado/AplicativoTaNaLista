# Plano de Testes de Funcionalidades e Usabilidade

O teste de usabilidade permite avaliar a qualidade da interface com o usuário da aplicação interativa. O Plano de Testes de Software é gerado a partir da especificação do sistema e consiste em casos de testes que deverão ser executados quando a implementação estiver parcial ou totalmente pronta.

As referências abaixo irão auxiliá-lo na geração do artefato "Plano de Testes de Usabilidade".

> **Links Úteis**:
> - [Teste De Usabilidade: O Que É e Como Fazer Passo a Passo (neilpatel.com)](https://neilpatel.com/br/blog/teste-de-usabilidade/)
> - [Teste de usabilidade: tudo o que você precisa saber! | by Jon Vieira | Aela.io | Medium](https://medium.com/aela/teste-de-usabilidade-o-que-voc%C3%AA-precisa-saber-39a36343d9a6/)
> - [Planejando testes de usabilidade: o que (e o que não) fazer | iMasters](https://imasters.com.br/design-ux/planejando-testes-de-usabilidade-o-que-e-o-que-nao-fazer/)
> - [Ferramentas de Testes de Usabilidade](https://www.usability.gov/how-to-and-tools/resources/templates.html)

## 1. Identificação do Plano
- **Projeto:** Compras App  
- **Versão:** 1.0  
- **Data:** 16/04/2025  
- **Plataformas:** Android, iOS, Web (secundário)  
- **Tecnologia:** React Native  

---

## 2. Objetivo do Teste
Verificar se o sistema atende aos requisitos funcionais e não funcionais descritos, validando as principais funcionalidades de cadastro, compartilhamento, alertas e gerenciamento de listas de compras.

---

## 3. Escopo

### Incluído:
- Cadastro e gerenciamento de listas  
- Compartilhamento de listas  
- Alertas de validade e produtos faltantes  
- Sugestão de produtos com base no histórico  
- Definição de orçamento  
- Autenticação e gestão de usuários  
- Relatórios de gastos

### Excluído:
- Integrações com sistemas de terceiros (por enquanto)  

---

## 4. Tipos de Teste
- Teste Funcional  
- Teste de Usabilidade  
- Teste de Performance (tempo de resposta)  
- Teste de Compatibilidade (em diferentes dispositivos)  

---

## 5. Critérios de Aceitação
- Todas as funcionalidades de prioridade **ALTA** devem ter **100% de aprovação nos testes**  
- Funcionalidades de prioridade **MÉDIA** devem ter pelo menos **80% de aprovação**, sem bugs críticos

---

## 6. Critérios de Saída
- Conclusão de todos os testes planejados  
- Correção de todos os bugs críticos e altos  
- Aprovação das funcionalidades por usuários finais  

---

## 7. Ambiente de Teste
- **Dispositivos Android:** Android 11+, 13  
- **Dispositivos iOS:** iOS 15+  
- **Ambiente de testes:** Emuladores, dispositivos reais, navegador para versão web  

---

## 8. Equipe Envolvida
- **Desenvolvedores:** Equipe de Dev  
- **Usuários para teste:** 6 moradores de república universitária (2 grupos de 3)

---

## 9. Ferramentas Utilizadas
- **Gerenciamento de testes:** TestRail  
- **Testes automatizados:** Jest + React Native Testing Library  
- **Testes de API:** Postman ou Insomnia
- **Simulação de push notification:** Firebase Emulator Suite  

---

# 🧪 Cenários de Teste Selecionados

```markdown
| ID     | Cenário de Teste                                  | Requisitos Relacionados       | Descrição                                                                      |
|--------|---------------------------------------------------|-------------------------------|--------------------------------------------------------------------------------|
| CT-001 | Cadastro de produto                               | RF-001                        | Usuário cadastra um novo produto com nome, categoria, quantidade e validade.   |
| CT-002 | Compartilhamento de lista                         | RF-006                        | Usuário compartilha uma lista com outro usuário da república.                  |
| CT-003 | Alerta de produto próximo da validade             | RF-005                        | Usuário recebe notificação push sobre item que vence em 2 dias.                |
| CT-004 | Sugestão de itens com base no histórico           | RF-010                        | Usuário digita “le” e o app sugere “leite” baseado em compras anteriores.      |
| CT-005 | Classificação por validade                        | RF-003                        | Lista é ordenada automaticamente com base na data de validade.                 |
| CT-006 | Criação de múltiplas listas                       | RF-011                        | Usuário cria uma lista chamada “Feira” e outra chamada “Supermercado”.         |
| CT-007 | Relatório de gastos mensal                        | RF-002, RF-007                | App exibe relatório com totais gastos por categoria e por mês.                 |
| CT-008 | Cadastro e autenticação de usuário                | RF-XXX (implícito)            | Novo usuário se cadastra com e-mail e senha e faz login com sucesso.           |
| CT-009 | Definir orçamento mensal                          | RF-009                        | Usuário define limite de R$300/mês e recebe aviso ao ultrapassar.              |
| CT-010 | Notificação de produto faltante                   | RF-004                        | App alerta que o estoque de arroz está zerado.                                 |
| CT-011 | Adição rápida de itens                            | RF-008                        | Usuário toca em "Adicionar rápido", digita e item é incluído instantaneamente. |
| CT-012 | Observações nos itens                             | RF-012                        | Usuário adiciona nota: “Leite desnatado, marca X” em um item.                  |
| CT-013 | Alterar status de item                            | RF-013                        | Usuário marca “comprado” em item da lista e visual vê mudança de status.       |
```

---

## 👥 Usuários Participantes dos Testes

- **Grupo A:** 3 usuários de uma república feminina (divisão de tarefas)  
- **Grupo B:** 3 usuários de uma república mista (compras coletivas)  

Esses usuários foram selecionados por representarem o público-alvo do aplicativo — jovens universitários que dividem despesas e fazem compras em grupo. O teste com eles permite validar aspectos práticos do uso colaborativo e da gestão compartilhada.

---


