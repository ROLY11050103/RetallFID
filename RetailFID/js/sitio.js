background: url(owl.video.play.png) no-repeat; 176
//Iniciamos WOW
new WOW().init();

//Iniciamos Smoothscroll
new SmoothScroll('a[href*="#"]').init({
    speed: 1000, // Integer. How fast to complete the scroll in milliseconds
    offset: 60, // Integer. How far to offset the scrolling anchor location in pixels
});

/*---------------------------------
    OCULTAR Y MOSTRAR BOTON IR ARRIBA
 ----------------------------------*/
$(function () {
    $(window).scroll(function () {
        var scrolltop = $(this).scrollTop();
        if (scrolltop >= 50) {
            $(".ir-arriba").fadeIn();
        } else {
            $(".ir-arriba").fadeOut();
        }
    });

});
/*---------------------------------
   CABECERA ANIMADA
 ----------------------------------*/
$(window).scroll(function () {
    var nav = $('.encabezado');
    var scroll = $(window).scrollTop();

    if (scroll >= 80) {
        nav.addClass("fondo-menu");
    } else {
        nav.removeClass("fondo-menu");
    }
});

emailjs.init("oYxY7tC57Pd-si_fu"); // Reemplaza con tu clave pública

document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita que el formulario se recargue al enviarlo

    // Usando EmailJS para enviar el mensaje
    emailjs.sendForm("tu_service_id", "tu_template_id", this)
        .then(function(response) {
            console.log("Mensaje enviado exitosamente", response);
            var resultDiv = document.getElementById("result");
            resultDiv.innerText = "Mensaje enviado con éxito.";  // Muestra el mensaje en la página
            resultDiv.className = "alert success";  // Establece el estilo de éxito
            resultDiv.style.display = "block";  // Muestra la alerta

            // Ocultar el mensaje después de 3 segundos
            setTimeout(function() {
                resultDiv.style.display = "none";  // Oculta la alerta
            }, 3000);  // 3000 milisegundos = 3 segundos
        }, function(error) {
            console.log("Error al enviar el mensaje", error);
            var resultDiv = document.getElementById("result");
            resultDiv.innerText = "Hubo un error al enviar el mensaje.";  // Muestra un error
            resultDiv.className = "alert error";  // Establece el estilo de error
            resultDiv.style.display = "block";  // Muestra la alerta

            // Ocultar el mensaje después de 3 segundos
            setTimeout(function() {
                resultDiv.style.display = "none";  // Oculta la alerta
            }, 3000);  // 3000 milisegundos = 3 segundos
        });
});
