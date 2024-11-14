(               helado.js                                   )
function generateInvoice() {
    // Obtener valores del formulario
    const flavor = document.getElementById('flavor').value;
    const container = document.getElementById('container').value;
    const weight = document.getElementById('weight').value;

    // Generar el texto de la factura
    const invoiceText = `Pedido: Helado de sabor ${flavor} en ${container}, ${weight}.`;

    // Mostrar la factura en el elemento con id 'invoice'
    document.getElementById('invoice').innerHTML = invoiceText;
}

y el segundo pon:           script.js

document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contactForm");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;

        if (name && email && message) {
            alert(`¡Gracias, ${name}! Tu mensaje ha sido enviado con éxito.\nTe contactaremos pronto.`);
            form.reset();
        } else {
            alert("Por favor, completa todos los campos.");
        }
    });
});
