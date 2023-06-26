/*de esta forma se extrae la información y la muestra tanto 
en consola como en un Alertde una este método da resultado 
con el form realizado con boostrap*/

const sendForm = (e) => {
  e.preventDefault();

  const form = new FormData(e.target);

  let messageAlert = ""

/*"forEach(value)" método de integración que extrae y me trae 
todos los items del form */

  form.forEach((value, key) => {
    console.log(key, value);
    messageAlert = `${messageAlert}
    ${key} ${value}`;
  });

  alert(messageAlert)

};

/* tenemos otra forma de realizarlo pero no funciona con el form
confeccionado con boostrap y es el siguiente*/

/* en el form no puede falatar en los INPUT, la etiqueta "name" que debe de tener 
el mismo nombre que el "for" del LABEL y agregamos el " * " en el LABEL "First Name *",
para que los campos sean requeridos y la etiqueta "required" que es para hacer un campo validado
y dentro del <form> agregamos una propiedad "onSubmit" para que se ejecute una funcion
.js que extraiga los datos en el (event)


const sendForm = (e) => {
    e.preventDefault();/*para que se propage la recarge de la info del form

    ----"debugger" parasaber que contiene el evento, se debe de ejecutar y verlo en 
    la consola, con esto podemos ver las propiedades del evento -----

const form = new FormData(e.target) ---- en esta variable se extraen los datos ----

const firstName = form.get("firstName"); ---- extrasigo ls informción con "form.get"
                                        y la almaceno en una variable "firstName" ----
const lastName = form.get("lastName");
const eMailAddress = form.get("eMailAddress");
const phoneNumber = form.get("phoneNumber");
-----  "form.get"  para obtener  la información
    "form.set"  para modificar la información -----

alert(`
Nombre: ${firstName}
Apellido: ${lastName}
E Mail: ${eMailAddress}
Teléfono: ${phoneNumber}
`);
------ con esto hacemos un ALERT para que me aparezca la info, le agrego
interpolación de string (facilita a hacer la cadena de datos)"Nombre: ${firstName}" ------

console.log("firstName", firstName);
console.log("lastName", lastName);
console.log("eMailAddress", eMailAddress);
console.log("phoneNumber", phoneNumber);
};
----- esta forma es un poco larga de hacer, a pesar que con tan sólo una linea de código
podemos extraer los datos, pero se hace larga y tediosa pq hay que llamar dato por dato -----
*/




