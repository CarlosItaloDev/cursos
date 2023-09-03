/*
Tabuada

multuplicador x número = resultado;
multuplicador x 0 = resultado;
multuplicador x 1 = resultado;
...
multuplicador x 9 = resultado;
*/

const multiplicador  = 7;

let i = 0;

for(i = 0; i<=9; i++) {
    let calc = multiplicador * i;
    console.log(`${multiplicador} x ${i} = ${calc}.`)
}