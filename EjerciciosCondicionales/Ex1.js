/**
 * Programa que pide tres notas y hace la media, dependiendo de la media mostrará un texto u otro
 */
let nota1, nota2, nota3, media;
nota1 = parseFloat(prompt("Primera nota"));
nota2 = parseFloat(prompt("Segunda nota"));
nota3 = parseFloat(prompt("Tercera nota"));
media = (nota1+nota2+nota3)/3;

if (media < 5){
    document.write("Has suspendido");
}
else if (media >= 5 && media < 7){
    document.write("Has aprobado");
}
else if (media >= 7 && media <= 10){
    document.write("Notable");
}


