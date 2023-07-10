function onClickFormulary(event){
    // Prevenir recarga
    event.preventDefault();
    // Comprobar que todos los input con la clase '.validar-input' no estén vacíos
    var inputs = document.querySelectorAll(".validar-input");
    for (var i = 0; i < inputs.length; i++) {
        if (inputs[i].value === '') {
          Swal.fire({
            title: 'Campos vacíos',
            text: 'Por favor, complete todos los campos.',
            icon: 'warning',
            confirmButtonText: 'Aceptar'
          });
          return;
        }
    }
    // Enviar datos
    var formulario = document.querySelector(".formulario");
    var correoUsuario = document.getElementById("correoUsuario").value;
    Swal.fire({
        width: 600,
        timerProgressBar: true,
        allowOutsideClick: false,
        allowEscapeKey: false,
        icon: 'success',
        title: 'Enviado',
        html: `Nos comunicaremos contigo a través de tu correo electrónico:<br/>${correoUsuario}`,
        showConfirmButton: false,
        timer: 3000
    })
    setTimeout(function() {
        formulario.submit();
      }, 3000);
}