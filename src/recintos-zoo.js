import { animais } from './animal';
import { Validacoes } from './validacoes';

class RecintosZoo {

    constructor() {
        this.biomas = [
            { numero: 1, bioma: 'savava', tamanho: 10, animais: [{ tipo: 'macaco', quantidade: 3 }] },
            { numero: 2, bioma: 'floresta', tamanho: 5, animais: [] },
            { numero: 3, bioma: 'savavaerio', tamanho: 7, animais: [{ tipo: 'gazela', quantidade: 1 }] },
            { numero: 4, bioma: 'rio', tamanho: 8, animais: [] },
            { numero: 5, bioma: 'savava', tamanho: 9, animais: [{ tipo: 'leão', quantidade: 1 }] }
        ];

        this.animaisValidos = animais;
        this.validacoes = new Validacoes(this.animaisValidos, this.biomas);
    }

    analisaRecintos(nomeAnimal, quantidade) {
        const erroAnimal = this.validacoes.validarAnimal(nomeAnimal);
        if (erroAnimal) {
            return erroAnimal;
        }

        const erroQuantidade = this.validacoes.validarQuantidade(quantidade);
        if (erroQuantidade) {
            return erroQuantidade;
        }
        if (nomeAnimal.toUpperCase() === 'CROCODILO') {
            return this.validacoes.validarRecintoCrocodilo(nomeAnimal, quantidade);
        }

        if (nomeAnimal.toUpperCase() === 'MACACO') {
            return this.validacoes.validarRecintoMacaco(nomeAnimal, quantidade);

        }

    }
}

export { RecintosZoo };

