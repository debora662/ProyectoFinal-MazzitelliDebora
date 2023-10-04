const productos = [
    {
        id: 0,
        nombre: "Soul s600",
        image: "./assets/images/auris2.webp",
        precio: 5200,
        tags: ["auriculares", "inalambricos"],
        desc: "Sumérgete en la mejor experiencia auditiva con los Auriculares inalámbricos Soul S600 AUR-BT881 en elegante combinación de rosa y gris. Diseñados pensando en tu comodidad y estilo, estos auriculares On-ear se ajustan perfectamente a tus oídos, permitiéndote disfrutar de tu música favorita durante horas sin molestias.",
        categoria: "auriculares",
        cantidad: 1,
    },
    {
        id: 1,
        nombre: "JBL Tune 510BT",
        image: "./assets/images/auris3.webp",
        precio: 7500,
        tags: ["auriculares", "inalambricos"],
        desc: "JBL, marca de renombre mundial en el mercado de audio, es desde hace más 70 años una referente por la alta calidad de sus productos. Su gama de auriculares es variada, ya que la compañía ofrece produtos in-ear, over-ear, on-ear, deportivos e inalámbricos. Cualquiera de estos es una buena opción para hacerte disfrutar de tu música preferida.",
        categoria: "auriculares",
        cantidad: 1,
    },
    {
        id: 2,
        nombre: "Noga Ng918bt",
        image: "./assets/images/auris1.webp",
        precio: 3800,
        tags: ["auriculares", "inalambricos"],
        desc: "En la calle, en el colectivo o en la oficina, tené siempre a mano tus auriculares Noga y ¡escapate de la rutina por un rato! Vas a poder disfrutar de la música que más te gusta y de tus podcasts favoritos cuando quieras y donde quieras. Al ser on-ear se apoyan en tus orejas cómodamente y ofrecen una gran calidad de sonido.",
        categoria: "auriculares",
        cantidad: 1,
    },
    {
        id: 3,
        nombre: "Yindiao A2",
        image: "./assets/images/mouse3.webp",
        precio: 5800,
        tags: ["mouse", "inalambricos"],
        desc: "Para trabajar desde casa con la computadora o aprovechar los momentos de ocio, necesitás comodidad y facilidad de movimiento.Con tu Yindiao A2 encontrá eso que buscás en un solo aparato con la mejor tecnología.",
        categoria: "mouse",
        cantidad: 1,
    },
    {
        id: 4,
        nombre: "Logitech M220",
        image: "./assets/images/mouse1.webp",
        precio: 2800,
        tags: ["mouse", "inalambricos"],
        desc: "Su diseño eficaz hace de este mouse un elemento cómodo, tambien cuenta con detección de movimiento óptico te permitirá mover el cursor de una manera más precisa y sensible",
        categoria: "mouse",
        cantidad: 1,
    },
    {
        id: 5,
        nombre: "Redragon M601WL-BA",
        image: "./assets/images/mouse2.webp",
        precio: 4100,
        tags: ["mouse", "inalambricos"],
        desc: "El sistema de detección de movimiento óptico te permitirá mover el cursor de una manera más precisa y sensible que en los sistemas tradicionales. Trabajá de forma inalámbrica y movete libremente sin ninguna interrupción..",
        categoria: "mouse",
        cantidad: 1,
    },
    {
        id: 6,
        nombre: "Noganet 78005",
        image: "./assets/images/teclado1.webp",
        precio: 5300,
        tags: ["teclado", "español"],
        desc: "Este teclado Noganet es el mejor complemento para hacer todo tipo de actividades. Es cómodo y práctico al momento de redactar documentos, navegar y hacer búsquedas por internet, ya sea en tu trabajo o en la comodidad del hogar.",
        categoria: "teclado",
        cantidad: 1,
    },
    {
        id: 7,
        nombre: "Logitech K380 QWERTY",
        image: "./assets/images/teclado2.webp",
        precio: 9800,
        tags: ["teclado", "español"],
        desc: "Innovadores en diseño y tecnología, Logitech se encarga de brindar la mejor experiencia de uso para sus usuarios. Sus teclados resaltan por ser resistentes y muy de buena calidad, por lo que podrás disfrutarlos por un largo tiempo.",
        categoria: "teclado",
        cantidad: 1,
    },
    {
        id: 8,
        nombre: "SteelSeries Apex Pro TKL",
        image: "./assets/images/teclado3.webp",
        precio: 4700,
        tags: ["teclado", "español"],
        desc: "Este teclado SteelSeries de alto rendimiento permite que puedas disfrutar de horas ilimitadas de juegos. Está diseñado especialmente para que puedas expresar tanto tus habilidades como tu estilo.",
        categoria: "teclado",
        cantidad: 1,
    },
    {
        id: 9,
        nombre: "Noga NGW-120",
        image: "./assets/images/web3.webp",
        precio: 6500,
        tags: ["webcam", "camaraweb"],
        desc: "Ya no tenés que preocuparte si tu PC no tiene cámara. Este dispositivo de Noga brinda la calidad de imagen y funciones que necesitás para comunicarte de manera fácil y efectiva en la virtualidad.",
        categoria: "webcam",
        cantidad: 1,
    },
    {
        id: 10,
        nombre: "Logitech C922",
        image: "./assets/images/web2.webp",
        precio: 7700,
        tags: ["webcam", "camaraweb"],
        desc: "Este dispositivo es ideal para aquellas personas que disfrutan de los juegos en línea. Cabe destacar que sus funcionalidades y la calidad de imagen, sin dudas, ofrecen una gran experiencia.",
        categoria: "webcam",
        cantidad: 1,
    },
    {
        id: 11,
        nombre: "Genius FaceCam 1000X",
        image: "./assets/images/web1.webp",
        precio: 4300,
        tags: ["webcam", "camaraweb"],
        desc: "La Genius FaceCam 1000X cuenta con un micrófono incorporado, lo que facilita la comunicación con tus amigos, familiares o colegas sin necesidad de utilizar un dispositivo adicional.",
        categoria: "webcam",
        cantidad: 1,
    },
    {
        id: 12,
        nombre: "Genius SP-HF180",
        image: "./assets/images/parlantes1.webp",
        precio: 5900,
        tags: ["parlantes", "musica"],
        desc: "Genius SP-HF180 ofrece un sonido natural, con una gran claridad y precisión, que se dispersa de manera uniforme. Un parlante que asegura potencia y calidad por igual en la reproducción de contenidos multimedia.",
        categoria: "parlantes",
        cantidad: 1,
    },
    {
        id: 13,
        nombre: "Xinua Rgb",
        image: "./assets/images/parlantes3.webp",
        precio: 6800,
        tags: ["parlantes", "musica"],
        desc: "Xinua Xinua ofrece un sonido natural, con una gran claridad y precisión, que se dispersa de manera uniforme. Un parlante que asegura potencia y calidad por igual en la reproducción de contenidos multimedia.",
        categoria: "parlantes",
        cantidad: 1,
    },
    {
        id: 14,
        nombre: "Braun Speaker 180",
        image: "./assets/images/parlantes2.webp",
        precio: 3900,
        tags: ["parlantes", "musica"],
        desc: "La unidad de rango completo de 2,75 pulgadas ofrece un sonido excelente. Con su revestimiento blanco perla y su tapa antipolvo en forma de bala, complementará tu escritorio en todo momento.",
        categoria: "parlantes",
        cantidad: 1,
    },
]

