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

        do {
            dineroApuesta = prompt('cuando desea apostar')
            if ( isNaN(dineroApuesta) || dineroApuesta<10000  || dineroApuesta>1000000 ){
                alert ('valor no valido')
            }
        }
        while ( isNaN(dineroApuesta) || dineroApuesta<10000  || dineroApuesta>1000000 )
            
        console.log(`Su apuesta :${dineroApuesta}`)

        let tipoDeApuesta
        do {
            tipoDeApuesta = prompt('Que tipo de apuesta desea hacer:\n Ganador de la carrera (1) \n Posiciones exactas (2) ')
            if ( isNaN(tipoDeApuesta) || (tipoDeApuesta!=1 && tipoDeApuesta!=2)){
                alert ('tipo de apuesta no valido')
            }else if(tipoDeApuesta==1){
                console.log('TIPO DE APUESTA: 1. Ganador de la carrera')
                
                pilotoApuesta = prompt('Escriba el piloto por el que desae apostar')
                cuota = apuestaUser(pilotoApuesta)
                console.log(pilotoApuesta)
                console.log(cuota)
                
                const ganador = Math.floor(Math.random()*(2+1)+0)

                let second = ganador 

                if (second==0 ||second==1){
                    second = ++second 
                }else{
                    second = second - Math.floor(Math.random()*(2)+1)
                }

                for (let i=0; i<carreras.length;i++){

                    const carrera = carreras[i].nombreCarrera
                    const campeon = carreras[i].pilotos[ganador]
                    let subcampeon = carreras[i].pilotos[second]
                    console.log(' AQUI ESTAN LOS CAMPONES Y SUBCAMPEONES DE CADA CARRERA:')
                    console.log(carrera,campeon,subcampeon )
                }

            }else if(tipoDeApuesta==2){
                console.log('TIPO DE APUESTA: 2. Posiciones exactas')

                pilotoApuesta = prompt('Escriba el primer piloto por el que desae apostar')
                cuota = apuestaUser(pilotoApuesta)
                console.log(pilotoApuesta)
                console.log(cuota)

                pilotoApuesta = prompt('Escriba el segundo piloto por el que desae apostar')
                cuota = apuestaUser(pilotoApuesta)
                console.log(pilotoApuesta)
                console.log(cuota)
                


                const ganador = Math.floor(Math.random()*(2+1)+0)

                let second = ganador 

                if (second==0 ||second==1){
                    second = ++second 
                }else{
                    second = second - Math.floor(Math.random()*(2)+1)
                }

                for (let i=0; i<carreras.length;i++){

                    const carrera = carreras[i].nombreCarrera
                    const campeon = carreras[i].pilotos[ganador]
                    let subcampeon = carreras[i].pilotos[second]
                    console.log(' AQUI ESTAN LOS CAMPONES Y SUBCAMPEONES DE CADA CARRERA:')
                    console.log(carrera,campeon,subcampeon )
                }
            }
        }
        while ( isNaN(tipoDeApuesta) || (tipoDeApuesta!=1 && tipoDeApuesta!=2))

        break


        
    case false:
        console.log('usted no tiene edad para apostar')
        break         
}
