import { animais } from "./animal";

class Validacoes {
    constructor(animaisValidos, biomas) {
        this.animaisValidos = animaisValidos;
        this.biomas = biomas;
    }

    validarAnimal(nomeAnimal) {
        const animalValido = this.animaisValidos.some(animal => animal.nome === nomeAnimal);
        return animalValido ? null : { erro: "Animal inválido" };
    }

    validarQuantidade(quantidade) {
        return quantidade > 0 ? null : { erro: "Quantidade inválida" };
    }

    validarRecintoCrocodilo(nomeAnimal, quantidade) {
        const animalCrocodilo = this.animaisValidos.find(animal => animal.nome === nomeAnimal);
        const tamanhoAnimal = animalCrocodilo.tamanho; 
        const bioma = this.biomas.find(bioma => bioma.bioma === 'rio'); 
        let espacoOcupado = bioma.animais.reduce((total, animal) => total + (animal.tipo === nomeAnimal ? animal.quantidade * tamanhoAnimal : 0), 0);
        let espacoRestante = bioma.tamanho - espacoOcupado;
    
        if (quantidade * tamanhoAnimal > espacoRestante) {
            return {
                erro: "Não há recinto viável",
            };
        } 
        
            else 

        {
            bioma.animais.push({ tipo: nomeAnimal, quantidade: quantidade });
            const novoEspacoRestante = espacoRestante - (quantidade * tamanhoAnimal);
    
            return {
                mensagem: `Recinto ${bioma.numero} (espaço livre: ${novoEspacoRestante} total: ${bioma.tamanho})`,
                recintosViaveis: [`Recinto ${bioma.numero} (espaço livre: ${novoEspacoRestante} total: ${bioma.tamanho})`]
            };
        }
    }

    validarRecintoMacaco(nomeAnimal, quantidade) {
        const animalMacaco = this.animaisValidos.find(animal => animal.nome === nomeAnimal);
        const tamanhoAnimal = animalMacaco.tamanho;
    
        if (nomeAnimal.toUpperCase() === 'MACACO') {
            const savana = this.biomas.find(bioma => bioma.bioma.toUpperCase() === 'SAVAVA');
            const floresta = this.biomas.find(bioma => bioma.bioma.toUpperCase() === 'FLORESTA');
            const savanaRio = this.biomas.find(bioma => bioma.bioma.toUpperCase() === 'SAVAVAERIO');
            
            const espacoOcupadoSavana = savana.animais.reduce((total, animal) => 
                total + (animal.tipo.toUpperCase() === 'MACACO' ? animal.quantidade * tamanhoAnimal : 0), 2);
            
            const espacoOcupadoFloresta = floresta.animais.reduce((total, animal) => 
                total + (animal.tipo.toUpperCase() === 'MACACO' ? animal.quantidade * tamanhoAnimal : 0), 2);
            
            const espacoOcupadoSavanaERio = savanaRio.animais.reduce((total, animal) => 
                total + (animal.tipo.toUpperCase() === 'MACACO' ? animal.quantidade * tamanhoAnimal : 0), 5);
            
            const espacoRestanteSavana = savana.tamanho - espacoOcupadoSavana;
            const espacoRestanteFloresta = floresta.tamanho - espacoOcupadoFloresta;
            const espacoRestanteSavanaERio = savanaRio.tamanho - espacoOcupadoSavanaERio;
            const recintosViaveis = [];
    
            if (quantidade * tamanhoAnimal > espacoRestanteSavana && 
                quantidade * tamanhoAnimal > espacoRestanteFloresta &&
                quantidade * tamanhoAnimal > espacoRestanteSavanaERio) {
                return {
                    erro: "Não há recinto viável",
                };
            }
            
            if (quantidade * tamanhoAnimal <= espacoRestanteSavana) {
                recintosViaveis.push(`Recinto ${savana.numero} (espaço livre: ${espacoRestanteSavana} total: ${savana.tamanho})`);
            }
    
            if (quantidade * tamanhoAnimal <= espacoRestanteFloresta) {
                recintosViaveis.push(`Recinto ${floresta.numero} (espaço livre: ${espacoRestanteFloresta} total: ${floresta.tamanho})`);
            }
    
            if (quantidade * tamanhoAnimal <= espacoRestanteSavanaERio) {
                recintosViaveis.push(`Recinto ${savanaRio.numero} (espaço livre: ${espacoRestanteSavanaERio} total: ${savanaRio.tamanho})`);
            }
    
            return {
                mensagem: `Recintos disponíveis: Savana (espaço livre: ${espacoRestanteSavana}), Floresta (espaço livre: ${espacoRestanteFloresta}), Savana e Rio (espaço livre: ${espacoRestanteSavanaERio})`,
                recintosViaveis
            };
        }
    }
    
 }   


export { Validacoes };
