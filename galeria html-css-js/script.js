// Seleciona todos os elementos de foto e o modal
const photos = document.querySelectorAll('.photo');
const modal = document.getElementById('modal');
const modalImage = document.getElementById('modal-image');
const closeModal = document.querySelector('.close');

// Variáveis para navegação
let currentImageIndex = 0;
const images = Array.from(document.querySelectorAll('.photo'));
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');

// Função para atualizar a imagem no modal
const updateModalImage = (index) => {
  const imgSrc = images[index].dataset.img; // Pega o caminho da imagem
  modalImage.classList.remove('loaded'); // Remove a classe 'loaded' para reiniciar a animação de carregamento
  modalImage.src = `./imgs/${imgSrc}`; // Atualiza o src da imagem no modal
  modalImage.onload = () => modalImage.classList.add('loaded'); // Adiciona a classe 'loaded' quando a imagem for carregada
};

// Adiciona o evento de clique a cada foto
photos.forEach((photo, index) => {
  photo.addEventListener('click', () => {
    currentImageIndex = index; // Armazena o índice da imagem clicada
    const imgSrc = photo.dataset.img; // Pega o caminho da imagem
    modalImage.src = `./imgs/${imgSrc}`; // Atualiza o src da imagem no modal
    modal.classList.add('show'); // Exibe o modal
  });
});

// Fecha o modal ao clicar no botão de fechar
closeModal.addEventListener('click', () => {
  modal.classList.remove('show'); // Remove a classe 'show' para fechar o modal
});

// Fecha o modal ao clicar fora da imagem
modal.addEventListener('click', (event) => {
  if (event.target === modal) {
    modal.classList.remove('show'); // Fecha o modal se o clique for fora da imagem
  }
});

// Navegação entre as imagens
prevBtn.addEventListener('click', () => {
  currentImageIndex = (currentImageIndex - 1 + images.length) % images.length; // Navegação cíclica para a imagem anterior
  updateModalImage(currentImageIndex); // Atualiza a imagem no modal
});

nextBtn.addEventListener('click', () => {
  currentImageIndex = (currentImageIndex + 1) % images.length; // Navegação cíclica para a próxima imagem
  updateModalImage(currentImageIndex); // Atualiza a imagem no modal
});

// Fecha o modal ao pressionar a tecla 'Esc'
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    modal.classList.remove('show'); // Fecha o modal ao pressionar 'Esc'
  }
});

// Adiciona a classe 'loaded' quando a imagem no modal é carregada
modalImage.onload = () => {
  modalImage.classList.add('loaded');
};
