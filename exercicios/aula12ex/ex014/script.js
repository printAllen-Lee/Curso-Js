function hours () {
    var hours = document.getElementById ('hours')
 
    var date1 = new Date ()
    var gthours = date1.getHours()
    var gtminutes = date1.getMinutes()
    var gtseconds = date1.getSeconds()

        if (gthours < 10) {
            gthours = `0${gthours}`
        }
        if (gtminutes < 10) {
            gtminutes = `0${gtminutes}`
        }

        if (gtseconds < 10) {
            gtseconds =`0${gtseconds}`
        }
                
    hours.textContent = `${gthours}:${gtminutes}:${gtseconds}`
}
var tictac = setInterval (hours, 1000)
hours()

function carregar(){ 
   
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora =  data.getHours()
   
    
    if(hora >= 0 && hora <12){
        img.src= 'fotomanha.png'
        
    } else if(hora >= 12 && hora <18){
        img.src = 'fototarde.png'
       
    } else {
        img.src = 'fotonoite.png'
        
}    
    
horas = window.document.querySelector('p#hora')
if(hora >= 0 && hora <12){
   horas.innerHTML = ('Bom dia')
   
} else if(hora >= 12 && hora <18){
    horas.innerHTML=("Boa tarde")
    
} else {
    horas.innerHTML=('Boa noite')
}

}


