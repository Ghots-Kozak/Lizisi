/* ============================================================
   LUMIÈRE — TIENDA DE BELLEZA
   Interactividad principal | script.js
   ============================================================ */

'use strict';

/* ── Estado del carrito ── */
let cart = [];
let cartOpen = false;

/* ── Datos de productos ── */
const PRODUCTS = {

  maquillaje: [
    { id: 'm1',  name: 'Labial Velvet Rouge',       desc: 'Fórmula cremosa de larga duración con acabado aterciopelado.',        price: 349,  oldPrice: 420,  badge: 'Más vendido', img: 'https://images.unsplash.com/photo-1631214524020-3c69888e7f9a?w=600&q=80', cat: 'Labiales'    },
    { id: 'm2',  name: 'Paleta Eyes of Gold',        desc: '16 sombras pigmentadas con tonos cálidos y ahumados premium.',        price: 890,  oldPrice: null, badge: 'Nuevo',       img: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=600&q=80', cat: 'Ojos'        },
    { id: 'm3',  name: 'Base Sérum Luminoso',        desc: 'Cobertura media con ácido hialurónico para piel radiante todo el día.',price: 650,  oldPrice: null, badge: null,          img: 'https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=600&q=80', cat: 'Base'        },
    { id: 'm4',  name: 'Iluminador Rose Gold',       desc: 'Polvo prensado con partículas espejo para un brillo dimensional.',    price: 420,  oldPrice: 540,  badge: 'Oferta',      img: 'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=600&q=80', cat: 'Rostro'      },
    { id: 'm5',  name: 'Máscara Volume Black',       desc: 'Fórmula con aceite de argán que alarga y curva sin grumos.',          price: 310,  oldPrice: null, badge: null,          img: 'https://images.unsplash.com/photo-1522338242992-e1a54906a8da?w=600&q=80', cat: 'Ojos'        },
    { id: 'm6',  name: 'Contorno & Bronzer Duo',     desc: 'Paleta profesional en dos tonos para esculpir y broncear el rostro.',  price: 560,  oldPrice: null, badge: 'Nuevo',       img: 'https://images.unsplash.com/photo-1631214500012-8e9ae15aef7e?w=600&q=80', cat: 'Rostro'      },
    { id: 'm7',  name: 'Gloss Cristal Hydra',        desc: 'Brillo ultra-hidratante efecto plump con vitamina E y colágeno.',     price: 280,  oldPrice: null, badge: null,          img: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=600&q=80', cat: 'Labiales'    },
    { id: 'm8',  name: 'Setting Spray Fijador',      desc: 'Fija el maquillaje hasta 24h con efecto refrescante y antioxidante.', price: 390,  oldPrice: 460,  badge: 'Oferta',      img: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&q=80', cat: 'Fijadores'   },
    { id: 'm9',  name: 'Delineador Precision Ink',   desc: 'Delineador de punta ultra-fina con tinta waterproof de 16h.',         price: 245,  oldPrice: null, badge: null,          img: 'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=600&q=80', cat: 'Ojos'        },
    { id: 'm10', name: 'Corrector Poreless',         desc: 'Corrector de alta cobertura con ácido salicílico para piel perfecta.',price: 320,  oldPrice: null, badge: 'Nuevo',       img: 'https://images.unsplash.com/photo-1612817288484-6f916006741a?w=600&q=80', cat: 'Corrección'  },
  ],

  joyeria: [
    { id: 'j1',  name: 'Collar Perlas Éternes',      desc: 'Perlas de agua dulce cultivadas engarzadas en plata de ley 925.',     price: 1890, oldPrice: 2400, badge: '-21%',         img: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&q=80', cat: 'Collares'    },
    { id: 'j2',  name: 'Anillo Diamante Halo',       desc: 'Oro blanco 18k con diamante central 0.5ct y halo de brillantes.',    price: 8900, oldPrice: null, badge: 'Exclusivo',   img: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=600&q=80', cat: 'Anillos'     },
    { id: 'j3',  name: 'Aretes Gota Dorada',         desc: 'Aretes colgantes bañados en oro 24k con diseño art déco.',           price: 760,  oldPrice: null, badge: null,          img: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600&q=80', cat: 'Aretes'      },
    { id: 'j4',  name: 'Pulsera Eslabón Chunky',     desc: 'Plata esterlina con eslabones oversize para un look editorial.',      price: 1250, oldPrice: 1600, badge: '-22%',         img: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=600&q=80', cat: 'Pulseras'    },
    { id: 'j5',  name: 'Collar Zodiac Constelación', desc: 'Elige tu signo zodiacal, bañado en oro con micro-cristales Swarovski.',price:980,  oldPrice: null, badge: 'Personalizado',img: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=600&q=80', cat: 'Collares'    },
    { id: 'j6',  name: 'Anillo Statement Topacio',   desc: 'Topacio azul cielo engarzado en plata con acabado satinado.',        price: 2100, oldPrice: null, badge: 'Nuevo',       img: 'https://images.unsplash.com/photo-1589128777073-263566ae5e4d?w=600&q=80', cat: 'Anillos'     },
    { id: 'j7',  name: 'Prendedor Mariposa Cristal', desc: 'Broche decorativo con cristales multicolor y chapa en oro rosa.',    price: 540,  oldPrice: null, badge: null,          img: 'https://images.unsplash.com/photo-1566206091558-7f218b696731?w=600&q=80', cat: 'Broches'     },
    { id: 'j8',  name: 'Ear Cuff Serpiente',         desc: 'Diseño de serpiente articulada en plata 925 sin necesidad de agujero.',price: 680, oldPrice: 850,  badge: '-20%',        img: 'https://images.unsplash.com/photo-1630997994582-62e37c78f03d?w=600&q=80', cat: 'Aretes'      },
    { id: 'j9',  name: 'Tobillera Cadena Dainty',    desc: 'Tobillera minimalista en oro de 14k, ajustable con cierre de langosta.',price: 890, oldPrice: null, badge: null,         img: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&q=80', cat: 'Tobilleras'  },
    { id: 'j10', name: 'Set Nupcial Perla & Oro',    desc: 'Conjunto de aretes, collar y pulsera para novia, en perla cultivada.',price: 4200, oldPrice: 5500,badge: '-24%',         img: 'https://images.unsplash.com/photo-1573408301185-9519f94816b5?w=600&q=80', cat: 'Sets'        },
  ],

  accesorios: [
    { id: 'a1',  name: 'Lentes Cat Eye Dorados',     desc: 'Montura metálica dorada con lente ahumado UV400. Estilo retro chic.', price: 580,  oldPrice: null, badge: 'Tendencia',   img: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=600&q=80', cat: 'Lentes'      },
    { id: 'a2',  name: 'Pañoleta Seda Leopard',      desc: 'Seda 100% con estampado leopard en tonos tierra. Múltiples usos.',   price: 420,  oldPrice: 560,  badge: '-25%',         img: 'https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?w=600&q=80', cat: 'Pañoletas'   },
    { id: 'a3',  name: 'Cinturón Hebilla Cuadrada',  desc: 'Piel sintética vegana con hebilla metálica dorada oversized.',       price: 490,  oldPrice: null, badge: null,          img: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&q=80', cat: 'Cinturones'  },
    { id: 'a4',  name: 'Gorro Beret Lana Boucle',    desc: 'Boina de lana bouclé en beige arena, estilo parisino eterno.',       price: 350,  oldPrice: null, badge: 'Nuevo',       img: 'https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?w=600&q=80', cat: 'Sombreros'   },
    { id: 'a5',  name: 'Guantes Cuero Driving',      desc: 'Guantes de cuero italiano con corte driving y costura a contraste.', price: 780,  oldPrice: null, badge: null,          img: 'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=600&q=80', cat: 'Guantes'     },
    { id: 'a6',  name: 'Diadema Perlas & Metal',     desc: 'Diadema con media luna de perlas sintéticas sobre base metálica.',   price: 290,  oldPrice: 380,  badge: '-24%',         img: 'https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=600&q=80', cat: 'Diademas'    },
    { id: 'a7',  name: 'Paraguas Transparente Chic', desc: 'Paraguas domo transparente con mango largo en cuero negro.',         price: 460,  oldPrice: null, badge: null,          img: 'https://images.unsplash.com/photo-1536015958237-5ef6f18b3a09?w=600&q=80', cat: 'Paraguas'    },
    { id: 'a8',  name: 'Clip Cabello Maxi Claw',     desc: 'Pinza XL en acetato nacar, resistente y elegante para cualquier look.',price: 180, oldPrice: null, badge: 'Viral',       img: 'https://images.unsplash.com/photo-1519682337058-a94d519337bc?w=600&q=80', cat: 'Cabello'     },
    { id: 'a9',  name: 'Calcetas Fishnet Premium',   desc: 'Medias caladas en nylon de alta resistencia. Estilo editorial.',     price: 145,  oldPrice: null, badge: null,          img: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&q=80', cat: 'Calcetas'    },
    { id: 'a10', name: 'Portamonedas Croco Mini',    desc: 'Tarjetero en cuero con textura croco, clip para billetes integrado.',price: 320,  oldPrice: 400,  badge: '-20%',         img: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=600&q=80', cat: 'Carteras'    },
  ],

  bolsas: [
    { id: 'b1',  name: 'Tote Canvas Monograma',      desc: 'Tote de algodón canvas resistente con monograma bordado artesanal.', price: 890,  oldPrice: null, badge: 'Personalizado',img: 'https://images.unsplash.com/photo-1547949003-9792a18a2601?w=600&q=80', cat: 'Totes'       },
    { id: 'b2',  name: 'Clutch Dorado Plisado',      desc: 'Sobre metálico plisado con cierre magnético, ideal para eventos.',   price: 650,  oldPrice: 820,  badge: '-21%',         img: 'https://images.unsplash.com/photo-1614179689702-355944cd0918?w=600&q=80', cat: 'Clutches'    },
    { id: 'b3',  name: 'Crossbody Piel Mini',        desc: 'Bolsa cruzada en piel genuina con cadena dorada, tamaño mini..',     price: 1890, oldPrice: null, badge: 'Exclusivo',   img: 'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=600&q=80', cat: 'Crossbody'   },
    { id: 'b4',  name: 'Shopper Raffia Natural',     desc: 'Bolsa de mano tejida en rafia natural, perfecta para verano.',       price: 720,  oldPrice: null, badge: 'Nuevo',       img: 'https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?w=600&q=80', cat: 'Shoppers'    },
    { id: 'b5',  name: 'Backpack Cuero Bucket',      desc: 'Mochila cubo en cuero vegano con cordón ajustable y bolsillo exterior.',price: 1340, oldPrice: 1700, badge: '-21%',       img: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&q=80', cat: 'Mochilas'    },
    { id: 'b6',  name: 'Bolsa Crochet Boho',         desc: 'Tejido artesanal a crochet con interior forrado y asa de bambú.',    price: 560,  oldPrice: null, badge: null,          img: 'https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?w=600&q=80', cat: 'Boho'        },
    { id: 'b7',  name: 'Satchel Structured Camel',   desc: 'Bolsa estructurada en piel color camello, herrajes en oro viejo.',   price: 2100, oldPrice: null, badge: 'Lujo',        img: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=600&q=80', cat: 'Satchels'    },
    { id: 'b8',  name: 'Bolsa Medialuna Noche',      desc: 'Diseño media luna en raso negro con cierre twist dorado.',           price: 780,  oldPrice: 950,  badge: '-18%',         img: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=600&q=80', cat: 'Noche'       },
    { id: 'b9',  name: 'Tote Vaquero Denim',         desc: 'Tote de mezclilla premium con detalles bordados en hilo dorado.',    price: 640,  oldPrice: null, badge: 'Tendencia',   img: 'https://images.unsplash.com/photo-1520006403909-838d6b92c22e?w=600&q=80', cat: 'Totes'       },
    { id: 'b10', name: 'Clutch Transparente PVC',    desc: 'Bolso transparente estilo stadium con detalles metálicos dorados.',  price: 390,  oldPrice: null, badge: 'Viral',       img: 'https://images.unsplash.com/photo-1614179689702-355944cd0918?w=600&q=80', cat: 'Clutches'    },
  ],

  velas: [
    { id: 'v1',  name: 'Vela Jardín de Rosas',       desc: 'Aroma floral romántico con rosas de Damasco, duración 60h.',        price: 380,  oldPrice: null, badge: 'Más vendida',  img: 'https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=600&q=80', cat: 'Florales'    },
    { id: 'v2',  name: 'Vetiver & Cedro Forest',     desc: 'Aroma amaderado con notas de vetiver, cedro y musgo verde.',        price: 450,  oldPrice: null, badge: 'Nuevo',       img: 'https://images.unsplash.com/photo-1603905813896-5f7c0dd73989?w=600&q=80', cat: 'Amaderadas'  },
    { id: 'v3',  name: 'Lavanda Provençale',          desc: 'Lavanda francesa combinada con manzanilla para relajación total.',   price: 350,  oldPrice: 420,  badge: '-17%',         img: 'https://images.unsplash.com/photo-1587049352846-4a222e784d38?w=600&q=80', cat: 'Relajantes'  },
    { id: 'v4',  name: 'Vainilla & Ámbar Warm',      desc: 'Dulce combinación de vainilla bourbon, ámbar y almizcle blanco.',   price: 390,  oldPrice: null, badge: null,          img: 'https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=600&q=80', cat: 'Orientales'  },
    { id: 'v5',  name: 'Citrus & Mint Refresh',      desc: 'Aroma fresco de bergamota siciliana, limón y menta piperita.',      price: 320,  oldPrice: null, badge: 'Verano',      img: 'https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=600&q=80', cat: 'Frescas'     },
    { id: 'v6',  name: 'Palo Santo & Salvia',        desc: 'Ritual purificante con palo santo ecuatoriano y salvia blanca.',    price: 520,  oldPrice: null, badge: 'Premium',     img: 'https://images.unsplash.com/photo-1608181831718-c9faaeb2a2d7?w=600&q=80', cat: 'Rituales'    },
    { id: 'v7',  name: 'Café Latte Morning',         desc: 'Aroma hogareño de café recién tostado con crema y canela.',         price: 340,  oldPrice: 400,  badge: '-15%',         img: 'https://images.unsplash.com/photo-1603905813896-5f7c0dd73989?w=600&q=80', cat: 'Gourmet'     },
    { id: 'v8',  name: 'Flor de Cerezo & Sake',      desc: 'Inspirada en el Hanami japonés, floral y ligeramente afrutada.',    price: 470,  oldPrice: null, badge: 'Nuevo',       img: 'https://images.unsplash.com/photo-1587049352846-4a222e784d38?w=600&q=80', cat: 'Florales'    },
    { id: 'v9',  name: 'Mar del Norte Oceanic',      desc: 'Brisa salina, algas marinas y madera de deriva. Para soñar.',      price: 400,  oldPrice: null, badge: null,          img: 'https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=600&q=80', cat: 'Acuáticas'   },
    { id: 'v10', name: 'Set Regalo 3 Velas',         desc: 'Trío curado: lavanda, vainilla y rosa. Presentación de lujo.',      price: 980,  oldPrice: 1200, badge: '-18%',         img: 'https://images.unsplash.com/photo-1608181831718-c9faaeb2a2d7?w=600&q=80', cat: 'Sets'        },
  ],
};

/* ── Valoraciones de estrellas ── */
const RATINGS = [4, 5, 5, 4, 5, 4, 4, 5, 3, 5];

/* ============================================================
   INICIALIZACIÓN
   ============================================================ */
document.addEventListener('DOMContentLoaded', () => {
  // Ocultar loader
  setTimeout(() => {
    document.getElementById('loader').classList.add('hidden');
  }, 1800);

  initCarousel();
  renderAllProducts();
  initScrollAnimations();
  initNavHighlight();
  initStickyHeader();
  initMobileMenu();
  initCart();
});

/* ============================================================
   CARRUSEL
   ============================================================ */
function initCarousel() {
  const slides    = document.querySelectorAll('.carousel-slide');
  const dotsWrap  = document.getElementById('carouselDots');
  const prevBtn   = document.getElementById('prevBtn');
  const nextBtn   = document.getElementById('nextBtn');
  let current     = 0;
  let autoTimer   = null;

  // Crear puntos
  slides.forEach((_, i) => {
    const dot = document.createElement('button');
    dot.className = 'carousel-dot' + (i === 0 ? ' active' : '');
    dot.setAttribute('aria-label', `Slide ${i + 1}`);
    dot.addEventListener('click', () => goTo(i));
    dotsWrap.appendChild(dot);
  });

  function goTo(n) {
    slides[current].classList.remove('active');
    dotsWrap.children[current].classList.remove('active');
    current = (n + slides.length) % slides.length;
    slides[current].classList.add('active');
    dotsWrap.children[current].classList.add('active');
    resetAuto();
  }

  function resetAuto() {
    clearInterval(autoTimer);
    autoTimer = setInterval(() => goTo(current + 1), 5500);
  }

  prevBtn.addEventListener('click', () => goTo(current - 1));
  nextBtn.addEventListener('click', () => goTo(current + 1));

  // Touch / swipe
  let touchStartX = 0;
  const carousel = document.getElementById('carousel');
  carousel.addEventListener('touchstart', e => touchStartX = e.touches[0].clientX, { passive: true });
  carousel.addEventListener('touchend', e => {
    const delta = touchStartX - e.changedTouches[0].clientX;
    if (Math.abs(delta) > 50) goTo(delta > 0 ? current + 1 : current - 1);
  });

  // Pausa en hover
  carousel.addEventListener('mouseenter', () => clearInterval(autoTimer));
  carousel.addEventListener('mouseleave', resetAuto);

  resetAuto();
}

/* ============================================================
   RENDER DE PRODUCTOS
   ============================================================ */
function renderAllProducts() {
  Object.entries(PRODUCTS).forEach(([section, items]) => {
    const grid = document.getElementById(`grid-${section}`);
    if (!grid) return;

    items.forEach((p, idx) => {
      const card = createProductCard(p, idx, section);
      grid.appendChild(card);
    });
  });
}

function createProductCard(product, idx, section) {
  const card = document.createElement('div');
  card.className = 'product-card';
  card.style.animationDelay = `${idx * 0.07}s`;

  const rating  = RATINGS[idx % RATINGS.length];
  const stars   = buildStars(rating);
  const priceEl = product.oldPrice
    ? `<span class="old-price">$${product.oldPrice}</span>$${product.price}`
    : `$${product.price}`;
  const badge   = product.badge
    ? `<div class="product-badge">${product.badge}</div>` : '';

  card.innerHTML = `
    <div class="product-img-wrap">
      <img
        src="${product.img}"
        alt="${product.name}"
        loading="lazy"
        onerror="this.src='https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=600&q=80'"
      />
      ${badge}
      <button class="product-wishlist" aria-label="Guardar en favoritos">♡</button>
    </div>
    <div class="product-info">
      <div class="product-category">${product.cat}</div>
      <div class="product-rating">${stars}</div>
      <h3 class="product-name">${product.name}</h3>
      <p class="product-desc">${product.desc}</p>
      <div class="product-footer">
        <span class="product-price">${priceEl}</span>
        <button class="btn-add-cart" data-id="${product.id}" data-section="${section}">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 01-8 0"/></svg>
          Agregar
        </button>
      </div>
    </div>`;

  // Wishlist toggle
  const wishBtn = card.querySelector('.product-wishlist');
  wishBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    const active = wishBtn.textContent === '♥';
    wishBtn.textContent = active ? '♡' : '♥';
    wishBtn.style.color = active ? '' : 'var(--rose-deep)';
    showToast(active ? '💔 Eliminado de favoritos' : '♥ Guardado en favoritos');
  });

  // Add to cart button
  const addBtn = card.querySelector('.btn-add-cart');
  addBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    addToCart(product, addBtn);
  });

  return card;
}

function buildStars(rating) {
  return Array.from({ length: 5 }, (_, i) =>
    `<span class="star${i < rating ? '' : ' empty'}">★</span>`
  ).join('');
}

/* ============================================================
   CARRITO
   ============================================================ */
function initCart() {
  const cartBtn     = document.getElementById('cartBtn');
  const cartClose   = document.getElementById('cartClose');
  const cartOverlay = document.getElementById('cartOverlay');

  cartBtn.addEventListener('click', toggleCart);
  cartClose.addEventListener('click', toggleCart);
  cartOverlay.addEventListener('click', toggleCart);

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && cartOpen) toggleCart();
  });
}

function toggleCart() {
  cartOpen = !cartOpen;
  document.getElementById('cartSidebar').classList.toggle('open', cartOpen);
  document.getElementById('cartOverlay').classList.toggle('open', cartOpen);
  document.body.style.overflow = cartOpen ? 'hidden' : '';
}

function addToCart(product, btn) {
  const existing = cart.find(i => i.id === product.id);
  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({ ...product, qty: 1 });
  }

  // Button animation
  const original = btn.innerHTML;
  btn.innerHTML   = '✓ Agregado';
  btn.style.background = 'var(--gold)';
  btn.style.color      = 'var(--black)';
  setTimeout(() => {
    btn.innerHTML        = original;
    btn.style.background = '';
    btn.style.color      = '';
  }, 1500);

  updateCartUI();
  showToast(`🛍️ "${product.name}" agregado al carrito`);
}

function removeFromCart(id) {
  cart = cart.filter(i => i.id !== id);
  updateCartUI();
}

function updateCartUI() {
  const count   = cart.reduce((s, i) => s + i.qty, 0);
  const total   = cart.reduce((s, i) => s + i.price * i.qty, 0);
  const counter = document.getElementById('cartCount');
  const totalEl = document.getElementById('cartTotal');
  const itemsEl = document.getElementById('cartItems');

  counter.textContent = count;
  counter.classList.add('bump');
  setTimeout(() => counter.classList.remove('bump'), 300);

  totalEl.textContent = `$${total.toLocaleString('es-MX', { minimumFractionDigits: 2 })}`;

  if (cart.length === 0) {
    itemsEl.innerHTML = `
      <div class="cart-empty">
        <span>🛍️</span>
        <p>Tu carrito está vacío</p>
      </div>`;
    return;
  }

  itemsEl.innerHTML = cart.map(item => `
    <div class="cart-item">
      <img class="cart-item-img" src="${item.img}" alt="${item.name}"
           onerror="this.src='https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=300&q=60'"/>
      <div class="cart-item-info">
        <div class="cart-item-name">${item.name} ${item.qty > 1 ? `<span style="color:var(--gold)">x${item.qty}</span>` : ''}</div>
        <div class="cart-item-price">$${(item.price * item.qty).toLocaleString('es-MX', { minimumFractionDigits: 2 })}</div>
      </div>
      <button class="cart-item-remove" onclick="removeFromCart('${item.id}')" aria-label="Eliminar">✕</button>
    </div>`).join('');
}

/* ============================================================
   SCROLL ANIMATIONS
   ============================================================ */
function initScrollAnimations() {
  // IntersectionObserver para .reveal
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.15 });

  document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

  // Animar cards de productos al entrar en viewport
  const cardObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity    = '1';
        entry.target.style.transform  = 'translateY(0)';
        cardObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -50px 0px' });

  // Inicialmente ocultar cards para animarlas
  document.querySelectorAll('.product-card').forEach((card, i) => {
    card.style.opacity   = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = `opacity 0.5s ease ${i % 5 * 0.08}s, transform 0.5s ease ${i % 5 * 0.08}s`;
    cardObserver.observe(card);
  });
}

/* ============================================================
   NAV HIGHLIGHT ON SCROLL
   ============================================================ */
function initNavHighlight() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navLinks.forEach(link => link.classList.remove('active'));
        const active = document.querySelector(`.nav-link[data-section="${entry.target.id}"]`);
        if (active) active.classList.add('active');
      }
    });
  }, { threshold: 0.35, rootMargin: '-72px 0px 0px 0px' });

  sections.forEach(s => observer.observe(s));
}

