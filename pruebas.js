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
        subcampeon = carreras[i].pilotos[ganador].nombre
        subcampeonC = carreras[i].pilotos[second].cuota
        
        
        console.log( carrera, 'campeon:',campeon, campeonC, 'subcampeon:',subcampeon,subcampeonC ) 
    }
    console.log(campeon)

}

resultadosCarrera()
