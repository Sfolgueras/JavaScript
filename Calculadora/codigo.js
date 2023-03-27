/**
 * Este programa tiene la funcionalidad de una calculadora que realiza las 4 operaciones basicas de las matematicas. Esta compuesto de HTML, CSS y JavaScript
 */
function calculadora() {
    //document.getElementById sirve para buscar y devolver un elemento HTML a traves de su id
    const numero1 = document.getElementById("1");
    const numero2 = document.getElementById("2");
    const numero3 = document.getElementById("3");
    const numero4 = document.getElementById("4");
    const numero5 = document.getElementById("5");
    const numero6 = document.getElementById("6");
    const numero7 = document.getElementById("7");
    const numero8 = document.getElementById("8");
    const numero9 = document.getElementById("9");
  }
  
  function agregarNumero(boton) {
    // busca el elemento HTML que tiene el id "resultado" y lo almacena en la variable pantalla.
    const pantalla = document.getElementById("resultado");
    //Esta línea obtiene el valor del atributo data-valor del botón que se ha presionado
    const valor = boton.getAttribute("data-valor");
    //Esta línea agrega el valor del botón presionado al contenido actual del elemento pantalla.
    pantalla.textContent += valor;
  }

  function sumar(){
    //se establece que el valor del operando1 será igual al texto contenido en el elemento con el ID resultado
        operando1 = resultado.textContent;
        operacion = "+";
        limpiar();
  }
  function restar(){
    operando1 = resultado.textContent;
    operacion = "-";
    limpiar();
  }
  function multiplicar(){
    operando1 = resultado.textContent;
    operacion = "*";
    limpiar();
  }
  function dividir(){
    operando1 = resultado.textContent;
    operacion = "/";
    limpiar();
  }
  function igual(){
   operando2 = resultado.textContent;
    operar();
  }

  function limpiar(){
    //establece el contenido con el id resultado como una cadena vacía.
    resultado.textContent= "";
  }

  function reset(){
    //restablece los valores
    limpiar();
    resultado.textContent= "";
    operando1=0;
    operando2=0;
    operacion="";
  }

  function operar(){
    let solucion = 0;
    //switch para indicar al programa que operacion realizar segun el boton pulsado
    switch(operacion){
        case "+":
            solucion = parseFloat(operando1) + parseFloat(operando2);
            break;
        case "-":
            solucion = parseFloat(operando1) - parseFloat(operando2);
            break;   
        case "*":
            solucion = parseFloat(operando1) * parseFloat(operando2);
            break;
        case "/":
            solucion = parseFloat(operando1) / parseFloat(operando2);
            break;
    }
    reset();
    resultado.textContent = solucion;
  }
  
