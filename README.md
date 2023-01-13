# Cadastro de carro

**Requisitos funcionais**

- [ ] Deve ser possível cadastrar um novo carro
- [ ] Deve ser possível listar todas as categorias

**Regras de negócio**

- [ ] Não deve ser possível cadastrar um carro com uma placa já existente
- [ ] Não deve ser possível alterar a placa de um carro para uma placa já existente
- [ ] O carro deve ser cadastrado, por padrão, como disponível
- [ ] O usuário responsável pelo cadastro deve ser um administrador

# Listagem de carros

**Requisitos funcionais**

- [ ] Deve ser possível listar os carros disponíveis
- [ ] Deve ser possível listar todos os carros disponíveis pelo nome da categoria
- [ ] Deve ser possível listar todos os carros disponíveis pelo nome da marca
- [ ] Deve ser possível listar todos os carros disponíveis pelo nome da carro

**Regras de negócio**

- [ ] O usuário não precisa estar logado no sistema

# Cadastro de especificação do carro

**Requisitos funcionais**

- [ ] Deve ser possível cadastrar uma especificação para um carro
- [ ] Deve ser possível listar todas as especificações
- [ ] Deve ser possível listar todos os carros

**Regras de negócios**

- [ ] Não deve ser possível cadastrar uma especificação para um carro não cadastrado
- [ ] Não deve ser possível cadastrar uma especificação já existente para o mesmo carro
- [ ] O usuário responsável pelo cadastro deve ser um administrador

# Cadastro de imagens do carro

**Requisitos funcionais**

- [ ] Deve ser possível cadastrar a imagem do carro
- [ ] Deve ser possível listar todos os carros

**Requisito não funcional**

- [ ] Utilizar o Multer para upload de arquivos

**Regras de negócio**

- [ ] O usuário deve poder cadastrar mais de uma imagem para o mesmo carro
- [ ] O usuário responsável pelo cadastro deve ser um administrador

# Aluguel de carro

**Requisitos funcionais**

- [ ] Deve ser possível cadastrar um aluguel

**Regras de negócio**

- [ ] O aluguel deve ter duração mínima de 24 horas
- [ ] Não deve ser possível cadastrar um novo aluguel caso já exista um aberto para o mesmo usuário
- [ ] Não deve ser possível cadastrar um novo aluguel caso já exista um aberto para o mesmo carro