/* ============================================================
   STICKY HEADER
   ============================================================ */
function initStickyHeader() {
  const header = document.getElementById('header');
  let lastScroll = 0;

  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    header.classList.toggle('scrolled', scrollY > 50);

    // Ocultar/mostrar header al hacer scroll
    if (scrollY > 200) {
      if (scrollY > lastScroll) {
        header.style.transform = 'translateY(-100%)';
      } else {
        header.style.transform = 'translateY(0)';
      }
    } else {
      header.style.transform = 'translateY(0)';
    }
    lastScroll = scrollY;
  }, { passive: true });
}

/* ============================================================
   MOBILE MENU
   ============================================================ */
function initMobileMenu() {
  const toggle = document.getElementById('menuToggle');
  const nav    = document.getElementById('nav');

  toggle.addEventListener('click', () => {
    const open = toggle.classList.toggle('open');
    nav.classList.toggle('open', open);
    document.body.style.overflow = open ? 'hidden' : '';
  });

  // Cerrar al hacer clic en un link
  nav.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      toggle.classList.remove('open');
      nav.classList.remove('open');
      document.body.style.overflow = '';
    });
  });
}

/* ============================================================
   SMOOTH SCROLL CON OFFSET DEL HEADER
   ============================================================ */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const targetId = this.getAttribute('href');
    if (targetId === '#') return;
    const target = document.querySelector(targetId);
    if (!target) return;
    e.preventDefault();
    const offset = 72;
    const top    = target.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top, behavior: 'smooth' });
  });
});

