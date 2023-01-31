const botonNumero = document.querySelectorAll('[data-botones]')
const botonOperador = document.querySelectorAll('[data-ejecutor]')
const botonIgual = document.querySelector('[data-igual]')
const botonBorrarTodo = document.querySelector('[data-eliminar-todo]')
const botonBorrar = document.querySelector('[data-borrar]')
const textoValorSuperior = document.querySelector('[data-valor-superior]')
const textoValorInferior = document.querySelector('[data-valor-inferior]')
const textoValorMedio = document.querySelector('[data-valor-medio]')
const botonEncendido = document.querySelector('[data-encendido]');

class Calculadora {
    constructor(textoValorInferior,textoValorSuperior){
        this.textoValorInferior = textoValorInferior
        this.textoValorSuperior = textoValorSuperior
        this.textoValorMedio = textoValorMedio
        this.valorInferior = ''
        this.valorSuperior = ''
        this.valorMedio = ''
        this.operador = undefined
    }

    agregarNumero(numero){
    if(numero === '.' && this.valorInferior.includes('.')) return
    this.valorInferior = this.valorInferior + numero
    }
    agregarOperador(operador){
        this.valorMedio = operador + this.valorInferior  
    };
    imprimirDisplay() {
        this.textoValorInferior.innerText = this.valorInferior;
        this.textoValorSuperior.innerText = this.valorSuperior;
        this.textoValorMedio.innerText = this.valorMedio;
    };
    borrar (){
        this.valorInferior = this.valorInferior.slice(0,-1)
    };
    elegirOperacion(operador) {
        if(this.valorInferior == '') return
        if(this.valorMedio == operador)return
        if(this.valorSuperior != '') {
            this.realizarCalculo()
            this.agregarOperador()
            this.elegirOperacion()
        }
        this.operador = operador
        this.valorSuperior = this.valorInferior
        this.valorInferior = " "
        this.valorMedio = this.operador 
    };
    realizarCalculo() {
        let resultado
        let conversionValorSuperior = parseFloat(this.valorSuperior)
        let conversionValorInferior = parseFloat (this.valorInferior)
        let conversionValorMedio = parseFloat (this.valorMedio)
        if(isNaN(conversionValorSuperior) || isNaN(conversionValorInferior)) return
        switch (this.operador) {
            case '+':
            resultado = conversionValorSuperior + conversionValorInferior
            break;
            case '-':
            resultado = conversionValorSuperior - conversionValorInferior
            break;
            case '*':
            resultado = conversionValorSuperior * conversionValorInferior
            break;
            case '/':
            resultado = conversionValorSuperior / conversionValorInferior
            break;
            case"%":
            resultado = conversionValorSuperior % conversionValorInferior
            break;
            default: return
        }
        
        this.valorInferior = resultado
        this.operador = undefined
        this.valorSuperior= ''
        this.valorMedio = ''
    };

    limpiarPantalla() {
        this.valorInferior = ''
        this.valorSuperior = ''
        this.valorMedio = ''
        this.operador = undefined
    };

    
    iniciar(){
        this.valorInferior = '';
        this.valorSuperior = '';
        this.valorMedio = '';
        this.operador = undefined;
        
        if(!botonEncendido){
            return this.valorSuperior;
        };

        do{
            return this.valorMedio = 0;
        }while(botonEncendido);
    
    }
   
};


const calculadora = new Calculadora (textoValorInferior,textoValorSuperior)

botonNumero.forEach(boton => {
    boton.addEventListener('click', () => {
        calculadora.agregarNumero(boton.innerText);
        calculadora.imprimirDisplay(); 
    });
});

botonBorrar.addEventListener('click',() => {
    calculadora.borrar();
    calculadora.imprimirDisplay();
});

botonOperador.forEach(boton => {
    boton.addEventListener('click', () => {
        calculadora.elegirOperacion(boton.innerText);
        calculadora.agregarOperador(boton.innerText);
        calculadora.imprimirDisplay(); 
    });
});

botonIgual.addEventListener('click',() => {
    calculadora.realizarCalculo();
    calculadora.imprimirDisplay();
});

botonBorrarTodo.addEventListener('click',() => {
    calculadora.limpiarPantalla();
    calculadora.imprimirDisplay();
});

botonEncendido.addEventListener('click',() => {
    calculadora.iniciar();
    calculadora.imprimirDisplay();
});
