const productos = [
    {
        id: 1,
        nombre: "Pantalón deportivo Adidas (Mujer)",
        descripcion: "Pantalones deportivos diseñados con materiales reciclados y renovables. Cómodos, modernos y perfectos para cualquier rutina deportiva.",
        precio: 179.00,
        imagen: "https://assets.adidas.com/images/h_2000,f_auto,q_auto,fl_lossy,c_fill,g_auto/5432c056e4b245ea9b291c01f51e8299_9366/Pantalon_Deportivo_Beckenbauer_Negro_IW3171_21_model.jpg"
    },
    {
        id: 2,
        nombre: "Pantalón deportivo Adidas (Hombre)",
        descripcion: "Diseño ajustado, cómodo y moderno. Hecho parcialmente con materiales reciclados. Ideal para entrenamientos y uso casual.",
        precio: 127.00,
        imagen: "https://assets.adidas.com/images/w_600,f_auto,q_auto/eb889361f6e04e8e81091647ac7b8d0f_9366/Pantalon_Deportivo_Montreal_Negro_IU2521_21_model.jpg"
    },
    {
        id: 3,
        nombre: "Conjunto deportivo Nike (Hombre)",
        descripcion: "Diseño 2 en 1 con tela suave, forro de malla y estilo clásico. Ideal para quienes buscan frescura y comodidad al entrenar",
        precio: 250.00,
        imagen: "https://www.nike.com.pe/dw/image/v2/BJKZ_PRD/on/demandware.static/-/Sites-catalog-equinox/default/dwe555c3da/images/hi-res/196607376034_1_20240213120000-mrtPeru.jpeg?sw=800&sh=800"
    },
    {
        id: 4,
        nombre: "Polo de correr manga larga Nike (Mujer)",
        descripcion: "Prenda ligera, elástica y de secado rápido. Ideal para correr de día o noche, brindando comodidad durante todo el entrenamiento.",
        precio: 180.00,
        imagen: "https://www.nike.com.pe/dw/image/v2/BJKZ_PRD/on/demandware.static/-/Sites-catalog-equinox/default/dwccea3fc9/images/hi-res/197600314412_1_20241002-mrtPeru.jpg?sw=800&sh=800"
    },
    {
        id: 5,
        nombre: "Polo manga larga Nike (Hombre)",
        descripcion: "Diseño transpirable con protección UV. Perfecto para entrenar bajo el sol con frescura, estilo y libertad de movimiento.",
        precio: 130.00,
        imagen: "https://www.nike.com.pe/dw/image/v2/BJKZ_PRD/on/demandware.static/-/Sites-catalog-equinox/default/dw105f499a/images/hi-res/196608713111_1_20241002-mrtPeru.jpg?sw=800&sh=800"
    },
    {
        id: 6,
        nombre: "Top deportivo Adidas (Mujer)",
        descripcion: "Top de soporte medio sin cierres, con tejido CLIMACOOL que repele el sudor. Ideal para entrenamientos de alta intensidad.",
        precio: 90.00,
        imagen: "https://assets.adidas.com/images/h_2000,f_auto,q_auto,fl_lossy,c_fill,g_auto/ad883a3e5dad457da454104091639ace_9366/Top_Deportivo_Soporte_Medio_Powerimpact_Heritage_Verde_JG6179_HM1.jpg"
    },
    {
        id: 7,
        nombre: "Short deportivo Puma (Mujer)",
        descripcion: "Shorts ligeros, cómodos y funcionales. Fabricados con tejido Ultraform e incluyen un bolsillo interior para objetos pequeños.",
        precio: 55.00,
        imagen: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,e_sharpen:95,w_2000,h_2000/global/524955/51/mod01/fnd/PER/fmt/png/Shorts-de-running-RUN-ULTRAFORM-para-mujer"
    },
    {
        id: 8,
        nombre: "Short deportivo Puma (Hombre)",
        descripcion: "Shorts frescos, cómodos y ligeros. Ofrecen libertad de movimiento durante cualquier entrenamiento físico o rutina diaría.",
        precio: 80.00,
        imagen: "https://oechsle.vteximg.com.br/arquivos/ids/20723244-1000-1000/2842727_4.jpg?v=638775335507730000"
    },
    {
        id: 9,
        nombre: "Licra deportiva Adidas (Mujer)",
        descripcion: "Licras de estilo retro con tecnología CLIMACOOL, Cómodas y elásticas, ideales para entrenamientos de fuerza y alta exigencia.",
        precio: 120.00,
        imagen: "https://assets.adidas.com/images/h_2000,f_auto,q_auto,fl_lossy,c_fill,g_auto/7d0a62da5d9c4869b34bbcec01089f10_9366/Licras_Optime_Heritage_Full-Length_Verde_JG6152_HM1.jpg"
    }
];

/* Renderiza el id:productosContainer para no replicar el mismo codigo en todos en los productos*/
function renderProductos(){
    const container = document.getElementById('productosContainer');
    container.innerHTML = '';

    productos.forEach(producto => {
        const card = document.createElement('div');
        card.className = 'col-md-4 mb-4';
        card.innerHTML = `
            <div class="card product-card" data-id="${producto.id}"
            style="cursor:pointer;">
                <img src="${producto.imagen}" class="card-img-top" alt="${producto.nombre}" />
                    <div class="card-body">
                        <h5 class="card-title">${producto.nombre}</h5>
                        <p class="card-text">S/ ${producto.precio.toFixed(2)}</p>
                    </div>
            </div>
        `;
        container.appendChild(card);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    renderProductos();

    document.getElementById('productosContainer').addEventListener('click', (e) => {
        const card = e.target.closest('.product-card');
        if(!card) return;

        const id = parseInt(card.dataset.id);
        const producto = productos.find(p => p.id === id);

        if(producto) {
            document.getElementById('modalProductImage').src = producto.imagen;
            document.getElementById('modalProductName').textContent = producto.nombre;
            document.getElementById('modalProductDescription').textContent = producto.descripcion;
            document.getElementById('modalProductPrice').textContent = `S/ ${producto.precio.toFixed(2)}`;
            document.getElementById('addToCartBtn').setAttribute ('data-id', producto.id);

            const modal = new bootstrap.Modal(document.getElementById('productModal'));
            modal.show();
        }
    });

    /*Para agregar el producto al carrito de compras*/
    document.getElementById('addToCartBtn').addEventListener('click', () => {
        const id = parseInt(document.getElementById('addToCartBtn').getAttribute('data-id'));
        const producto = productos.find(p=> p.id === id);

        if (producto) {
            let carrito = JSON.parse(localStorage.getItem('carrito') || []);
            carrito.push(producto);
            localStorage.setItem('carrito', JSON.stringify(carrito));
            alert('Producto agregado al carrito');
        }
    });
});