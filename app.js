// Seleccionamos todos los enlaces del menú
document.querySelectorAll('a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();  

        
        const targetSection = document.querySelector(this.getAttribute('href'));

        window.scrollTo({
            top: targetSection.offsetTop - 50,  
            behavior: 'smooth'  
        });
    });
});

// proyectos

const proyectos = [
    {
        titulo: 'Aprende JavaScript',
        descripcion: 'aplicacion de JavaScript en la cual ingresa un color y al dar click la pantalla cambia e color',
        enlace: '#',
        img: '/./assets/proyectB.png',
    },
    {
        titulo: 'Pokeapi',
        descripcion: 'se integra api de pokeapi con diseño dark',
        enlace: '#',
        img: './assets/proyect a.jpg',
    },
];


const referencias = [
    {
        nombre: 'Diana Molano',
        descripcion: 'auxiliar de farmacia',
        imagen: './assets/perfil/WhatsApp Image 2024-09-14 at 11.07.36 PM.jpeg'
    },
    {
        nombre: 'Yensi Pinzon',
        descripcion: 'diseñadora grafica',
        imagen: './assets/perfil/WhatsApp Image 2024-09-13 at 7.02.04 PM.jpeg'
    },

];


const experience = [
    {
        name:"html",
        level: "80%",
        img:"./assets/",
    },
    {
        name:"html",
        level: "80%",
        img:"",
    },
    {
        name:"html",
        level: "80%",
        img:"",
    }
]
//proyectos
// Referencia al contenedor donde irán las tarjetas
const container = document.getElementById('proyects');

// Iteramos sobre el array y creamos las tarjetas dinámicamente
proyectos.forEach(proyecto => {
    // Crear el div de la tarjeta
    const card = document.createElement('div');
    card.classList.add('card-proyect');

    // Crear el contenido de la tarjeta
    card.innerHTML = `
        <div class="content-card">
            <div class="card-images">
                <img src="${proyecto.img}" alt="">
            </div>
            <div class="text-card">
                <h3>${proyecto.titulo}</h3>
                <p>${proyecto.descripcion}</p>
                <a href="${proyecto.enlace}">Ver más</a>
            </div>
        </div>
    `;

    // Agregar la tarjeta al contenedor
    container.appendChild(card);
});
//referencias

const referenciasContainer = document.getElementById('references');

referencias.forEach(referencia => {
    const card = document.createElement('div');
    card.classList.add('reference');

    card.innerHTML = `
            <div class="img-card-reference">
                <img src="${referencias.imagen}" alt="">
            </div>
            <div class="text-card">
                <h3>${referencia.nombre}</h3>
                <p>${referencia.descripcion}</p>
            </div>
        </div>
    `;

    referenciasContainer.appendChild(card);
});
