# Registro de Testes de Usabilidade

Ao documentar estes testes, nosso objetivo é apresentar uma visão clara da confiabilidade e estabilidade das funcionalidades de cadastro e login do Tá na Lista!, o aplicativo é voltado à organização de listas de compras compartilhadas entre moradores de república. Esta análise destaca os pontos positivos e eventuais melhorias observadas durante os testes realizados.

Nesta documentação, trazemos os resultados obtidos e a conclusão geral. A seguir, estão os detalhes de cada cenário testado, incluindo descrição, objetivos, resultados esperados e observações relevantes.

# Part I - Cadastro / Login

## Teste de Cadastro

### Objetivo: Verificar se um usuário pode se cadastrar com sucesso ao fornecer todas as informações necessárias.

### Resultado Esperado: O usuário é cadastrado com sucesso e redirecionado para a página inicial para efetuar login.

### Observação: A senha está bloqueada, porque os screenshots não são permitidos por motivos de segurança.

<p align="center">
  <img src="./img/Cadastro_Sucesso.jpg" alt="Cadastro" width="35%" />
  <img src="./img/Sucesso_Cadastro.jpg" alt="Sucesso" width="35%" />
</p>

### Conclusão

Após a realização do teste, foi concluído com sucesso o cadastro do usuário, pois as credencias fornecidas estavam corretas. O sistema gera um alerta de confirmação e redireciona o usuário para a página inicial, ou seja, os resultados indicam que a funcionalidade de cadastro está operando conforme o esperado, o que proporciona uma excelente experiência aos usuários.

## Teste de Cadastro com E-mail Inválido

### Objetivo: Verificar se o aplicativo Tá na Lista! valida corretamente o formato do endereço de e-mail.

### Resultado Esperado: O aplicativo exibe uma mensagem de erro, pois o formato é inválido e, assim, não permite o cadastro.

<p align="center">
  <img src="./img/Erro_Email.jpg" alt="Email" width="35%" />
</p>

### Conclusão

Após a realização do teste, foi identificado que a funcionalidade para formatação incorreta de e-mail funciona conforme esperado e exibe um alerta ao usuário. Entretanto, o alerta é genérico e não fornece a mensagem de erro específica para esse caso. Dessa forma, esse resultado mostra a necessidade de uma melhoria na experiência do usuário. 


