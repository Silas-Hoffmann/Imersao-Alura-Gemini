const logo = document.getElementById('minhaLogo');

logo.addEventListener('click', () => {
    location.reload();
});

let data1 = "00/00/00", data2 = "00/00/00", data3 = "00/00/00", data4 = "00/00/00", data5 = "00/00/00", cont = [5];

//calcular data atual
const dataAtual = new Date();
const ano = dataAtual.getFullYear();
const mes = (dataAtual.getMonth() + 1).toString().padStart(2, '0');
const dia = dataAtual.getDate().toString().padStart(2, '0');
const DataAtual = `${ano}/${mes}/${dia}`;

//atribui as datas dos filmes mais recentes, às variáveis "data" e confere o número correspondente ao filme/série, à variável "cont"
//Os for loop fazem essas atribuições
for (let i = 0; i < 100; i++) {
    if (dados[i].data_de_lancamento > data1 && dados[i].data_de_lancamento < DataAtual) {
        data1 = dados[i].data_de_lancamento
        cont[0] = i;
    }
}
for (let i = 0; i < 100; i++) {
    if (dados[i].data_de_lancamento > data2 && dados[i].data_de_lancamento < data1 && dados[i].data_de_lancamento < DataAtual) {
        data2 = dados[i].data_de_lancamento;
        cont[1] = i
    }
}
for (let i = 0; i < 100; i++) {
    if (dados[i].data_de_lancamento > data3 && dados[i].data_de_lancamento < data2 && dados[i].data_de_lancamento < DataAtual) {
        data3 = dados[i].data_de_lancamento;
        cont[2] = i
    }
}
for (let i = 0; i < 100; i++) {
    if (dados[i].data_de_lancamento > data4 && dados[i].data_de_lancamento < data3 && dados[i].data_de_lancamento < DataAtual) {
        data4 = dados[i].data_de_lancamento;
        cont[3] = i
    }
}
for (let i = 0; i < 100; i++) {
    if (dados[i].data_de_lancamento > data5 && dados[i].data_de_lancamento < data4 && dados[i].data_de_lancamento < DataAtual) {
        data5 = dados[i].data_de_lancamento;
        cont[4] = i
    }
}


//adiciona os banners dos filmes/séries Novos
let section = document.getElementById("content");
section.innerHTML = ''; // Limpa a seção antes de adicionar novos elementos

// Itera pelos índices dos filmes (de 0 a 4)
for (let i = 0; i < 5; i++) {
    // Cria o botão
    let button = document.createElement("button");
    button.classList.add("banner");
    button.setAttribute("onclick", "abrirpainel(this)");

    // Cria o título
    let title = document.createElement("span");
    title.classList.add("hind");
    title.textContent = dados[cont[i]].titulo;

    // Cria a imagem
    let img = document.createElement("img");
    img.src = dados[cont[i]].poster;
    img.classList.add("tamanhoposter1");

    // Adiciona o título e a imagem ao botão
    button.appendChild(title);
    button.appendChild(img);

    // Adiciona o botão à seção
    section.appendChild(button);
}

let section2 = document.getElementById("todos");

// Cria 20 conteiners de 5 elementos cada, para que todos os filmes/séries do catálogo sejam apresentados em linhas de 5 elementos
function criarContainer(inicio, fim) {
    let container = document.createElement("div");
    container.classList.add("content");
    container.classList.add("todos");

    for (let i = inicio; i < fim; i++) {
        let banner = document.createElement("button");
        banner.classList.add("banner");

        // Cria o elemento <img> para o poster
        let poster = document.createElement("img");
        poster.src = dados[i].poster; // Atribui o caminho da imagem
        poster.classList.add("tamanhoposter1");

        // Cria um elemento <span> para o título e adiciona a classe "hind"
        let titulo = document.createElement("span");
        titulo.textContent = dados[i].titulo;
        titulo.classList.add("hind"); // Adiciona a classe "hind"

        // Adiciona o título e a imagem ao botão
        banner.appendChild(titulo); // Insere o título dentro do botão
        banner.appendChild(poster); // Insere a imagem dentro do botão

        // Adiciona o evento de clique
        banner.addEventListener("click", function () {
            abrirpainel(this);
        });

        container.appendChild(banner);
    }

    section2.appendChild(container);
}


// Cria os 20 containers
for (let i = 0; i < dados.length; i += 5) {
    criarContainer(i, i + 5);
}

function pesquisar() {
    let campoPesquisa = document.getElementById("campo-pesquisa").value.trim().toLowerCase(); // Remove espaços e converte para minúsculas
    console.log(campoPesquisa);

    // Verifica se o campo de pesquisa está vazio no início
    if (campoPesquisa === "") {
        return;
    }

    // Esconder a seção original e mostrar os resultados
    document.getElementById("esconder").classList.add("hind");
    document.getElementById("resultados").classList.remove("hind");

    let section3 = document.getElementById("resultados");
    section3.innerHTML = ""; // Limpa resultados anteriores

    for (let dado of dados) {
        // Verifica se o título contém o texto da pesquisa (case insensitive)
        if (dado.titulo.toLowerCase().includes(campoPesquisa)) {
            let button = document.createElement("button");
            button.classList.add("banner");
            button.setAttribute("onclick", "abrirpainel(this)");

            let title = document.createElement("span");
            title.classList.add("hind");
            title.textContent = dado.titulo;

            let img = document.createElement("img");
            img.src = dado.poster;
            img.classList.add("tamanhoposter1");

            // Adiciona o título e a imagem ao botão
            button.appendChild(title);
            button.appendChild(img);

            // Adiciona o botão à seção de resultados
            section3.appendChild(button);
        }
    }
}


function abrirpainel(botao) {
    document.getElementById("painel").classList.remove("hind");
    document.getElementById("opaco").classList.remove("hind");

    const nomeDoBotao = botao.textContent;

    let detalhefilme = document.getElementById("detalhes");
    let imagemfilme = document.getElementById("imagem");
    for (let dado of dados) {
        if (dado.titulo==nomeDoBotao) {

            let dataOriginal = dado.data_de_lancamento;
            let dataFormatada = new Date(dataOriginal).toLocaleDateString('pt-BR', {
                day: '2-digit',
                month: '2-digit',
                year: 'numeric'
            });

            imagemfilme.innerHTML = `
                <img src="${dado.poster}" class="tamanhoposter">
            `
            detalhefilme.innerHTML = `
            <h1 style="margin-bottom: 70px">${dado.titulo}</h1>
            <p style="margin: 10px; font-size: 20px;" >${dado.descricao}</p>
            <p style="margin: 10px; font-size: 20px;" >Data de lançamento: ${dataFormatada}</p>
            <p style="margin: 10px; font-size: 20px;" >Plataforma disponível:</p>
            <div class="plataformas">
                <li style="font-size: 20px;" >${dado.plataformas_disponiveis}</li>
            </div>`
        }
    }
}

function fecharpainel() {
    document.getElementById("painel").classList.add("hind");
    document.getElementById("opaco").classList.add("hind");
}