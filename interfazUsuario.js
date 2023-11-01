import {categorias}  from "./carrito.js";

function ordenarPorPrecioAscendente(a, b) {
    return a.precio - b.precio;
}

function ordenarPorPrecioDescendente(a, b) {
    return b.precio - a.precio;
}

function ordenarNombreAscendente(a, b) {
    const nombreA = a.nombre.toLowerCase();
    const nombreB = b.nombre.toLowerCase();
    if (nombreA < nombreB) {
        return -1
    }
    if (nombreA > nombreB) {
        return 1
    }
    return 0;
}

function ordenarNombreDescendente(a, b) {
    const nombreA = a.nombre.toLowerCase();
    const nombreB = b.nombre.toLowerCase();
    if (nombreA > nombreB) {
        return -1;
    }
    if (nombreA < nombreB) {
        return 1;
    }
    return 0;
}

function mostrarFiltros(textIngresado) {

    contenedorFiltros.innerHTML = '';

    const cuotas = document.createElement("div");
    cuotas.innerHTML = "⭐ ¡12 cuotas sin interés!";
    cuotas.className = "text-sm font-bold mb-8"

    contenedorFiltros.appendChild(cuotas);

    const ordernarPor = document.createElement("div");
    ordernarPor.textContent = "Ordenar por...";
    ordernarPor.className = "text-sm font-bold mb-2"

    contenedorFiltros.appendChild(ordernarPor);

    const divsFiltros1 = document.createElement("div");
    divsFiltros1.className = "flex items-center mb-2";

    const labelMenorPrecio = document.createElement("label");
    labelMenorPrecio.setAttribute("for", "menorPrecio");
    labelMenorPrecio.className = "mr-2";
    labelMenorPrecio.textContent = "Menor Precio";

    const inputMenorPrecio = document.createElement("input");
    inputMenorPrecio.setAttribute("type", "radio");
    inputMenorPrecio.setAttribute("id", "menorPrecio");
    inputMenorPrecio.setAttribute("name", "orden");
    inputMenorPrecio.setAttribute("value", "menorPrecio");
    inputMenorPrecio.className = "mr-2"

    inputMenorPrecio.addEventListener('change', function () {
        if (inputMenorPrecio.checked) {
            categorias(textIngresado, 'menorPrecio');
        }
    });

    divsFiltros1.appendChild(labelMenorPrecio);
    divsFiltros1.appendChild(inputMenorPrecio);

    const divsFiltros2 = document.createElement("div");
    divsFiltros2.className = "flex items-center mb-2"

    const labelMayorPrecio = document.createElement("label");
    labelMayorPrecio.setAttribute("for", "mayorPrecio");
    labelMayorPrecio.className = "mr-2";
    labelMayorPrecio.textContent = "Mayor Precio";

    const inputMayorPrecio = document.createElement("input");
    inputMayorPrecio.setAttribute("type", "radio");
    inputMayorPrecio.setAttribute("id", "mayorPrecio");
    inputMayorPrecio.setAttribute("name", "orden");
    inputMayorPrecio.setAttribute("value", "mayorPrecio");
    inputMayorPrecio.className = "mr-2"

    inputMayorPrecio.addEventListener('change', function () {
        if (inputMayorPrecio.checked) {
            categorias(textIngresado, 'mayorPrecio');
        }
    });

    divsFiltros2.appendChild(labelMayorPrecio);
    divsFiltros2.appendChild(inputMayorPrecio);

    const divsFiltros3 = document.createElement("div");
    divsFiltros3.className = "flex items-center mb-2";

    const labelAz = document.createElement("label");
    labelAz.setAttribute("for", "a_z");
    labelAz.className = "mr-2";
    labelAz.textContent = "Ordenar A - Z";

    const inputAz = document.createElement("input");
    inputAz.setAttribute("type", "radio");
    inputAz.setAttribute("id", "a_z");
    inputAz.setAttribute("name", "orden");
    inputAz.setAttribute("value", "a_z");
    inputAz.className = "mr-2";

    inputAz.addEventListener('change', function () {
        if (inputAz.checked) {
            categorias(textIngresado, 'nombreAscendente');
        }
    });

    divsFiltros3.appendChild(labelAz);
    divsFiltros3.appendChild(inputAz);

    const divsFiltros4 = document.createElement("div");
    divsFiltros4.className = "flex items-center mb-2";

    const labelZa = document.createElement("label");
    labelZa.setAttribute("for", "z_a");
    labelZa.className = "mr-2";
    labelZa.textContent = "Ordenar Z - A";

    const inputZa = document.createElement("input");
    inputZa.setAttribute("type", "radio");
    inputZa.setAttribute("id", "z_a");
    inputZa.setAttribute("name", "orden");
    inputZa.setAttribute("value", "z_a");
    inputZa.className = "mr-2";

    inputZa.addEventListener('change', function () {
        if (inputZa.checked) {
            categorias(textIngresado, 'nombreDescendente');
        }
    });

    divsFiltros4.appendChild(labelZa);
    divsFiltros4.appendChild(inputZa);

    contenedorFiltros.appendChild(divsFiltros1);
    contenedorFiltros.appendChild(divsFiltros2);
    contenedorFiltros.appendChild(divsFiltros3);
    contenedorFiltros.appendChild(divsFiltros4);

    contenedorFiltros.classList.remove('hidden');
}


export { ordenarPorPrecioAscendente, ordenarPorPrecioDescendente, ordenarNombreAscendente, ordenarNombreDescendente, mostrarFiltros}