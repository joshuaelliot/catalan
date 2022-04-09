function comprobar() {
    var edad = prompt ("cual es tu edad ?");
  if (edad < 18 ) {
      document.getElementById("demo").innerHTML =
      "A tus  " + edad + " años  de edad no deberias estar en este tipo de sitios web";
    }else if (edad > 18 ){ document.getElementById("demo").innerHTML = "con "+ edad +"  años de edad  es apto para poder entrar y disfrutar de este contenido "; }
  }  