/* ============================================================
   NEWSLETTER
   ============================================================ */
function handleNewsletter(e) {
  e.preventDefault();
  const input = e.target.querySelector('input');
  showToast(`✉️ ¡Gracias! Bienvenida a Lumière, ${input.value.split('@')[0]}`);
  input.value = '';
}

/* ============================================================
   TOAST NOTIFICATION
   ============================================================ */
let toastTimer = null;

function showToast(msg) {
  const toast = document.getElementById('toast');
  clearTimeout(toastTimer);
  toast.textContent = msg;
  toast.classList.add('show');
  toastTimer = setTimeout(() => toast.classList.remove('show'), 3000);
}

/* ============================================================
   CURSOR PERSONALIZADO (solo desktop)
   ============================================================ */
if (window.matchMedia('(pointer: fine)').matches) {
  const cursor    = document.createElement('div');
  const cursorDot = document.createElement('div');

  Object.assign(cursor.style, {
    position: 'fixed', top: 0, left: 0, zIndex: 99999, pointerEvents: 'none',
    width: '36px', height: '36px', borderRadius: '50%',
    border: '1.5px solid rgba(201,168,76,0.6)',
    transform: 'translate(-50%,-50%)',
    transition: 'width 0.3s, height 0.3s, opacity 0.3s, border-color 0.3s',
  });
  Object.assign(cursorDot.style, {
    position: 'fixed', top: 0, left: 0, zIndex: 100000, pointerEvents: 'none',
    width: '6px', height: '6px', borderRadius: '50%',
    background: 'var(--gold)', transform: 'translate(-50%,-50%)',
    transition: 'transform 0.1s',
  });

  document.body.appendChild(cursor);
  document.body.appendChild(cursorDot);

  let mx = 0, my = 0;
  document.addEventListener('mousemove', e => {
    mx = e.clientX; my = e.clientY;
    cursorDot.style.left = mx + 'px';
    cursorDot.style.top  = my + 'px';
  });

  // Suavizar cursor principal
  function animCursor() {
    const cx = parseFloat(cursor.style.left || 0);
    const cy = parseFloat(cursor.style.top  || 0);
    cursor.style.left = (cx + (mx - cx) * 0.12) + 'px';
    cursor.style.top  = (cy + (my - cy) * 0.12) + 'px';
    requestAnimationFrame(animCursor);
  }
  animCursor();

  // Agrandar cursor en elementos interactivos
  document.querySelectorAll('a, button, .product-card').forEach(el => {
    el.addEventListener('mouseenter', () => {
      cursor.style.width        = '56px';
      cursor.style.height       = '56px';
      cursor.style.borderColor  = 'rgba(201,168,76,1)';
      cursor.style.background   = 'rgba(201,168,76,0.08)';
    });
    el.addEventListener('mouseleave', () => {
      cursor.style.width        = '36px';
      cursor.style.height       = '36px';
      cursor.style.borderColor  = 'rgba(201,168,76,0.6)';
      cursor.style.background   = 'transparent';
    });
  });
}