class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome
        this.idade = idade
        this.tipo = tipo
    }

    ataque(){
        if (this.tipo ===  'mago') {
            return 'magia';
        }
        else if(this.tipo === 'guerreiro') {
            return 'espada';
        }
        else if(this.tipo === 'monge') {
            return 'marciais';
        }
        else if(this.tipo === 'ninja') {
            return 'shuriken';
        }
    }
    atacar(){
        const tipoAtaque = this.ataque();
        console.log(`o ${this.tipo} atacou usando ${tipoAtaque}`)
    }
}

let heroi1 = new Heroi('Dexxter', '18', 'mago');
let heroi2 = new Heroi('Batata', '25', 'ninja');

heroi1.atacar()
heroi2.atacar()