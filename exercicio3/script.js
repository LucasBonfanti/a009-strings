const frase = 'Jorge tem uma casa verde e com portão azul, com os dizeres: \"BOAS VINDAS, mas não deixe o gato sair\" '
const frase2 = frase.replace('verde','rosa').replace('azul','laranja').replace('mas não deixe o gato sair','MAS NÃO DEIXE O GATO SAIR')
const verde = frase2.includes('verde')
const laranja = frase2.includes('laranja')

console.log(`${frase2} \n${verde} \n${laranja}`)

