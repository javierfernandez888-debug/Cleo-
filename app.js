(function inicializarDesdeConfig() {
    const { menuItems, delivery, whatsapp } = window.APP_CONFIG;
    const menuRows = document.getElementById("menuRows");
    const direccionRow = document.getElementById("direccionRow");
    const whatsappDisplay = document.getElementById("whatsappDisplay");

    menuRows.innerHTML = menuItems.map((item) => `
        <div class="pizza-row">
            <label>${item.name} - $${item.price}</label>
            <input type="number" id="${item.id}" min="0" value="0" step="1">
        </div>
    `).join("");

    direccionRow.innerHTML = `
        <label>${delivery.label}</label>
        <input type="text" id="direccion" placeholder="${delivery.placeholder}">
    `;

    whatsappDisplay.textContent = whatsapp.display;
})();

function enviarPedido() {
    const { menuItems, whatsapp } = window.APP_CONFIG;
    let direccion = document.getElementById("direccion").value.trim();

    let mensaje = "Hola, quiero pedir:\n";
    let total = 0;

    menuItems.forEach((item) => {
        const cantidad = parseInt(document.getElementById(item.id).value) || 0;
        if (cantidad > 0) {
            mensaje += `${cantidad} x ${item.name} ($${item.price})\n`;
            total += cantidad * item.price;
        }
    });

    if (total === 0) {
        alert("Por favor seleccioná al menos una pizza.");
        return;
    }
    if (!direccion) {
        alert("Por favor ingresá tu dirección de entrega.");
        return;
    }

    mensaje += `\nTotal: $${total}\n`;
    mensaje += `Dirección: ${direccion}`;

    let url = `https://wa.me/${whatsapp.phone}?text=${encodeURIComponent(mensaje)}`;
    window.open(url, "_blank");
}
