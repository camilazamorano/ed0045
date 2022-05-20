
//calculo de area de un circulo
// area =pi*r*r


var r = 10

var pi = 3.14

var area = pi* r* r

var mensaje ="el area del circulo es:"

var calculoexitoso=true



alert(mensaje + area)

//Arrays

var ventas =[10990, 83100 , 4990, 21500, 40900]

//Objetos js

var usuario ={}

usuario ={ 
nombre: "Camila",
apellido: "Zamorano",
fallecido: false,
hijos: ['Valentina','Gabriel','Vanessa','Claudia']
}

var n = 20



for(let i= 0; i <n ;i++) {

    console.log (i)


}

n= 5
var total = 0
for (let i=0; i < n;i++){
    total = total + ventas [i]

}

//total = 0 + 10990 =10990
//total= 10990 + 83100 = 94990
//total = 94090 + 4990 = 99080
//total = 99080 + 21500 = 120580
//total = 120580 + 40900 = 161480

 //console.log (total)

 // Sentencia if..else
 
 

 var edad = 21
 var manejar = true

if (edad > 18){
    console.log("la persona es mayor de edad")
}
else if (edad == 18) {
    console.log("la persona la persona recien cumplio años, es mayor de edad")
}

else {

    console.log("la persona es menor de edad")
}


