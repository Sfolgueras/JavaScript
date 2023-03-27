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
        //super para heredar los atributos del padre
        super (especie, edad, color);
        this.peso = peso;
    }
    //metodo propio estatico(el metodo estatico se puede invocar sin 
    //necesidad de instanciar la clase)    
    static cagar = ()=>{
        alert("Me cague")
    }
    //metodo set
    set cambioColor(newColor){
        this.color = newColor;
    }
}

const firulais = new Perro("bicho",6,"marron", 45);
firulais.cambioColor = "rosita";
Perro.cagar();
document.write(firulais.color);