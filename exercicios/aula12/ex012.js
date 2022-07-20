var agora = new Date()
var hora = agora.getHours()
var minutos = agora.getMinutes()
var sec = agora.getSeconds()
console.log(`A gora são  ${hora} Horas e ${minutos} e ${sec}`)
if(hora <= 12){
    console.log('Esta de manhãn Bom Dia')

}else if(hora >= 13 && hora < 17){
    console.log('Esta de Tarde Boa Tarde')

}else{
    console.log('boa noite')
}