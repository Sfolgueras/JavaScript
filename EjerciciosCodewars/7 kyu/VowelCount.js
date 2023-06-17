//Return the number (count) of vowels in the given string. We will consider a, e, i, o, u 
//as vowels for this Kata (but not y).The input string will only consist of lower case letters and/or spaces.
function getCount(str) {
  let contador = 0;
  const vocales = ['a', 'e', 'i', 'o', 'u'];
  for (let i = 0; i < str.length; i++){
    const minusculas = str[i].toLowerCase();
    if (vocales.includes(minusculas)) {
      contador++;
    }
  }
  return contador;
}