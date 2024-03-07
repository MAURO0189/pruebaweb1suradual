let nombreBd = "John Doe";
let emailBd = "john.doe@example.com";
let mensajeBd = "Hola quiero contactar  contigo.";
let telefonoBd = "2558885845";
let asuntoBd = "Contacto desde la web";


let cajaNombre = document.getElementById('nombre');
let cajaEmail = document.getElementById('email');
let cajaMensaje = document.getElementById('mensaje');
let cajaTelefono = document.getElementById("telefono");
let cajaAsunto = document.getElementById("asunto");




document.getElementById('enviar').addEventListener('click', function(evento) {


    evento.preventDefault()
   
    let nombre = cajaNombre.value
    let email = cajaEmail.value
    let mensaje = cajaMensaje.value
    let telefono = cajaTelefono.value
    let asunto = cajaAsunto.value
    
    if(nombre = "" ||  email == "" || mensaje == ""  || telefono == "" || asunto=="" ) {
        Swal.fire({
            icon: "error",
            title: "All data are required",
            text: "All data are required!",
          });
     }else {
        Swal.fire({
            title: "Welcome! ",
            text: "You are successfully logged in.",
            icon: "success"
          });
    }

    if(nombreBd == cajaNombre.value && emailBd ==  cajaEmail.value && telefonoBd ==  cajaTelefono.value){
   
        Swal.fire({
            title: "Welcome! ",
            text: "You are successfully logged in.",
            icon: "success"
          }); 
    }else {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Something went wrong!",
          });
    }

    console.log('Nombre:', nombre)
    console.log('Email:', email)
    console.log('Mensaje:', mensaje)
    console.log("telefono:", telefono);
    console.log("asunto: ", asunto);

   
});
