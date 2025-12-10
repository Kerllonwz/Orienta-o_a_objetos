// Classe abstrata: Animal
class Animal {
  constructor(name) {
    if (new.target === Animal) {
      throw new Error('Animal é uma classe abstrata e não pode ser instanciada diretamente.');
    }
    this.name = name;
  }
  speak() {
    return `${this.name} faz um som.`;
  }
  info() {
    return `${this.constructor.name} - nome: ${this.name}`;
  }
}

// Duas classes que herdam de Animal
class Dog extends Animal {
  constructor(name, breed) {
    super(name);
    this.breed = breed;
  }
  speak() { return `${this.name} diz: Au au!`; }
  info() { return `${super.info()}, raça: ${this.breed}`; }
}

class Cat extends Animal {
  constructor(name, color) {
    super(name);
    this.color = color;
  }
  speak() { return `${this.name} diz: Miau!`; }
  info() { return `${super.info()}, cor: ${this.color}`; }
}

// Pelo menos três instâncias de objetos
const dog1 = new Dog('Rex', 'Labrador');
const cat1 = new Cat('Mimi', 'Preto');
const dog2 = new Dog('Bolt', 'Pastor Alemão');

const instances = [dog1, cat1, dog2];

const outputEl = document.getElementById('output');
instances.forEach(inst => {
  const p = document.createElement('p');
  p.textContent = `${inst.info()} — fala: ${inst.speak()}`;
  outputEl.appendChild(p);
  console.log(inst.info(), inst.speak());
});
