//Trabalhando com variáveis:
/*
var nome = "Alexandre Gelande";
var num1 = "32";
var num2 = "8";
var frase = "Japão é o melhor time do mundo."

//alert("Bem vindo " + nome + "!");
//alert(num1 + num2);

console.log(frase.replace("Japão", "Brasil")); //alterando string
console.log(frase.toLowerCase());
*/

//Array e dicionário:

//var lista = ['maça', 'laranja', 'pera'];
//lista.push('uva'); //adiciona
//lista.pop(); // retira
//console.log(lista.length); //quantidade de elementos
//alert(lista[1]);
//console.log(lista.reverse()); //traz os elementos ao contrario
//console.log(lista);
//console.log(lista.toString()); //transforma o array p/ string
//console.log(lista.join(' - ')); //transforma o array p/ string e altera o separador

/*
var fruta = {nome: 'maça', cor: 'vermelha'}; //dicionário
console.log(fruta);
console.log(fruta.nome);
//alert('Cor da fruta ' + fruta.cor);

var frutas = [{nome: 'maça', cor: 'vermelha'}, {nome: 'banana', cor: 'verde'}]; //coleção
console.log(frutas);
console.log(frutas[1]);
*/

//Condicionais, laços de repetição e date:
/*
var idade = prompt('Qual a sua idade?')

if(idade >= 18) alert('Maior de idade');
else alert('Menor de idade');
*/
/*
var count = 0;
while(count < 5) {
    console.log(count);
    count = count + 1;
}
*/

//for(count = 0; count <= 5; count++) console.log(count);

var d = new Date(); // data atual
console.log(d);
console.log(d.getMonth()+1); // mês atual
console.log(d.getDay()); // dia da semana
console.log(d.getDate());
console.log(d.getHours());