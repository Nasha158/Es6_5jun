function firstFunction(number1, number2) {
  let suma = number1 + number2;
  return suma;
}

function functionResta(number1, number2) {
  let resta = number1 - number2;
  return resta;
}

function functionAlert(mensaje) {
  return alert(mensaje);
}

function FunResta(number1, number2) {
  let resta = number1 - number2;
  return alert(resta);
}

function FunEdad(number) {
  let edadDelUsuario = number;
  if (edadDelUsuario < 18) {
    return alert("Ud. es Menor de Edad");
  } else {
    if (edadDelUsuario >= 18) {
      return alert("Ud. es Mayor de Edad");
    }
  }
}

function FunCompara(number1, number2) {
  
  if (number1 == number2) {
    return alert("Ambos números son iguales");
  } else {
    if (number1 < 100) {
      return alert("Number1 No cumple");
    } else {
      if (number1 >= 100) {
        return alert("Number1 > a 100");
      } else {
        if (number2 < 100) {
          return alert("Number2 No Cumple");
        } else {
          if (number2 >= 100);
          {
            return alert("Number2 > a 100");
          }
        }
      }
    }
  }
}


const FirstArrowFuction = () =>{
alert ("Mi Primera Arrow Function");
}