const showContent = (element, div) => {
    let contentsDiv = document.querySelectorAll('.contents > div');
    let liElements = document.querySelectorAll('.menu-content > li');

    contentsDiv.forEach((divContent) => {
        divContent.classList.remove('active');
    });

    liElements.forEach((liElement) => {
        liElement.style.color = '#e2dbdb';
    });

    document.querySelector(`.${div}`).classList.add('active');
    element.style.color = '#F12C4C';
}

showContent(document.querySelector('.menu-content li'), 'sobre', 0);

// Projetos

const projetos = {
    LojaVirtual: {
        img: 'projeto-loja.png',
        icon: 'fa-solid fa-calculator',
        video: '1TijK0Slfxk',
        title: 'Loja Virtual',
        descricao: 'Minha Loja Virtual oferece uma experiência completa aos clientes, com recursos de cadastro, login, busca, visualização e compra de produtos, além de funcionalidades exclusivas para administradores, como gerenciamento de produtos, usuários e promoções personalizadas.',
        tecnologias: {
            html: true,
            css: true,
            js: true,
            php: true,
            mysql: true
        },
        buttonDemo: '',
        buttonRepositorio: ''
    },
    catalogoFilmes: {
        img: 'projeto-catalogo-filmes.png',
        icon: 'fa-solid fa-film',
        video: 'rl3Hln_scJs',
        title: 'Catalogo de Filmes',
        descricao: 'Com o catálogo de filmes, você terá acesso fácil aos filmes mais populares de cada categoria. Explore trailers, informações de elenco, avaliações de usuários e adicione seus filmes favoritos. Utilize nossa busca inteligente para encontrar filmes específicos e desfrute de uma experiência completa de cinema em nossa plataforma.',
        tecnologias: {
            html: true,
            css: true,
            js: true,
            php: true,
            mysql: true,
            laravel: true
        },
        buttonDemo: '',
        buttonRepositorio: 'https://github.com/Thiagomeircoq/catalogo_filmes'
    },
    pokedex: {
        img: 'projeto-pokedex.png',
        icon: 'fa-solid fa-calculator',
        video: 'EuSWB6HxOzM',
        title: 'Pokedex',
        descricao: 'Com a Pokedex, você pode facilmente buscar informações sobre qualquer pokemon, seja pelo seu nome ou ID. Além disso, você pode filtrar pokemons por tipo para encontrar exatamente o que está procurando. Ao clicar em um pokemon, você terá acesso a informações detalhadas sobre suas estatísticas, vantagens, fraquezas e evoluções. Esses detalhes são cruciais para formular estratégias vencedoras em batalhas pokemon.',
        tecnologias: {
            html: true,
            css: true,
            js: true,
            php: false,
            mysql: false
        },
        buttonDemo: 'https://wonderful-klepon-05fbb6.netlify.app/',
        buttonRepositorio: 'https://github.com/Thiagomeircoq/pokedex'
    },
    chatOnline: {
        img: 'projeto-chat-online.png',
        icon: 'fa-solid fa-calculator',
        video: 'iJGc0dluN8A',
        title: 'Chat Online',
        descricao: 'Desenvolvi um sistema de chat online que permite aos usuários criar perfis, enviar e editar mensagens, além de personalizar suas informações. É uma plataforma interativa para comunicação conveniente entre usuários, promovendo colaboração e engajamento.',
        tecnologias: {
            html: true,
            css: true,
            js: true,
            php: true,
            mysql: true
        },
        buttonDemo: '',
        buttonRepositorio: 'https://github.com/Thiagomeircoq/chatOnline'
    },
    calculadora: {
        img: 'projeto-calculadora.png',
        icon: 'fa-solid fa-calculator',
        video: '',
        title: 'Calculadora',
        descricao: 'A calculadora oferece uma maneira fácil e rápida de realizar operações matemáticas básicas, como adição, subtração, multiplicação e divisão. Simplifique seus cálculos e obtenha resultados precisos com esta ferramenta eficiente.',
        tecnologias: {
            html: true,
            css: true,
            js: true,
            php: false,
            mysql: false
        },
        buttonDemo: 'https://main--dreamy-centaur-10a9c3.netlify.app/',
        buttonRepositorio: 'https://github.com/Thiagomeircoq/calculadora'
    },
    jogoDaVelha: {
        img: 'projeto-jogo-da-velha.png',
        icon: 'fa-solid fa-calculator',
        video: '',
        title: 'Jogo da Velha',
        descricao: 'O jogo da velha proporciona uma experiência clássica e divertida para jogadores de todas as idades. Desafie seus amigos  neste jogo de estratégia. Busque a vitória ao formar uma linha com três símbolos iguais em um tabuleiro 3x3. Divirta-se e aproveite momentos de diversão com o jogo da velha!',
        tecnologias: {
            html: true,
            css: true,
            js: true,
            php: false,
            mysql: false
        },
        buttonDemo: 'https://jovial-basbousa-cf9066.netlify.app/',
        buttonRepositorio: ''
    }

}

let currentIndex = 0;

const projetoImage = document.querySelector('.projeto-img');
const projetoTitle = document.querySelector('.title-project');
const projetoDescription = document.querySelector('.description-project');
const projetoButtonDemo = document.querySelector('.button-demo');
const projetoButtonRepos = document.querySelector('.button-repos');

function displayProjeto(index) {
    const projeto = Object.values(projetos)[index];
    projetoImage.src = `assets/img/${projeto.img}`;
    projetoTitle.textContent = projeto.title;
    projetoDescription.textContent = projeto.descricao;

    if (!projeto.buttonDemo) {
        projetoButtonDemo.href = '#';
    } else {
        projetoButtonDemo.href = projeto.buttonDemo;
    }

    if (!projeto.buttonRepositorio) {
        projetoButtonRepos.href = '#';
    } else {
        projetoButtonRepos.href = projeto.buttonRepositorio;
    }

}

function nextSlider() {
    currentIndex = (currentIndex + 1) % Object.keys(projetos).length;
    displayProjeto(currentIndex);
}

function prevSlider() {
    currentIndex = (currentIndex - 1 + Object.keys(projetos).length) % Object.keys(projetos).length;
    displayProjeto(currentIndex);
}

displayProjeto(currentIndex);

const prevButton = document.querySelector('.a-left');
const nextButton = document.querySelector('.a-right');
prevButton.addEventListener('click', prevSlider);
nextButton.addEventListener('click', nextSlider);