var idade = 16
console.log(`Voçê tem ${idade} anos!!`)
if (idade < 16){
    console.log('Não pode votar por ser menor de idade!')

}else if (idade == 16){
    console.log('voto Opicional')

}else if (idade >= 18 && idade <60) {
    console.log('Voto Obrigatorio!')
}else if (idade >= 65 ){
    console.log('Voto Opicional!')
}


