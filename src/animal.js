class Animal {
    constructor(nome, tamanho, biomas, carnivoro) {
        this.nome = nome;
        this.tamanho = tamanho;
        this.biomas = biomas;
        this.carnivoro = carnivoro;
    }
  }
  
  const animais = [
    new Animal('LEAO', 3, ['savava'], true),
    new Animal('LEOPARDO', 2, ['savava'], true),
    new Animal('CROCODILO', 3, ['rio'], true),
    new Animal('MACACO', 1, ['savava', 'floresta'], false),
    new Animal('GAZELA', 2, ['savava'], false),
    new Animal('HIPOPOTAMO', 4, ['savava', 'rio'], false)
  ];
  
  export { Animal, animais };