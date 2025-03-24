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

let currentImage2 = 1;

const img2 = document.getElementById('camisa2');

function testeImg() {
    img2.style.opacity = 0.1;
    setTimeout(() => {
        if (currentImage === 1) {
            img2.src = 'Fotos/camisa 2 costas.png';
            currentImage = 2;
        } else {
            img2.src = 'Fotos/camisa2 frente.png';
            currentImage = 1;
        }

        img2.style.opacity = 1;  // Inicia o fade in
    }, 300);  // Tempo de transição (1 segundo)
}

img2.addEventListener('mouseover', testeImg)
img2.addEventListener('mouseout', testeImg);


let currentImage3 = 1;

const img3 = document.getElementById('camisa3');

function Img3() {
    img3.style.opacity = 0.1;
    setTimeout(() => {
        if (currentImage === 1) {
            img3.src = 'Fotos/camisa 3 costas.png';
            currentImage = 2;
        } else {
            img3.src = 'Fotos/frente.png';
            currentImage = 1;
        }

        img3.style.opacity = 1;  // Inicia o fade in
    }, 300);  // Tempo de transição (1 segundo)
}

img3.addEventListener('mouseover', Img3)
img3.addEventListener('mouseout', Img3);


let currentImage4 = 1;

const img4 = document.getElementById('camisa4');

function Img4() {
    img4.style.opacity = 0.1;
    setTimeout(() => {
        if (currentImage === 1) {
            img4.src = 'Fotos/camisa 4 costas.png';
            currentImage = 2;
        } else {
            img4.src = 'Fotos/camisa 4 frente.png';
            currentImage = 1;
        }

        img4.style.opacity = 1;  // Inicia o fade in
    }, 300);  // Tempo de transição (1 segundo)
}

img4.addEventListener('mouseover', Img4)
img4.addEventListener('mouseout', Img4);



let currentImage5 = 1;

const img5 = document.getElementById('camisa5');

function Img5() {
    img5.style.opacity = 0.1;
    setTimeout(() => {
        if (currentImage === 1) {
            img5.src = 'Fotos/camisa 5 costas.png';
            currentImage = 2;
        } else {
            img5.src = 'Fotos/camisa 5 frente.png';
            currentImage = 1;
        }

        img5.style.opacity = 1;  // Inicia o fade in
    }, 300);  // Tempo de transição (1 segundo)
}

img5.addEventListener('mouseover', Img5)
img5.addEventListener('mouseout', Img5);


let currentImage6 = 1;

const img6 = document.getElementById('tenis1');

function Img6() {
    img6.style.opacity = 0.1;
    setTimeout(() => {
        if (currentImage === 1) {
            img6.src = 'Fotos/tenis 1 cima.png';
            currentImage = 2;
        } else {
            img6.src = 'Fotos/tenis 1 frente.png';
            currentImage = 1;
        }

        img6.style.opacity = 1;  // Inicia o fade in
    }, 300);  // Tempo de transição (1 segundo)
}

img6.addEventListener('mouseover', Img6)
img6.addEventListener('mouseout', Img6);

let currentImage7 = 1;

const img7 = document.getElementById('tenis2');

function Img7() {
    img7.style.opacity = 0.1;
    setTimeout(() => {
        if (currentImage === 1) {
            img7.src = 'Fotos/tenis 2 lado.png';
            currentImage = 2;
        } else {
            img7.src = 'Fotos/tenis 2 frente.png';
            currentImage = 1;
        }

        img7.style.opacity = 1;  // Inicia o fade in
    }, 300);  // Tempo de transição (1 segundo)
}

img7.addEventListener('mouseover', Img7)
img7.addEventListener('mouseout', Img7);


let currentImage8 = 1;

const img8 = document.getElementById('short1');

function Img8() {
    img8.style.opacity = 0.1;
    setTimeout(() => {
        if (currentImage === 1) {
            img8.src = 'Fotos/short 1 costas.png';
            currentImage = 2;
        } else {
            img8.src = 'Fotos/short 1 frente.png';
            currentImage = 1;
        }

        img8.style.opacity = 1;  // Inicia o fade in
    }, 300);  // Tempo de transição (1 segundo)
}

img8.addEventListener('mouseover', Img8)
img8.addEventListener('mouseout', Img8);





let slideIndex = 0;
const slides = document.querySelector('.slides');
const totalSlides = document.querySelectorAll('.slide').length;

function showNextSlide() {
slideIndex = (slideIndex + 1) % totalSlides;
slides.style.transform = `translateX(-${slideIndex * 50}%)`;
}

setInterval(showNextSlide, 2500); // Troca a imagem a cada 3 segundos


const cartIcon = document.getElementById('cart');
const cartSidebar = document.getElementById('cartSidebar');

cartIcon.addEventListener('click', () => {
    cartSidebar.classList.add('show');
});

function closeCart() {
    cartSidebar.classList.remove('show');
}

    // Seleciona todos os botões de compra
    document.querySelectorAll('.comprar-btn').forEach(botao => {
        botao.addEventListener('click', function() {
            let produto = this.closest('.produtos'); // Pega o elemento pai
            let nome = produto.querySelector('.produto-nome').innerText;
            let preco = produto.querySelector('.produto-preco').innerText;

            // Adiciona ao carrinho
            let listaCarrinho = document.getElementById('lista-carrinho');
            let item = document.createElement('li');
            item.innerHTML = `${nome} - ${preco}`;
            listaCarrinho.appendChild(item);
        });
    });
    

    