let carrito = [];

const botonAuriculares = document.querySelector("#auriculares");
const botonMouse = document.querySelector("#mouse");
const botonTeclado = document.querySelector("#teclado");
const botonWebcam = document.querySelector("#webcam");
const botonParlantes = document.querySelector("#parlantes");
const textoCategoria = document.querySelector("#categoria")
const volverBtn = document.querySelector("#volverBtn");
const categoriasContainer = document.querySelector("#categoriasContainer");
const productosContainer = document.querySelector('#productosContainer');


function mostrarCategorias(categoria) {

    productosContainer.innerHTML = '';

    const productosCategoria = productos.filter(producto => producto.categoria === categoria);

    productosCategoria.forEach(producto => {
        const productoElemento = document.createElement('div');
        productoElemento.className = 'bg-white rounded-lg shadow-lg p-2 m-2 flex flex-col items-center '
        productoElemento.innerHTML = `
        <div class="flex flex-col items-center ">
        <img class="w-36 object-cover mb-2 mx-auto rounded-t" src="${producto.image}" alt="${producto.nombre}"> 
        <h2 class="text-sm font-bold mb-1">${producto.nombre}</h2> 
        <p class=" w-64 h-50 text-gray-700 text-xs mb-1">${producto.desc}</p>
        <p class="font-bold text-sm mt-2">Precio: $${producto.precio}</p> 
        <div class="flex items-end">
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded mt-3 agregar-btn">Agregar</button> 
        </div>
        </div>
        `;

        productoElemento.querySelector('.agregar-btn').addEventListener('click', function () {
            agregarProducto(producto);
        });

        productosContainer.appendChild(productoElemento);
    })

    carousel.style.display = 'none';
    dataInfo.classList.remove('hidden');
    botonAuriculares.style.display = 'none';
    botonMouse.style.display = 'none';
    botonTeclado.style.display = 'none';
    botonWebcam.style.display = 'none';
    botonParlantes.style.display = 'none';
    textoCategoria.style.display = 'none';
    volverBtn.classList.remove('hidden')
}

