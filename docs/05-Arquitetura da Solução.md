# Arquitetura da Solução

<span style="color:red">Pré-requisitos: <a href="3-Projeto de Interface.md"> Projeto de Interface</a></span>

Definição de como o software é estruturado em termos dos componentes que fazem parte da solução e do ambiente de hospedagem da aplicação.

![DEFINIÇÃO DA INTEGRAÇÃO](https://github.com/user-attachments/assets/01fb25c1-0a6b-4e85-9913-47010dc57dae)

## Diagrama de Classes

O diagrama de classes ilustra graficamente como será a estrutura do software, e como cada uma das classes da sua estrutura estarão interligadas. Essas classes servem de modelo para materializar os objetos que executarão na memória.

![Diagrama de Classes](https://github.com/user-attachments/assets/b4aac132-0732-4976-bfa3-f8ec5f5cc37d)

## Modelo ER

O Modelo ER representa através de um diagrama como as entidades (coisas, objetos) se relacionam entre si na aplicação interativa.]

![Diagrama ER](https://github.com/user-attachments/assets/d6f96ec1-9b6e-4727-9ba0-293c8137a00b)

## Esquema Relacional

O Esquema Relacional corresponde à representação dos dados em tabelas juntamente com as restrições de integridade e chave primária.
 
![Modelo Relacional](https://github.com/user-attachments/assets/588a30da-ba65-4a69-89f1-011828f8de40)

## Modelo Físico

Entregar um arquivo banco.sql contendo os scripts de criação das tabelas do banco de dados. Este arquivo deverá ser incluído dentro da pasta src\bd.

## Tecnologias Utilizadas

Descreva aqui qual(is) tecnologias você vai usar para resolver o seu problema, ou seja, implementar a sua solução. Liste todas as tecnologias envolvidas, linguagens a serem utilizadas, serviços web, frameworks, bibliotecas, IDEs de desenvolvimento, e ferramentas.

Apresente também uma figura explicando como as tecnologias estão relacionadas ou como uma interação do usuário com o sistema vai ser conduzida, por onde ela passa até retornar uma resposta ao usuário.

## Hospedagem

Explique como a hospedagem e o lançamento da plataforma foi feita.

> **Links Úteis**:
>
> - [Website com GitHub Pages](https://pages.github.com/)
> - [Programação colaborativa com Repl.it](https://repl.it/)
> - [Getting Started with Heroku](https://devcenter.heroku.com/start)
> - [Publicando Seu Site No Heroku](http://pythonclub.com.br/publicando-seu-hello-world-no-heroku.html)

## Qualidade de Software

📝 Plano de Garantia da Qualidade de Software (Compras App)
## 1. Introdução
Este documento descreve o plano de garantia da qualidade de software para o projeto Compras App, um aplicativo mobile voltado à organização de compras domésticas e compartilhamento de listas em grupo (família, república, etc). O plano é baseado nas diretrizes da norma ISO/IEC 25010:2011.

## 2. Objetivos
Garantir que o produto atenda aos requisitos dos usuários com qualidade, eficiência e segurança, respeitando os padrões internacionais, promovendo satisfação dos stakeholders e facilitando manutenções futuras.

## 3. Referências
- ISO/IEC 25010:2011 – Modelos de qualidade de sistemas e software

- IEEE 730 – Standard for Software Quality Assurance Plans

- SPICE (ISO/IEC 15504) – Avaliação de processos de software

- Documentos internos do projeto (Figma, Backlog, GitHub)

## 4. Escopo
- Aplica-se a todas as fases do desenvolvimento do aplicativo Compras App, abrangendo:

- Front-end em React Native + Expo

- Back-end em .NET Core (C#)

- Banco de dados em SQLite (desenvolvimento) e Firebase Firestore (produção)

- Hospedagem em Render / AWS

- Autenticação via Firebase Auth

## 5. Características de Qualidade Selecionadas (ISO/IEC 25010)
  
![image](https://github.com/user-attachments/assets/5a13d109-632a-4b0a-a4ac-e5c3396cda86)

## 6. Métricas de Avaliação da Qualidade

![image](https://github.com/user-attachments/assets/353f0b4b-c16e-4f9e-a126-fa694b2c7737)
  
## 7. Ações de Garantia de Qualidade
Integração contínua via GitHub Actions

Revisão de código em pull requests

Testes manuais e automatizados

Testes exploratórios com usuários reais

Prototipação no Figma com validação antes do desenvolvimento

Checklist de deploy e documentação técnica

## 8. Responsabilidades
   
![image](https://github.com/user-attachments/assets/79422a80-91e7-4a1a-b100-6fc4dc883636)
   
## 9. Ferramentas de Apoio
GitHub – Repositório e versionamento

Figma – Prototipagem UI/UX

Visual Studio Code – IDE de desenvolvimento

xUnit / NUnit – Testes unitários

Firebase – Autenticação, banco e análise

Postman / Insomnia – Testes de API

Crashlytics / TestFlight – Feedback em dispositivos

## 10. Revisão e Atualização
O plano de garantia da qualidade será revisado ao final de cada sprint e atualizado conforme mudanças no escopo, arquitetura ou feedback dos usuários.


