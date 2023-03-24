class Animal{
    constructor(especie, edad, color){
        this.especie = especie;
        this.edad = edad;
        this.color = color;
        this.informacion = `Soy ${this.especie}, tengo ${this.edad} años y soy de color ${this.color}`;
    }
    verInfo = ()=>{
        document.write(this.informacion+ "<br>")
     }
}

class Perro extends Animal{
    constructor(especie, edad, color ,peso){
        super (especie, edad, color);
        this.peso = peso;
    }
    cagar = ()=>{
        alert("Me cague")
    }
}

const firulais = new Perro("bicho",6,"marron", 45);
firulais.cagar();
firulais.verInfo();