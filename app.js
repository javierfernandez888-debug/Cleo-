function enviarPedido() {
    let muzza = parseInt(document.getElementById("muzza").value) || 0;
    let jamon = parseInt(document.getElementById("jamon").value) || 0;
    let roquefort = parseInt(document.getElementById("roquefort").value) || 0;
    let direccion = document.getElementById("direccion").value.trim();

    let mensaje = "Hola, quiero pedir:\n";
    let total = 0;

    if (muzza > 0) {
        mensaje += `${muzza} x Muzza ($6700)\n`;
        total += muzza * 6700;
    }
    if (jamon > 0) {
        mensaje += `${jamon} x Jamón y Morrón ($7700)\n`;
        total += jamon * 7700;
    }
    if (roquefort > 0) {
        mensaje += `${roquefort} x Roquefort ($7700)\n`;
        total += roquefort * 7700;
    }

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

    let url = `https://wa.me/543444497985?text=${encodeURIComponent(mensaje)}`;
    window.open(url, "_blank");
}
