# Registro de Testes de Software

<span style="color:red">Pré-requisitos: <a href="04-Projeto de Interface.md"> Projeto de Interface</a></span>, <a href="08-Plano de Testes de Software.md"> Plano de Testes de Software</a>

Esta documentação tem como objetivo apresentar uma visão clara da confiabilidade e estabilidade das funcionalidades de cadastro e login do Tá na Lista!, a princípio. A seguir, estão os objetivos, resultados esperados, observações e a conclusão geral dos registros de testes.

# Cadastro / Login

## Teste de Cadastro

### Objetivo 

Verificar se um usuário pode se cadastrar com sucesso ao fornecer todas as informações necessárias.

### Resultado Esperado 

O usuário é cadastrado com sucesso e redirecionado para a página inicial para efetuar login.

### Observação 

A senha está bloqueada, porque os screenshots não são permitidos por motivos de segurança.

<p align="center">
  <img src="./img/Cadastro_Sucesso.jpg" alt="Cadastro" width="35%" />
  <img src="./img/Sucesso_Cadastro.jpg" alt="Sucesso" width="35%" />
</p>

### Conclusão

Após a realização do teste, foi concluído com sucesso o cadastro do usuário, pois as credencias fornecidas estavam corretas. O sistema gera um alerta de confirmação e redireciona o usuário para a página inicial, ou seja, os resultados indicam que a funcionalidade de cadastro está operando conforme o esperado, o que proporciona uma excelente experiência aos usuários.

## Teste de Cadastro com E-mail Inválido

### Objetivo 

Verificar se o aplicativo Tá na Lista! valida corretamente o formato do endereço de e-mail.

### Resultado Esperado

O aplicativo exibe uma mensagem de erro, pois o formato é inválido e, assim, não permite o cadastro.

<p align="center">
  <img src="./img/Erro_Email.jpg" alt="Email" width="35%" />
</p>

### Conclusão

Após a realização do teste, foi identificado que a funcionalidade para formatação incorreta de e-mail funciona conforme esperado e exibe um alerta ao usuário. Entretanto, o alerta é genérico e não fornece a mensagem de erro específica para esse caso. Dessa forma, esse resultado mostra a necessidade de uma melhoria na experiência do usuário. 

## Teste de Login

### Objetivo 

Se um usuário pode fazer login com sucesso ao fornecer credenciais válidas.

### Resultado Esperado 

O usuário é autenticado com sucesso e redirecionado para o menu principal do aplicativo.

### Observação 

O menu principal está sendo finalizado, no momento para este teste o usuário é redirecionado para a página inicial. 

<p align="center">
  <img src="./img/Login.jpg" alt="Login" width="35%" />
  <img src="./img/Login2.jpg" alt="Login2" width="35%" />
</p>

### Conclusão

O teste confirmou que a funcionalidade de login opera conforme o esperado, permitindo o acesso com credenciais válidas e redirecionando corretamente o usuário para a tela de menu principal.

## Teste de Login com Credenciais Inválidas

### Objetivo 

Testar se o sistema reconhece e responde corretamente a dados de login inválidos.

### Resultado Esperado 

O aplicativo informa que os dados inseridos são inválidos e impede o acesso à conta.

<p align="center">
  <img src="./img/Login_Erro.jpg" alt="Login" width="35%" />
</p>

### Conclusão

A tentativa de acesso com senha incorreta foi corretamente impedida pelo sistema, que apresentou uma notificação de erro apropriada. Esses resultados demonstram que o processo de autenticação responde de maneira eficaz a credenciais inválidas.

# Menu Lateral

### Objetivo 

Fornecer opções adicionais para o usuario.

