const carousel = document.querySelector('.carousel-inner');
const images = document.querySelectorAll('.carousel-inner img');

let currentIndex = 0;
const totalImages = images.length;
const slideInterval = 3000; // Tempo em milissegundos para trocar de imagem



function updateCarousel() {
  // Remove a classe "active" de todas as imagens
  images.forEach(img => img.classList.remove('active'));

  // Adiciona a classe "active" à imagem em foco
  images[currentIndex].classList.add('active');
}

setInterval(nextSlide, slideInterval);

// Atualiza o carousel ao carregar a página
updateCarousel();
