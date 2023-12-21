{
    {
        {
            {
                 var sera = 'Será???'
                 console.log(sera)
            }
        }
    }
}

console.log(sera) 
/* nesse caso onde não é uma função a váriavel pode 
ser acessada tanto dentro como fora do 
bloco de comandos*/

function teste() {
    var local = 123
    console.log(local)
}
teste()
console.log(local)
/* nesse caso irá gerar um erro pois quando se trata
de uma função a variável nãoo pode ser acessada fora
do bloco de comandos */


