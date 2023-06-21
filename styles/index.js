function login(Send) {
    // alert('Felicitaciones haz dado click al boton: ' + nombre)
  
    const valueConfirm = confirm("DATOS INGRESADOS");
  
    let messageResult = "";
  
    if (valueConfirm) {
      messageResult = "verdadero";
    } else {
      messageResult = "falso";
    }
  
    console.log("El resultado fue: " + messageResult);
  }



/*document.querySelector("form")
  .addEventListener("submit", e => {
    e.preventDefault()
    const data = Object.fromEntries( 
        new FormData(e.target)
    )
    alert(JSON.stringify(data))
  })*/