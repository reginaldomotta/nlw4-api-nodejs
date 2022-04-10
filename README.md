# Resumo NLW4 - Trilha NodeJS

Dev: Reginaldo Motta 

obs: alguns códigos estão comentados para meu entendimento durante as aulas.



## Aula 01

1. Início da criação da API para NPS (Net Promoter Score) onde calcula uma métrica de lealdade de clientes;
2. Instruções e configuração do ambiente;
3. Criação da rota POST;

## Aula 02

1. Configurando o SQLite para utilizar na API como banco de dados;
2. Utilização TypeORM para mapeamento objeto-relacional;
3. Utilização do formato de identificador uuid;
4. Criação da Migration do usuário;
5. Criação da Entidade (model) do usuário;
6. Criação da Rota do usuário;

## Aula 03

1. Refatoração do Controller do usuário para utilização de repositório;
2. Criação do repositório do usuário;
3. Criação da Migration das pesquisas (surveys);
4. Criação da entidade (model) da pesquisa
5. Criação do repositório das pesquisas;
6. Criação do Controller das pesquisas;
7. Instrução sobre testes automatizados e utilização do framework JEST com banco de dados - teste;
8. Criação e execução dos teste de integração do usuário e pesquisas; 

## Aula 04

1. Criação da migration surveysUser;
2. Criação da entidade (model) SurveysUser;
3. Criação do repositório SurveysUserRepository;
4. Criação do Controller para envio do email;
5. Atualização das Rotas incluindo o envio do email;
6. Criação do serviço SendMail com a biblioteca nodemailer;
7. Utilização do serviço ETHEREAL como fake SMTP;

## Aula 05

1. Refatoração do SendMail;
2. Criação do controle de respostas do usuário;
3. Validação do usuário;
4. Criação do método para alterar a nota da pesquisa;
5. Criação do controle para calcular NPS;
6. Utilização da biblioteca Yup Validation para validação;