botonAuriculares.addEventListener('click', () => {
    mostrarCategorias('auriculares');
});

botonMouse.addEventListener('click', () => {
    mostrarCategorias('mouse');
});

botonTeclado.addEventListener('click', () => {
    mostrarCategorias('teclado');
});

botonWebcam.addEventListener('click', () => {
    mostrarCategorias('webcam');
});

botonParlantes.addEventListener('click', () => {
    mostrarCategorias('parlantes');
});

volverBtn.addEventListener('click', () => {

    productosContainer.innerHTML = '';

    carousel.style.display = 'block';
    dataInfo.classList.add('hidden');
    botonAuriculares.style.display = 'block';
    botonMouse.style.display = 'block';
    botonTeclado.style.display = 'block';
    botonWebcam.style.display = 'block';
    botonParlantes.style.display = 'block';
    volverBtn.classList.add('hidden');
    textoCategoria.style.display = 'block';
    textoCategoria.style.textAlign = 'center';
});


function agregarProducto(producto) {

    const productoEnCarrito = carrito.find((el) => el.id === producto.id);

    if (productoEnCarrito) {
        productoEnCarrito.cantidad++;
        productoEnCarrito.subTotal = productoEnCarrito.cantidad * productoEnCarrito.precio;
    } else {
        const nuevoProducto = {
            ...producto,
            cantidad: 1,
            subTotal: producto.precio
        };
        carrito.push(nuevoProducto)
    }
    mostrarCarrito();
}


function calcularTotalCarrito() {
    let total = 0;
    carrito.forEach((producto) => {
        total += producto.subTotal;
    });
    return total;
}

const carritoCompras = document.querySelector("#mostrarProductos");
const sidenav = document.querySelector("#sidenav-7");

sidenav.style.transform = "translateX(100%)";

carritoCompras.addEventListener("click", barraLateral)

function barraLateral() {

    if (sidenav.style.transform === "translateX(100%)") {
        sidenav.classList.remove('invisible');
        sidenav.style.transform = "translateX(0)";
    } else {
        sidenav.style.transform = "translateX(100%)";
    }
    mostrarCarrito();
};