### Resultado Esperado 

  ![print 1 menu lateral](https://github.com/user-attachments/assets/869ffc52-f563-46ee-9791-81552d305ac4)
  ![print 1 menu lateral modo claro](https://github.com/user-attachments/assets/a15670ee-c53e-48f0-bdd0-0ec3fa20788a)

# Criar Lista

### Objetivo 

Fornecer ao usuario a função de criar uma nova lista.

### Resultado Esperado 

![print 1 criar lista](https://github.com/user-attachments/assets/1aac518c-7942-4a5e-8773-f8237c71eb8d)

### Observação

### Conclusão

# Entrar Lista

Fornecer ao usuario a função de entrar em uma lista previamente criada.

### Objetivo 

### Resultado Esperado 

  ![print 1 juntar-se a lista](https://github.com/user-attachments/assets/f5a2bd1a-7580-4fca-8022-2ab5deb60743)

### Observação

### Conclusão

# Feedback

### Objetivo 

O usuario é capaz de gerar uma "resposta de retorno" para aplicação.

### Resultado Esperado 

  ![tela 1 ajuda feedback](https://github.com/user-attachments/assets/77f8ca28-f16f-4318-b6e6-01cb8373b4bc)

### Observação

### Conclusão

# Sobre

### Objetivo 

Objetivo da organização.

### Resultado Esperado 

  ![tela 1 sobre](https://github.com/user-attachments/assets/df33b49d-532c-496d-b9dc-5b3eb01de188)

### Conclusão

# Homepage do visitante

### Objetivo 

Essa é a homepage que o usuario padrão será redirecionado após realizar login.

### Resultado Esperado 

  ![print 1 menu](https://github.com/user-attachments/assets/8ce86f73-4279-4f1b-8e85-e36b6d3bf1bb)

### Conclusão

# Estoque

### Objetivo 

A funcionalidade do estoque, como ela vai ser e um exemplo da adição de itens;

### Resultado Esperado 

  ![print 1 tela de estoque - Copia](https://github.com/user-attachments/assets/f595f756-676b-4833-9df8-cdb2383082fe)

### Conclusão

![print 2 tela estoque](https://github.com/user-attachments/assets/7d49065c-6828-4084-989f-4d87ea3f82a4)

# Cronograma

A funcionalidade de atribuir uma tarefa a algum participante é atribuida paralelamente ao cronograma;

### Objetivo 

### Resultado Esperado 

  ![print 1 tela cronograma](https://github.com/user-attachments/assets/3669cb67-0456-4f67-ae4e-090b1b7fe665)

### Conclusão

![print 2 tela cronograma](https://github.com/user-attachments/assets/c77ecb7c-4a30-4d2c-a7ed-606eacc39572)

# Votação

### Objetivo 

A funcionalidade votação tem como propósito fornecer o usuario administrador a opção de criar enquetes para discussões.

### Resultado Esperado 

  ![print 1 tela votacao](https://github.com/user-attachments/assets/3d19a78d-90ea-4523-b0e0-464306eac706)

### Conclusão

  ![print 2 tela votacao](https://github.com/user-attachments/assets/817e8725-c7e0-4852-b4e8-e6b38fccbb9b)


# Controle de gastos

### Objetivo

Gera um metódo simples para controle dos gastos dos participantes;

### Resultado Esperado 

  ![tela 1 controle gastos](https://github.com/user-attachments/assets/7dca1d1e-94c7-4da3-a751-55cf1683d3d1)

### Conclusão

# Configurações

### Objetivo 

Permite que o usuario adapte algumas configurações do aplicativo;

### Resultado Esperado 

  ![print 1 configurações](https://github.com/user-attachments/assets/7fb227f9-6b99-4962-abe8-da97e98f2605)
88a)

### Conclusão

# Suporte

### Objetivo 

A função suporte permite que o usuario tire dúvidas acerca da aplicação.

### Resultado Esperado 

![print 1 tela suporte](https://github.com/user-attachments/assets/bd8a16ff-38d2-4d17-938e-2e09dc021a84)

### Conclusão

# Função Filtros dos itens da lista

### Objetivo 

Os itens que forem adicionados a lista terão adicionalmente opções de filtros que o usuario pode selecionar;

### Resultado Esperado 

![Itens da lista](https://github.com/user-attachments/assets/66065822-05ef-4134-a7bc-ed61ac10fa9b)

### Conclusão

![filtro itens da lista](https://github.com/user-attachments/assets/2b8091e3-4139-45cf-91f1-ca8745efc0e5)




