//creacion clase con un constructor
class Animal{
    //constructor con los atributos
    constructor(especie, edad, color){
        this.especie = especie;
        this.edad = edad;
        this.color = color;
        this.informacion = `Soy ${this.especie}, tengo ${this.edad} años y soy de color ${this.color}`;
    }
    //creacion de metodos
    verInfo = ()=>{
        document.write(this.informacion+ "<br>")
     }
}

//instancia de la clase
let perro = new Animal("perro",6,"blanco");
let gato = new Animal("gato",1,"gris");
let cerdo = new Animal("cerdo",7,"rosa");

//utlización de metodos
perro.verInfo();
gato.verInfo();
cerdo.verInfo();