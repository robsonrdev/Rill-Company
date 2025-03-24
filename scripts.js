// inicio do comando para uma imagem 1° imagem

let currentImage = 1;

const img = document.getElementById('camisa');

// Função para trocar a imagem e adicionar transição
function changeImageOnHover() {
    img.style.opacity = 0.1;
    setTimeout(() => {
        if (currentImage === 1) {
            img.src = 'Fotos/camisa1.2.png';
            currentImage = 2;
        } else {
            img.src = 'Fotos/camisa.png';
            currentImage = 1;
        }

        img.style.opacity = 1;  // Inicia o fade in
    }, 300);  // Tempo de transição (1 segundo)
}

// Adiciona eventos de mouse
img.addEventListener('mouseover', changeImageOnHover);
img.addEventListener('mouseout', changeImageOnHover);
// fim do comando para uma imagem 1°imagem





let slideIndex = 0;
const slides = document.querySelector('.slides');
const totalSlides = document.querySelectorAll('.slide').length;

function showNextSlide() {
slideIndex = (slideIndex + 1) % totalSlides;
slides.style.transform = `translateX(-${slideIndex * 50}%)`;
}

setInterval(showNextSlide, 2500); // Troca a imagem a cada 3 segundos


// // Função para trocar a imagem e adicionar transição
// function changeImageOnHover(event) {
//     const img = event.target; // O alvo (elemento) do evento

//     let currentImage = img.getAttribute('data-current'); // Obtém o estado atual da imagem (se é a original ou a trocada)
    
//     img.style.opacity = 0.1; // Inicia o fade out (transição de opacidade)
    
//     setTimeout(() => {
//         if (currentImage === '1') {  // Se a imagem for a original
//             img.src = img.getAttribute('data-alt');  // Troca para a imagem alternada
//             img.setAttribute('data-current', '2');  // Atualiza o estado para "imagem trocada"
//         } else {  // Caso contrário, volta para a imagem original
//             img.src = img.getAttribute('data-original');
//             img.setAttribute('data-current', '1'); // Atualiza o estado para "imagem original"
//         }

//         img.style.opacity = 1;  // Inicia o fade in (transição de opacidade)
//     }, 300);  // Tempo de transição (300 ms)
// }

// // Seleciona todas as imagens com a classe 'imgProdutos'
// const images = document.querySelectorAll('.imgProdutos');

// // Adiciona o evento de hover para cada imagem
// images.forEach(img => {
//     // Armazena o caminho da imagem original e da imagem alternada
//     img.setAttribute('data-original', img.src);  // Imagem original
//     img.setAttribute('data-alt', img.src.replace('.png', '1.2.png')); // Imagem trocada (exemplo de troca)

//     // Definir o estado inicial da imagem como "original"
//     img.setAttribute('data-current', '1');

//     // Adiciona os eventos de mouse
//     img.addEventListener('mouseover', changeImageOnHover);
//     img.addEventListener('mouseout', changeImageOnHover);
// });
