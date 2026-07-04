// ═════════════════════════════════════════════════════
// MENÚ HAMBURGUESA (RESPONSIVE)
// ═════════════════════════════════════════════════════

document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menuToggle');
    const nav = document.querySelector('.nav');
    
    if (menuToggle && nav) {
        menuToggle.addEventListener('click', function() {
            nav.classList.toggle('active');
        });
        
        // Cerrar menú al hacer clic en un enlace
        nav.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                nav.classList.remove('active');
            });
        });
    }
});

// ═════════════════════════════════════════════════════
// ANIMACIÓN DE NÚMEROS (TRANSPARENCIA)
// ═════════════════════════════════════════════════════

function animateCounter(element, target, suffix = '') {
    let current = 0;
    const increment = Math.ceil(target / 60);
    const interval = setInterval(() => {
        current += increment;
        if (current >= target) {
            current = target;
            clearInterval(interval);
        }
        element.textContent = current + suffix;
    }, 30);
}

// ═════════════════════════════════════════════════════
// EJECUTAR AL CARGAR LA PÁGINA
// ═════════════════════════════════════════════════════

// Solo ejecutar si los elementos existen
const metricTerritorio = document.getElementById('metricTerritorio');
const metricTransacciones = document.getElementById('metricTransacciones');
const metricBeneficiarios = document.getElementById('metricBeneficiarios');

if (metricTerritorio) {
    // Ya está fijo en 90%, solo aseguramos que se vea
    metricTerritorio.textContent = '90%';
}

if (metricTransacciones) {
    animateCounter(metricTransacciones, 1247);
}

if (metricBeneficiarios) {
    animateCounter(metricBeneficiarios, 3892);
}