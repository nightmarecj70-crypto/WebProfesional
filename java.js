/**
 * Captura la opción seleccionada en el menú desplegable y genera una redirección 
 * personalizada con un mensaje claro hacia el WhatsApp corporativo.
 */
function enviarCotizacion() {
    // Obtenemos el elemento select del DOM
    const selector = document.getElementById('tipoSitio');
    const opcionSeleccionada = selector.options[selector.selectedIndex].text;
    
    // Número telefónico destino parametrizado sin espacios
    const telefonoContacto = "522996152757";
    
    // Construimos la cadena de texto con codificación URI para evitar errores con espacios/acentos
    const mensajeBase = `¡Hola, Webprofesional! Estoy interesado en crear mi página web utilizando su sistema de creación automatizada. Me interesa el plan de: ${opcionSeleccionada}. Quedo atento a la confirmación de mis beneficios de Dominio y Actualizaciones.`;
    const mensajeCodificado = encodeURIComponent(mensajeBase);
    
    // URL de la API de WhatsApp para abrir chat directo en móviles o escritorio
    const urlWhatsApp = `https://wa.me/${telefonoContacto}?text=${mensajeCodificado}`;
    
    // Redirige al cliente a la ventana de chat para proceder con la orden
    window.open(urlWhatsApp, '_blank');
}

// Log informativo de depuración en consola
console.log("Módulo 'Java.js' compilado de forma correcta. Enlace de contacto establecido en: 299 615 2757");
