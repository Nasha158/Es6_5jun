function login(Send) {
    // Alert('Felicitaciones haz cargado tus Datos)
  
    const valueConfirm = confirm("DATOS DEL FORMULARIO");
  
    let messageResult = "";
  
    if (valueConfirm) {
      messageResult = "verdadero";
    } else {
      messageResult = "falso";
    }
  
    console.log("El resultado fue: " + messageResult);
  }


  document.querySelector("#form-container")
  .addEventListener("submit", e => {
    e.preventDefault();
    const data = Object.fromEntries(
      new FormData(e.target)
    );
    
    alert(JSON.stringify(data))
  });