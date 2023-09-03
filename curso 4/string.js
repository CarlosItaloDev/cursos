//identifica o número de palavras repetidas.
//replaceAll identifica todos, replace identifica o primeiro.
const palavra = "Carlos Italo Nogueira Alves".toLowerCase().replaceAll(" ", "");
let letras = {};
let i;
for (i=0;i<palavra.length;i++) {
   if (letras[palavra[i]]) {
    letras[palavra[i]]++;
   }else{
    letras[palavra[i]] = 1;
   }
}
console.table(letras);
