// Questão 1 //


function calcsequenciaFibonacci(numero){
    let numero = 0 ;
    
let sequencia = [0,1];
for ( let i =0; i<=numero; i++){
    sequencia[i] = sequencia[i -1] + sequencia [i -2];
if   (numero<0); {
    
    console.log("Número Inválido", numero);
} 
 }
 return sequencia;
 const  numero = 10;
 const resultado  = calcsequenciaFibonacci(sequencia);
 console.log(resultado);

 


}


// Questão 2 //

const Letra = "A";
const quantidadedeAs = contarOcorrenciasDeA(Letra);
console.log("A Letra 'A' aparece ", quantidadedeAs, "vezes.");
function validarLetra(Letra){
    // valida a letra //
    if(letra !== "A"){
    alert("Entre com a Letra A")
    validarLetra(Letra);
    } else{
        console.log("A letra é A!");

    }
    
}
validarLetra(letra);
function contarOcorrenciasDeA(Letra){
    let contador = 0;
    for(let i=0; i<Letra.length;i++){
        if(Letra[i] === "A"){
            contador ++;
        }
    }
    return contador;
}


