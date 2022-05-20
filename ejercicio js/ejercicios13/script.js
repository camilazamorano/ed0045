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
var a = [-3,9,5,7]
console.log(pregunta05(a))

// encuentra el promedio (AVG): dado un array
//con multiples valores, escribe una funcion que devuelva el promedio
//de los valores (ej: 1,3,5,7,20) el promedio es 7.2).


 function pregunta06 (arreglo){
    var total = 0
    var n = arreglo.length
    for (let i = 0; i<n; i++){
       total = total + arreglo[i]

        
    }
    var promedio = total/n

return promedio.toFixed(2)

 }

//var a [1,3,5,7,20]
var a = [1,3,5,7,20,15,32,1,23,66,15,22,8,11]

//array de impares: escribe uns funcion que devuelva un array
//de todos los numeros impares entre 1 y 50 (ej: [1,3,5,,...47,49])