class contaBancaria{
    constructor(agencia,numero,tipo){
        this.agencia = agencia;
        this.numero = numero;
        this.tipo = tipo;
        this._saldo = 0;
    }

    get saldo(){
        return this._saldo
    }

    set saldo(valor){
        this._saldo = valor;
    }

    sacar(valor){
       if(valor > this._saldo){
           return 'Montante insuficiente para este saque'
       }
        this._saldo = this._saldo - valor;
        return this._saldo;

    }
    depositar(valor){
        this._saldo = this._saldo + valor;
        return this._saldo;

    }

}

class contaCorrente extends contaBancaria{
    constructor(agencia,numero,cartaoCrediro){
        super(agencia,numero);

        this.tipo = 'corrente';
        this._cartaoCrediro = cartaoCrediro;
    }

    get cartaoCrediro(){
        return this._cartaoCrediro;
    }

    set cartaoCrediro (valor){
        this._cartaoCrediro = valor;
    }
    
}

class contaPoupanca extends contaBancaria{
    constructor(agencia,numero){
        super(agencia,numero)
        this.tipo = 'poupanca';
    }

}

class contaUniversitaria extends contaBancaria{
    constructor(agencia,numero,saldo){
        super(agencia,numero,saldo)
        this.tipo = 'universitaria';
    }

    sacar(valor){
       if(valor > 500){
           return 'não pode sacar valores acima de 500 reais.'
       }
        this._saldo = this._saldo - valor;

    }

}