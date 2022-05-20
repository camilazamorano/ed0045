function a(b){
        console.log(b);
        return b*3;
    }
//console.log(a(3));

// Obtén del 1 al 255: Escribe una función que devuelve un array con todos los números del 1 al 255.

function pregunta01(){

    var arreglo = []

    for (let i = 1; i<=255; i++){

        arreglo.push(i)
    }
    return arreglo
}

//console.log(pregunta01())


// Consigue pares hasta 1000: Escribe una función que entregue la suma 
// de todos los números pares del 1 al 1000 - Puedes usar un operador de módulo para este ejercicio.

function pregunta02(){

    var total = 0

    for (let i = 1; i<=1000; i++){

        if (i % 2 == 0) {
            total = total + i
        }
    }
    return total
}
//console.log(pregunta02() )

// Suma impares hasta 5000: Escribe una función que devuelva la suma de todos 
// los números impares entre 1 y 5000 (ej: 1+3+5+...+4997+4999).

function pregunta03(){

    var total = 0

    for (let i = 1; i<=5000; i++){

        if (i % 2 !== 0) {
            total = total + i
        }
    }
    return total
}
//console.log(pregunta03())

// Itera un array: Escribe una función que devuelva la suma de 
// todos los valores dentro de un array (ej:  [1,2,5] retorna 8. [-5,2,5,12] retorna 14). 

function pregunta04(arreglo){

    var total = 0
    var n = arreglo.length

    for (let i = 0; i<n; i++){

        total = total + arreglo[i]
        
    }
    return total

}

a = [1,2,5]
b = [-5,2,5,12]

//console.log(pregunta04(a))
//console.log(pregunta04(b))


// Encuentra el mayor (max): Dado un array con múltiples valores, escribe una función 
// que devuelva el número mayor (ej: para [-3,3,5,7] el número mayor (max) es 7). 

function pregunta05(arreglo){

    var max = -1000000000000000000000000
    var n = arreglo.length

    for (let i = 0; i<n; i++){

        if (arreglo[i] > max) {
            max = arreglo[i]
        }
        
    }
    return max
}

//var a = [-3,3,5,7]
//var a = [-3,9,5,7]
//console.log(pregunta05(a))

// Encuentra el promedio (avg): Dado un array con múltiples valores, 
// escribe una función que devuelva el promedio de los valores 
// (ej: para [1,3,5,7,20] el promedio es 7.2).

function pregunta06(arreglo){

    var total = 0
    var n = arreglo.length

    for (let i = 0; i<n; i++){

        total = total + arreglo[i]
        
    }
    var promedio = total/n


    return promedio.toFixed(2)
}

//var a = [1,3,5,7,20]
var a = [1,3,5,7,20,15,32,1,23,66,15,22,8,11]
//console.log(pregunta06(a))

// Array de impares: Escribe una función que devuelva un array 
// de todos los números impares entre 1 y 50 (ej: [1,3,5, …, 47,49]). Pista: Usa el método ‘push’.

function pregunta07(){

    var impares = []

    for (let i = 1; i<=50; i++){

        if (i % 2 !== 0) {
           impares.push(i)
        }
    }
    return impares
}

// console.log(pregunta07())

// Mayor que Y: Dado un valor Y, escribe una función que toma un array y devuelve los valores mayores que Y. 
// Por ejemplo, si arr = [1,3,5,7] y Y = 3, tu función devolverá 2 (hay 2 números en el array mayores que 3, 
// esto son 5 y 7). 

function pregunta08(arreglo,y){

    var contador = 0
    var n = arreglo.length

    //paintconsole.log('Los elementos mayores que ',y,' son:')
    for (let i = 0; i<n; i++){
        if (arreglo[i] > y){
            contador = contador + 1
            console.log(arreglo[i])
        }
    }
    return contador
}

var y = 3
var arr = [1,3,5,7]
//console.log('El numéro de elementos mayores es: ', pregunta08(arr,y))

// Cuadrados: Dado un array con múltiples valores, 
// escribe una función que reemplace cada valor por el cuadrado del mismo valor 
// (ej: [1,5,10,-2] será [1,25,100,4]).

function pregunta09(arreglo){

    var n = arreglo.length

    for (let i = 0; i<n; i++){

        arreglo[i] = arreglo[i]**2

    }
    return arreglo
}

var a = [1,5,10,-2]
// console.log(pregunta09(a))


// Negativos: Dado un array con múltiples valores, escribe una función 
// que reemplace cualquier número negativo dentro del array por 0. 
// Cuando el programa esté listo, el array no debiera contener números negativos 
// (ej: [1,5,10,-2] se convertirá en [1,5,10,0]).

function pregunta10(arreglo){

    var n = arreglo.length

    for (let i = 0; i<n; i++){
        if (arreglo[i] < 0){
            arreglo[i] = 0
        }
    }
    return arreglo
}

var a = [1,5,10,-2]
// console.log(pregunta10(a))


// Max/Min/Avg: Dado un array con múltiples valores, escribe una función que 
// devuelva un nuevo array que solo contenga el valor mayor (max), menor (min) 
// y promedio (avg) del array original (ej: [1,5,10,-2] devolverá [10,-2,3.5]).

function pregunta11(arreglo){

    var total = 0
    var n = arreglo.length

    // Esta parte calcula el promedio
    for (let i = 0; i<n; i++){
        total = total + arreglo[i]
    }
    var promedio = total/n

    //Esta parte calcula el máximo y mínimo

    arreglo_ordenado = arreglo.sort((a, b) => a - b)

    console.log(arreglo_ordenado)

    min = arreglo_ordenado[0]
    max = arreglo_ordenado[n-1]

    respuesta = [max, min, promedio]
    return respuesta
}

//var a = [1,5,10,-2]

var a = [8, 50, 32, -10, 25, -14, 44]

// console.log(pregunta11(a))


// Intercambia Valores: Escribe una función que intercambie el primer 
// y el último valor de cualquier array. 
// La extensión mínima predeterminada del array es 2 (ej: [1,5,10,-2] será [-2,5,10,1]). 

function pregunta12(arreglo){ 

    var n = arreglo.length
    if (n>=2) {

        primer_elemento = arreglo[0]
        ultimo_elemento = arreglo[n-1]

        arreglo[0] = ultimo_elemento
        arreglo[n-1] = primer_elemento
    }
    return arreglo

}
var a = [1,5,10,-2]

//console.log(pregunta12(a))


// De Número a String: Escribe una función que tome un array de números y 
// reemplace cualquier valor negativo por el string ‘Dojo’. 
// Por ejemplo, dado el array = [-1,-3,2], tu función devolverá [‘Dojo’,‘Dojo’,2].

function pregunta13(arreglo){

    var n = arreglo.length

    for (let i = 0; i<n; i++){
        if (arreglo[i] < 0){
            arreglo[i] = 'Dojo'
        }
    }
    return arreglo
}

//var a = [1,5,10,-2]

var a = [-1,-3,2]
console.log(pregunta13(a))



    