function mostrarCarrito() {
    const articulosCarrito = document.querySelector("#listaCarrito");

    articulosCarrito.innerHTML = "";

    carrito.forEach(producto => {
        const productoCarrito = document.createElement('li');
        productoCarrito.classList.add('text-white', 'text-left', 'ml-4', 'mb-6');
        productoCarrito.innerHTML = `${producto.nombre} <br> Cantidad: ${producto.cantidad} <br> Subtotal: $${producto.subTotal}`;
        articulosCarrito.appendChild(productoCarrito);
    });

    const totalCarrito = document.createElement('div');
    totalCarrito.classList.add('text-white', 'font-bold');
    totalCarrito.innerHTML = `TOTAL:$${calcularTotalCarrito()}`
    totalCarrito.id = 'totalCarrito';

    articulosCarrito.appendChild(totalCarrito);
}


function eliminarProducto() {
    const nombreProducto = prompt("¿Qué producto desea eliminar?");

    const producto = carrito.find((el) => el.nombre === nombreProducto);

    if (nombreProducto) {
        const indiceProducto = carrito.indexOf(producto);
        carrito.splice(indiceProducto, 1);
        alert(`El producto ${nombreProducto} fue eliminado.`);
    }
}

/* function comprar() {
    let seguirComprando = true;

    while (seguirComprando) {
        let opciones = prompt("¿Estás seguro que quieres realizar la compra ? Ingresa el número de opción para confirmar... \n 1) Comprar \n 2) Mostrar Carrito \n 3) Salir");

        switch (opciones) {
            case "1":
                seguirComprando = false;
                alert("Felicitaciones, compra efectuada. Gracias por elegirnos!!!");
                break;
            case "2":
                mostrarCarrito();
                break;
            case "3":
                seguirComprando = false;
                break;
            default:
                alert("Opción no válida. Por favor, elige una opción válida.");
        }
    }
} */

const inputBuscador = document.querySelector("#buscador");
const boton = document.querySelector("#botonBuscar");
const carousel = document.querySelector("#carouselExampleControls");
const dataInfo = document.querySelector("#dataPagos");


boton.addEventListener("click", function () {
    const textoIngresado = inputBuscador.value.toLowerCase();

    const productosFiltrados = productos.filter((producto) => {
        const coincideNombre = producto.nombre.toLowerCase().includes(textoIngresado);
        const coincideCategoria = producto.categoria.toLowerCase().includes(textoIngresado);
        return coincideNombre || coincideCategoria;
    });

    mostrarProductosFiltrados(productosFiltrados)

})

function mostrarProductosFiltrados(productosFiltrados) {
    productosContainer.innerHTML = "";

    const hayCoincidencia = productosFiltrados.length > 0;

    if (hayCoincidencia) {
        productosFiltrados.forEach(producto => {
            const productoElemento = document.createElement('div');
            productoElemento.className = 'bg-white rounded-lg shadow-lg p-2 m-2 flex flex-col items-center '
            productoElemento.innerHTML = `
          <div class="flex flex-col items-center ">
          <img class="w-36 object-cover mb-2 mx-auto rounded-t" src="${producto.image}" alt="${producto.nombre}"> 
          <h2 class="text-sm font-bold mb-1">${producto.nombre}</h2> 
          <p class=" w-64 h-50 text-gray-700 text-xs mb-1">${producto.desc}</p>
          <p class="font-bold text-sm mt-2">Precio: $${producto.precio}</p> 
          <div class="flex items-end">
          <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded mt-3 agregar-btn">Agregar</button> 
          </div>
          </div>
          `;

            productoElemento.querySelector('.agregar-btn').addEventListener('click', function () {
                agregarProducto(producto);
            });

            productosContainer.appendChild(productoElemento);
        })
    } else {
        productosContainer.innerHTML = '<p class="bg-white rounded-lg p-10">No se encontraron productos que coincidan con la búsqueda.</p>';
    }

    carousel.style.display = 'none';
    dataInfo.classList.remove('hidden');
    botonAuriculares.style.display = 'none';
    botonMouse.style.display = 'none';
    botonTeclado.style.display = 'none';
    botonWebcam.style.display = 'none';
    botonParlantes.style.display = 'none';
    textoCategoria.style.display = 'none';
    volverBtn.classList.remove('hidden')
}
