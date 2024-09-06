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
section.innerHTML = `
    <button class="banner">${dados[cont[0]].titulo}</button>
    <button class="banner">${dados[cont[1]].titulo}</button>
    <button class="banner">${dados[cont[2]].titulo}</button>
    <button class="banner">${dados[cont[3]].titulo}</button>
    <button class="banner">${dados[cont[4]].titulo}</button>
    `
let section2 = document.getElementById("todos");

// Cria 20 conteiners de 5 elementos cada, para que todos os filmes/séries do catálogo sejam apresentados em linhas de 5 elementos
function criarContainer(inicio, fim) {
    let container = document.createElement("div");
    container.classList.add("content");
    container.classList.add("todos"); // Evite duplicar IDs

    for (let i = inicio; i < fim; i++) {
        let banner = document.createElement("button");
        banner.classList.add("banner");
        banner.textContent = dados[i].titulo;
        container.appendChild(banner);
    }

    section2.appendChild(container);
}

// Criando os 20 containers
for (let i = 0; i < dados.length; i += 5) {
    criarContainer(i, i + 5);
}

