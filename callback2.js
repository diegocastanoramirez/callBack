//delcarando la function principal
//un parametro de la funcion principal es el callback
function principal(numeros,callback){
    setTimeout(function(){
        let suma = 0
        numeros.forEach(numero=>suma =suma +numero)
        callback(suma) //llamando al callback 
    },5000)
   
}

///llamando a la funcion principal 
let arreglo =[1,2,3,4,5]
principal(arreglo,function(suma){//declarando el callback
    console.log("hola soy calback")
    let operacion= suma*100
    console.log(`la sumatoria final es ${operacion}`)
})