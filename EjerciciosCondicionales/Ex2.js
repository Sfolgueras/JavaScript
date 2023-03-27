/**
 * Crear un número aleatorio entre el 1 y 20, si es par mostrar true seguido el número 
 * si es impar mostrar  false seguido del número
 */
let aleatorio = Math.floor(Math.random() * 20);
let comprobador = false;
if (aleatorio%2==0){
    comprobador = true;
    alert(comprobador);
} else{
    alert(comprobador);
}
document.write(aleatorio);