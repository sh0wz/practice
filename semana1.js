// Conceitos
// -Prototipagem vs. Classes (prototype, __proto__, class, extends)
// -Encapsulamento (atributos privados, closures)
// -Polimorfismo e sobrescrita
// -“Composição vs Herança” (quando evitar extends)

// Prática
// -Crie uma classe Animal com subclasses Cachorro, Gato.
// -Teste métodos sobrescritos (falar(), comer()).
// -Reescreva o mesmo exemplo usando composição (ex: função fazBarulho() injetada).

class Animal {
  constructor(nome) {
    this.nome = nome;
  }

  falar() {
    console.log(`${this.nome} faz um barulho.`);
  }

  comer() {
    console.log(`${this.nome} come.`);
  }
}

class Cachorro extends Animal {
  falar() {
    console.log(`${this.nome} lati`);
  }
}

class Gato extends Animal {
  falar() {
    console.log(`${this.nome} mia`);
  }

  comer() {
    console.log(`${this.nome} derrama o pote`);
  }
}

function getProtoCustom(object) {
  return {
    proto() {
      console.log("proto:", Object.getPrototypeOf(object));
      return Object.getPrototypeOf(object);
    },
  };
}

function logDir(object) {
  return {
    dir() {
      console.dir(object, { depth: null });
    },
  };
}

function logar(object) {
  return {
    log() {
      console.log("logado:", object);
    },

    log2() {
      console.log("testando compisicao log2");
    },
  };
}

function compositionInfo(param) {
  const object = param;

  return {
    ...getProtoCustom(object),
    ...logDir(object),
    ...logar(object),
  };
}

const oCachorro = new Cachorro("Luke");
const oGato = new Gato("Satanas");

const composition = compositionInfo(oCachorro);

composition.log(oCachorro);
composition.dir(oGato);
composition.proto(oGato);
composition.log2(oGato);

//oCachorro.comer();
//oCachorro.falar();

//oGato.falar();
