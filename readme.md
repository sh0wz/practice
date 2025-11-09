# 🧭 Roteiro de Estudo — Boas Práticas de Orientação a Objetos em JavaScript

Este roteiro de 6 semanas tem como objetivo aprimorar a escrita de código JavaScript orientado a objetos (OO) com foco em **boas práticas, padrões de projeto, reusabilidade e arquitetura limpa**.  
Cada semana combina teoria, prática e leituras recomendadas.

---

## 🗓️ Semana 1 — Fundamentos e Mentalidade OO no JavaScript

**Objetivo:** compreender como o modelo de objetos do JavaScript realmente funciona.

### Conceitos

- Prototipagem vs. Classes (`prototype`, `__proto__`, `class`, `extends`)
- Encapsulamento (atributos privados, closures)
- Polimorfismo e sobrescrita
- Composição vs Herança (quando evitar `extends`)

### Prática

- Crie uma classe `Animal` com subclasses `Cachorro` e `Gato`.
- Teste métodos sobrescritos (`falar()`, `comer()`).
- Reescreva o mesmo exemplo usando **composição** (ex: função `fazBarulho()` injetada).

### Leitura

- [MDN - Classes e Herança](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Classes)
- Livro: _You Don’t Know JS Yet – Objects & Classes_ (Kyle Simpson)

---

## 🗓️ Semana 2 — SOLID e Boas Práticas

**Objetivo:** escrever código orientado a objetos coeso, desacoplado e extensível.

### Conceitos

- Princípios **SOLID** aplicados a JavaScript:
  1. Single Responsibility
  2. Open/Closed
  3. Liskov Substitution
  4. Interface Segregation
  5. Dependency Inversion
- Coesão e acoplamento
- Injeção de dependência

### Prática

- Implemente um pequeno módulo de **processamento de pagamentos**:
  - `PaymentProcessor` (interface abstrata)
  - `CreditCardProcessor`, `PixProcessor`
  - `PaymentService` usando inversão de dependência
- Aplique o princípio _Open/Closed_ — adicione um novo método de pagamento sem alterar os existentes.

### Leitura

- Livro: _Clean Code_ — Capítulos sobre Classes, Funções e Objetos
- Artigo: [SOLID principles in JavaScript (FreeCodeCamp)](https://www.freecodecamp.org/news/solid-principles-for-javascript-developers/)

---

## 🗓️ Semana 3 — Padrões de Criação

**Objetivo:** dominar padrões de criação e fábricas para instanciar objetos de forma limpa.

### Conceitos

- Factory Pattern
- Singleton Pattern
- Builder Pattern
- (Opcional) Object Pool

### Prática

- Crie uma `UserFactory` que instancia diferentes tipos de usuários (`Admin`, `Cliente`, `Convidado`).
- Crie um `ConfigBuilder` que gera objetos de configuração com métodos encadeáveis.

### Leitura

- Livro: _Learning JavaScript Design Patterns_ (Addy Osmani) — Capítulos de Criação
- [Refactoring Guru – Factory e Builder Patterns](https://refactoring.guru/design-patterns)

---

## 🗓️ Semana 4 — Padrões Estruturais e Comportamentais

**Objetivo:** entender como organizar, compor e alterar comportamento dinamicamente.

### Conceitos

- Adapter Pattern — unificar interfaces diferentes
- Decorator Pattern — adicionar funcionalidades sem alterar código original
- Strategy Pattern — trocar comportamentos dinamicamente
- Observer Pattern — base para eventos e reatividade

### Prática

- Crie um sistema de **notificações** com Strategy (e-mail, SMS, push).
- Implemente um **Logger** com Decorator (adicionando timestamp, cor, etc.).
- Faça um **Observer** simples para eventos de login/logout.

### Leitura

- Livro: _Learning JavaScript Design Patterns_ — Capítulos Estruturais e Comportamentais
- [Refactoring Guru – Strategy, Decorator, Observer](https://refactoring.guru/design-patterns/catalog)

---

## 🗓️ Semana 5 — Arquitetura e Clean Code

**Objetivo:** elevar o nível de organização e reuso.

### Conceitos

- Arquitetura em camadas (Domain / Service / Infra)
- Clean Architecture e Domain-Driven Design (DDD)
- Separação de responsabilidades: controllers, services e models
- Testabilidade e modularização

### Prática

Crie um mini-projeto: **Gerenciador de Tarefas**

- **Camada de domínio:** entidades `Tarefa`, `Usuario`
- **Camada de serviço:** regras de negócio
- **Camada de persistência:** repositório em memória
- Aplique inversão de dependência para alternar entre repositório em memória e arquivo

### Leitura

- Livro: _Clean Architecture_ (Robert C. Martin)
- Artigo: [Applying Clean Architecture in Node.js](https://khalilstemmler.com/articles/software-design-architecture/organizing-app-logic-with-clean-architecture/)

---

## 🗓️ Semana 6 — Refinamento, Testes e Reuso

**Objetivo:** consolidar, testar e refatorar com foco em código limpo e reutilizável.

### Conceitos

- Testes unitários e mocks (Jest ou Vitest)
- Refatoração contínua
- Reutilização e versionamento de módulos
- Documentação (JSDoc ou TypeScript)

### Prática

- Teste as classes criadas nas semanas anteriores.
- Identifique e elimine duplicações.
- Reestruture pastas, isolando domínios e módulos reutilizáveis.

### Leitura

- Livro: _Refactoring_ (Martin Fowler)
- _Clean Code for JavaScript_ — [Refactoring Guru](https://refactoring.guru/refactoring)

---

## 🧰 Bônus (opcional)

- Estude **TypeScript**: tipagem e interfaces fortalecem o design OO.
- Use **ESLint + Prettier + EditorConfig** para manter consistência.
- Leia código de bibliotecas JS bem estruturadas, como:
  - [Three.js](https://threejs.org/)
  - [Phaser](https://phaser.io/)
  - [Sequelize ORM](https://sequelize.org/)

---

## teste bloco de codigo

`código inline`

```js
// bloco de código com sintaxe destacada
function ola() {
  console.log("Olá Mundo");
}
```

## Imagem

![Status](https://img.shields.io/badge/status-em%20desenvolvimento-yellow)
![Versão](https://img.shields.io/badge/vers%C3%A3o-1.0-blue)

aqui eu vou botar um texto

![Texto alternativo](./assets/imagem.jpg)

## 📎 Licença

Você pode utilizar, adaptar e compartilhar este roteiro livremente, desde que mantenha os créditos.

---

> **Autor:** Alvaro Lima
> **Propósito:** aprimorar boas práticas de desenvolvimento em JavaScript orientado a objetos.
