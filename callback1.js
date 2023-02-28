function saludar (){//declarando la function 1
    setTimeout(function(){
        console.log("hola como estas")

        despedir()//llamando ala funcion 2
    },3000)
    

    
}
function despedir(){//declarndo la funcion dos

    console.log("ADIOS MUCHA SUETE")
}

saludar()//llamando a la funcion 1