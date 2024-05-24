const edad = 18//prompt('escriba su edad:')

switch (edad>=18 ) {
    case true:
        console.log(`su edad es ${edad}`)
        let carreras = [ 
            {
             nombreCarrera : "Gran Premio de Mónaco",
             pilotos:[
                {nombre: 'piloto1', cuota: 1.5},
                {nombre: 'piloto2', cuota: 2.3},
                {nombre: 'piloto3',cuota: 1.8}
                ]
            },
            {
                nombreCarrera : "Gran Premio de Italia",
                pilotos:[
                   {nombre: 'piloto4', cuota: 1.1},
                   {nombre: 'piloto5', cuota: 2.2},
                   {nombre: 'piloto6',cuota: 3.3}
                   ]
            },
            {
                nombreCarrera : "Gran Premio de Alemania",
                pilotos:[
                   {nombre: 'piloto7', cuota: 1.2},
                   {nombre: 'piloto8', cuota: 2.3},
                   {nombre: 'piloto9',cuota: 3.8}
                   ]
            }
            
        ] 
        console.log(`AQUI PUEDE VER CARRERAS Y PILOTOS DISPONIBLES:`,carreras)
        function resultadosCarrera(){

            const ganador = Math.floor(Math.random()*(2+1)+0)
            console.log(ganador)
        
            let second = ganador 
            console.log(second)
            if (second==0 ||second==1){
                second = ++second                                      
            }else{          
                second = second - Math.floor(Math.random()*(2)+1)   
            }    
            console.log(second)
            console.log(' AQUI ESTAN LOS CAMPONES Y SUBCAMPEONES DE CADA CARRERA:')
        
            let carrera = null
            let campeon = null
            let subcampeon = null
            let campeonC = null
            let subcampeonC = null
            for (let i=0; i<carreras.length;i++){
        
                carrera = carreras[i].nombreCarrera
                campeon = carreras[i].pilotos[ganador].nombre
                campeonC = carreras[i].pilotos[ganador].cuota
                subcampeon = carreras[i].pilotos[second].nombre
                subcampeonC = carreras[i].pilotos[second].cuota
                
                
                console.log( carrera, 'campeon:',campeon, campeonC, 'subcampeon:',subcampeon,subcampeonC ) 
            }
            
            return campeon
        }
        console.log(resultadosCarrera())
        function apuestaUser(pilotoApuesta) {// Función que recibe nombre de piloto y devuelve cuota
            carreras.forEach (carrera => {
                carrera.pilotos.forEach(piloto => {
                
                  if (piloto.nombre === pilotoApuesta) {//falta bucle de apuesta invalida
                 
                       cuota = piloto.cuota
                  }   
                })
            })
                    return cuota
        }
        console.log(apuestaUser('piloto3'))
        do {
            dineroApuesta = 10000//prompt('cuando desea apostar')

            if ( isNaN(dineroApuesta) || dineroApuesta<10000  || dineroApuesta>1000000 ){
            alert ('valor no valido')
            }
        }
        while ( isNaN(dineroApuesta) || dineroApuesta<10000  || dineroApuesta>1000000 )
            
        console.log(`Su apuesta :${dineroApuesta}`)

        let tipoDeApuesta
        do {
            tipoDeApuesta = 2//prompt('Que tipo de apuesta desea hacer:\n Ganador de la carrera (1) \n Posiciones exactas (2) ')
            if ( isNaN(tipoDeApuesta) || (tipoDeApuesta!=1 && tipoDeApuesta!=2)){
                alert ('tipo de apuesta no valido')
            }else if(tipoDeApuesta==1){
                console.log('TIPO DE APUESTA: 1. Ganador de la carrera')
                
                pilotoApuesta = 'piloto1'//prompt('Escriba el piloto por el que desae apostar')
                cuota = apuestaUser(pilotoApuesta)
                console.log(pilotoApuesta)
                console.log(cuota)
                
                resultadosCarrera()

                if(resultadosCarrera()==pilotoApuesta){

                    dineroGanado = dineroApuesta * apuestaUser("piloto1")
                    console.log(`usted gano: ${dineroGanado}`)
                }


            }else if(tipoDeApuesta==2){
                console.log('TIPO DE APUESTA: 2. Posiciones exactas')

                pilotoApuesta1 = 'piloto2'//prompt('Escriba el primer piloto por el que desae apostar')
                cuota = apuestaUser(pilotoApuesta1)
                console.log(pilotoApuesta1)
                console.log(cuota)

                pilotoApuesta2 = 'piloto1'//prompt('Escriba el segundo piloto por el que desae apostar')
                cuota = apuestaUser(pilotoApuesta2)
                console.log(pilotoApuesta2)
                console.log(cuota)

                

            
            }
        }
        while ( isNaN(tipoDeApuesta) || (tipoDeApuesta!=1 && tipoDeApuesta!=2))

        break


        
    case false:
        console.log('usted no tiene edad para apostar')
        break         
}
