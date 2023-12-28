let numero = 1
{
    let numero = 2
    console.log('dentro =', numero)
}
console.log('fora =', numero)
/* isso acontece porque a variável "let" respeita e 
se restringe ao escopo do bloco de comandos.*/