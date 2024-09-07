let dados = [
    {
      "titulo": "The Killer",
      "descricao": "Filme de ação dirigido por John Woo com uma assassina que falha em uma missão e enfrenta as consequências.",
      "data_de_lancamento": "2024/08/23",
      "plataformas_disponiveis": ["Netflix"]
    },
    {
      "titulo": "Untold: The Murder of Air McNair",
      "descricao": "Documentário investigando o assassinato do jogador de futebol Steve McNair.",
      "data_de_lancamento": "2024/08/20",
      "plataformas_disponiveis": ["Netflix"]
    },
    {
      "titulo": "Classified",
      "descricao": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur natus nulla expedita odio, reprehenderit harum suscipit quisquam. Nesciunt nulla, laboriosam provident doloremque consequuntur at neque temporibus unde asperiores placeat tenetur.",
      "data_de_lancamento": "2024/08/22",
      "plataformas_disponiveis": ["Prime Video"]
    },
    {
      "titulo": "Furiosa: A Mad Max Saga",
      "descricao": "Filme de ação que conta a origem da personagem Furiosa da franquia Mad Max.",
      "data_de_lancamento": "2024/08/16",
      "plataformas_disponiveis": ["Max"]
    },
    {
      "titulo": "JACKPOT!",
      "descricao": "Comédia sobre uma mulher que ganha na loteria e vira alvo de assassinos.",
      "data_de_lancamento": "2024/08/15",
      "plataformas_disponiveis": ["Prime Video"]
    },
    {
      "titulo": "Bad Monkey",
      "descricao": "Série sobre um ex-detetive de Miami que se envolve em uma investigação perigosa.",
      "data_de_lancamento": "2024/08/14",
      "plataformas_disponiveis": ["Apple TV+"]
    },
    {
      "titulo": "Night Swim",
      "descricao": "Thriller sobre uma família que descobre segredos assustadores em sua nova casa.",
      "data_de_lancamento": "2024/07/28",
      "plataformas_disponiveis": ["Prime Video"]
    },
    {
      "titulo": "Force of Nature: The Dry 2",
      "descricao": "Thriller australiano com um agente investigando um desaparecimento misterioso.",
      "data_de_lancamento": "2024/09/20",
      "plataformas_disponiveis": ["Prime Video"]
    },
    {
      "titulo": "The Iron Claw",
      "descricao": "Filme biográfico sobre os irmãos Von Erich, lendas do wrestling que enfrentaram tragédias.",
      "data_de_lancamento": "2024/09/20",
      "plataformas_disponiveis": ["Prime Video"]
    },
    {
      "titulo": "Squid Game",
      "descricao": "Série de drama sul-coreana onde centenas de pessoas endividadas competem em jogos infantis mortais por um grande prêmio em dinheiro.",
      "data_de_lancamento": "2021/09/17",
      "plataformas_disponiveis": ["Netflix"]
    },
    {
      "titulo": "Damsel",
      "descricao": "Filme de fantasia e ação onde uma jovem princesa precisa lutar para salvar a si mesma de ser sacrificada a um dragão.",
      "data_de_lancamento": "2024/04/13",
      "plataformas_disponiveis": ["Netflix"]
    },
    {
      "titulo": "The Mandalorian",
      "descricao": "Série do universo Star Wars, centrada no caçador de recompensas Mandaloriano e suas aventuras em uma galáxia distante.",
      "data_de_lancamento": "2019/11/12",
      "plataformas_disponiveis": ["Disney+"]
    },
    {
      "titulo": "Wednesday",
      "descricao": "Série de comédia sombria sobre a vida de Wednesday Addams que tenta resolver mistérios sobrenaturais enquanto navega pela vida em uma escola excêntrica.",
      "data_de_lancamento": "2022/11/23",
      "plataformas_disponiveis": ["Netflix"]
    },
    {
      "titulo": "The Penguin",
      "descricao": "Série spinoff de 'The Batman' focada na ascensão de Oswald Cobblepot, o vilão Pinguim, ao poder em Gotham City.",
      "data_de_lancamento": "2024/09/19",
      "plataformas_disponiveis": ["Max"]
    },
    {
      "titulo": "Edge of Tomorrow",
      "descricao": "Filme de ação e ficção científica com Tom Cruise e Emily Blunt, onde um soldado revive repetidamente a batalha contra alienígenas e busca mudar o curso da guerra.",
      "data_de_lancamento": "2014/09/07",
      "plataformas_disponiveis": ["Netflix"]
    },
    {
      "titulo": "Grave of the Fireflies",
      "descricao": "Filme animado do Studio Ghibli ambientado no Japão da Segunda Guerra Mundial, que conta a história de dois irmãos órfãos lutando para sobreviver.",
      "data_de_lancamento": "1989/09/16",
      "plataformas_disponiveis": ["Netflix"]
    },
    {
      "titulo": "The Boys",
      "descricao": "Série de super-heróis e sátira social onde um grupo tenta expor a verdade sobre heróis corrompidos e perigosos.",
      "data_de_lancamento": "2019/07/26",
      "plataformas_disponiveis": ["Prime Video"]
    },
    {
      "titulo": "Loki",
      "descricao": "Série que acompanha o Deus da Trapaça, Loki, em suas aventuras após roubar o Tesseract, navegando por diferentes linhas temporais.",
      "data_de_lancamento": "2021/06/09",
      "plataformas_disponiveis": ["Disney+"]
    },
    {
      "titulo": "Ahsoka",
      "descricao": "Série spin-off de Star Wars que segue a ex-Jedi Ahsoka Tano enquanto ela investiga uma ameaça emergente na galáxia.",
      "data_de_lancamento": "2023/08/22",
      "plataformas_disponiveis": ["Disney+"]
    },
    {
        "titulo": "The Perfect Couple",
        "descricao": "Baseado no livro de Elin Hilderbrand, a série acompanha uma família rica que, durante o fim de semana de um casamento, se vê envolvida em um mistério de assassinato.",
        "data_de_lancamento": "2024/09/05",
        "plataformas_disponiveis": ["Netflix"]
      },
      {
        "titulo": "Tell Me Lies",
        "descricao": "Drama sobre o relacionamento turbulento entre Lucy e Stephen, que se desenrola ao longo de oito anos, abordando os altos e baixos de suas vidas.",
        "data_de_lancamento": "2024/09/06",
        "plataformas_disponiveis": ["Disney+"]
      },
      {
        "titulo": "Fight Night: The Million Dollar Heist",
        "descricao": "Baseado em um evento real de 1970, um grande assalto ocorre durante uma festa após a luta de Muhammad Ali.",
        "data_de_lancamento": "2024/09/05",
        "plataformas_disponiveis": ["Max"]
      },
      {
        "titulo": "Slow Horses",
        "descricao": "Espiões disfuncionais de uma agência de inteligência britânica se envolvem em missões perigosas, mesclando humor com drama.",
        "data_de_lancamento": "2024/09/04",
        "plataformas_disponiveis": ["Apple TV+"]
      },
      {
        "titulo": "Ready Player One",
        "descricao": "Em um futuro distópico, um jovem participa de uma caça ao tesouro dentro de um jogo de realidade virtual, onde a recompensa é imensa.",
        "data_de_lancamento": "2024/09/01",
        "plataformas_disponiveis": ["Max"]
      },
      {
        "titulo": "The Disappearance of Shere Hite",
        "descricao": "Documentário sobre a vida de Shere Hite, autora que revolucionou os estudos sobre sexualidade feminina, explorando seu impacto e legado.",
        "data_de_lancamento": "2024/09/10",
        "plataformas_disponiveis": ["Max"]
      },
      {
        "titulo": "The Absence of Eden",
        "descricao": "Thriller que explora questões de imigração e crime organizado, ambientado em um contexto atual e relevante.",
        "data_de_lancamento": "2024/09/20",
        "plataformas_disponiveis": ["Max"]
      },
      {
        "titulo": "Cash Out",
        "descricao": "Um grupo de criminosos realiza um audacioso roubo bancário em busca de uma enorme fortuna, mas nada sai conforme o planejado.",
        "data_de_lancamento": "2024/09/06",
        "plataformas_disponiveis": ["Max"]
      },
      {
        "titulo": "Wolfs",
        "descricao": "Filme de ação e comédia com George Clooney e Brad Pitt, que interpretam artistas criminosos rivais que precisam se unir para limpar cenas de crimes.",
        "data_de_lancamento": "2024/09/01",
        "plataformas_disponiveis": ["Apple TV+"]
      },
      {
        "titulo": "His Three Daughters",
        "descricao": "Três irmãs se reúnem em um apartamento em Nova York enquanto lidam com a iminente morte do pai. Estrelado por Elizabeth Olsen e Natasha Lyonne.",
        "data_de_lancamento": "2024/09/06",
        "plataformas_disponiveis": ["Netflix"]
      },
      {
        "titulo": "American Sports Story",
        "descricao": "Série dramatizando a vida do jogador de futebol americano Aaron Hernandez e seu trágico envolvimento em um assassinato.",
        "data_de_lancamento": "2024/09/17",
        "plataformas_disponiveis": ["Max"]
      },
      {
        "titulo": "My Brilliant Friend",
        "descricao": "Série baseada nos romances napolitanos de Elena Ferrante, seguindo duas amigas da infância até a vida adulta na Itália dos anos 80.",
        "data_de_lancamento": "2024/09/09",
        "plataformas_disponiveis": ["Max"]
      },
      {
        "titulo": "How to Die Alone",
        "descricao": "Comédia sobre uma mulher que, após uma experiência de quase morte, decide transformar sua vida e enfrentar seus medos.",
        "data_de_lancamento": "2024/09/13",
        "plataformas_disponiveis": ["Max"]
      },
      {
        "titulo": "Handling the Undead",
        "descricao": "Série sueca que explora o renascimento misterioso de pessoas falecidas e as consequências sociais e familiares desse fenômeno.",
        "data_de_lancamento": "2024/09/17",
        "plataformas_disponiveis": ["Max"]
      },
      {
        "titulo": "Rescue: HI-Surf",
        "descricao": "Série de ação acompanhando uma equipe de salva-vidas nas perigosas praias de Oahu, Havaí.",
        "data_de_lancamento": "2024/09/23",
        "plataformas_disponiveis": ["Max"]
      },
      {
        "titulo": "Boy Kills World",
        "descricao": "Filme de ação e fantasia em que um jovem surdo mudo se torna um assassino implacável em um mundo distópico.",
        "data_de_lancamento": "2024/09/13",
        "plataformas_disponiveis": ["Max"]
      },
      {
        "titulo": "FLY",
        "descricao": "Filme emocionante sobre uma jovem bailarina que busca alcançar a grandeza enquanto lida com desafios pessoais e familiares.",
        "data_de_lancamento": "2024/09/25",
        "plataformas_disponiveis": ["Max"]
      },
      {
        "titulo": "Come Out Fighting",
        "descricao": "Drama de guerra baseado em eventos reais onde soldados enfrentam desafios inesperados em batalhas decisivas da Segunda Guerra Mundial.",
        "data_de_lancamento": "2024/09/21",
        "plataformas_disponiveis": ["Max"]
      },
      {
        "titulo": "Dragonkeeper",
        "descricao": "Filme animado baseado em uma jovem guardiã de dragões e sua jornada para salvar uma criatura lendária.",
        "data_de_lancamento": "2024/09/05",
        "plataformas_disponiveis": ["Max"]
      },
      {
        "titulo": "Super 8",
        "descricao": "Filme de ficção científica e mistério sobre um grupo de crianças que testemunha um acidente de trem e descobre algo extraordinário.",
        "data_de_lancamento": "2024/09/01",
        "plataformas_disponiveis": ["Netflix"]
      },
      {
        "titulo": "Straw Dogs",
        "descricao": "Thriller psicológico sobre um roteirista que se muda para uma cidade rural e enfrenta a hostilidade dos moradores locais.",
        "data_de_lancamento": "2024/09/01",
        "plataformas_disponiveis": ["Max"]
      },
      {
        "titulo": "Us",
        "descricao": "Terror psicológico onde uma família é aterrorizada por seus doppelgängers durante uma misteriosa noite de férias.",
        "data_de_lancamento": "2024/09/01",
        "plataformas_disponiveis": ["Max"]
      },
      {
        "titulo": "Forged in Fire",
        "descricao": "Série de competição onde ferreiros testam suas habilidades recriando armas lendárias.",
        "data_de_lancamento": "2024/09/05",
        "plataformas_disponiveis": ["Max"]
      },
      {
        "titulo": "The Golden Bachelorette",
        "descricao": "Reality show que acompanha uma mulher de idade avançada na busca por amor entre vários pretendentes.",
        "data_de_lancamento": "2024/09/19",
        "plataformas_disponiveis": ["Max"]
      },
      {
        "titulo": "The Unbearable Weight of Massive Talent",
        "descricao": "Comédia em que Nicolas Cage interpreta uma versão fictícia de si mesmo recrutado por um fã para uma missão bizarra.",
        "data_de_lancamento": "2024/09/19",
        "plataformas_disponiveis": ["Max"]
      },
      {
        "titulo": "The Old Man",
        "descricao": "Ex-agente da CIA é perseguido por antigos aliados após se envolver em um incidente misterioso.",
        "data_de_lancamento": "2024/09/13",
        "plataformas_disponiveis": ["Max"]
      },
      {
        "titulo": "Agatha All Along",
        "descricao": "Série derivada de WandaVision centrada em Agatha Harkness explorando seus poderes e segredos.",
        "data_de_lancamento": "2024/09/01",
        "plataformas_disponiveis": ["Disney+"]
      },
      {
        "titulo": "The Favourite",
        "descricao": "Drama histórico centrado em uma intensa rivalidade na corte real da Inglaterra durante o reinado da Rainha Ana.",
        "data_de_lancamento": "2024/09/15",
        "plataformas_disponiveis": ["Max"]
      },
      {
        "titulo": "Universal Basic Guys",
        "descricao": "Comédia sobre três amigos que precisam se reinventar em um mundo onde o trabalho está em declínio.",
        "data_de_lancamento": "2024/09/09",
        "plataformas_disponiveis": ["Max"]
      },
      {
        "titulo": "UFO Hunters",
        "descricao": "Série documental explorando investigações sobre OVNIs e os mistérios que cercam os avistamentos.",
        "data_de_lancamento": "2024/09/19",
        "plataformas_disponiveis": ["Max"]
      },
      {
        "titulo": "The Boy and the Heron",
        "descricao": "Um jovem garoto é guiado por uma garça através de um mundo compartilhado pelos vivos e mortos.",
        "data_de_lancamento": "2024/09/06",
        "plataformas_disponiveis": ["Max"]
      },
      {
        "titulo": "Civil War",
        "descricao": "Um drama intenso da A24 que explora as complexidades da sociedade americana moderna.",
        "data_de_lancamento": "2024/09/13",
        "plataformas_disponiveis": ["Max"]
      },
      {
        "titulo": "Everything Everywhere All at Once",
        "descricao": "Uma mulher comum descobre que precisa acessar versões alternativas de si mesma para salvar o multiverso.",
        "data_de_lancamento": "2024/09/01",
        "plataformas_disponiveis": ["Max"]
      },
      {
        "titulo": "The Martian",
        "descricao": "Um astronauta é deixado para trás em Marte e precisa usar sua engenhosidade para sobreviver enquanto aguarda resgate.",
        "data_de_lancamento": "2024/09/01",
        "plataformas_disponiveis": ["Max"]
      },
      {
        "titulo": "The Shining",
        "descricao": "Um escritor e sua família enfrentam forças sobrenaturais enquanto cuidam de um hotel isolado durante o inverno.",
        "data_de_lancamento": "2024/09/01",
        "plataformas_disponiveis": ["Max"]
      },
      {
        "titulo": "X-Men: Apocalypse",
        "descricao": "Os X-Men enfrentam o mutante mais poderoso de todos os tempos, Apocalipse, em uma batalha épica.",
        "data_de_lancamento": "2024/09/01",
        "plataformas_disponiveis": ["Max"]
      },
      {
        "titulo": "Prisoners",
        "descricao": "Um pai desesperado toma medidas extremas quando sua filha desaparece, confrontando os limites de sua moralidade.",
        "data_de_lancamento": "2024/09/20",
        "plataformas_disponiveis": ["Max"]
      },
      {
        "titulo": "Bodies Bodies Bodies",
        "descricao": "Um grupo de amigos tenta sobreviver a uma noite de assassinato e traição em uma mansão isolada.",
        "data_de_lancamento": "2024/09/20",
        "plataformas_disponiveis": ["Max"]
      },
      {
        "titulo": "Halloween Wars",
        "descricao": "Artistas competem para criar as mais assustadoras e elaboradas exibições temáticas de Halloween.",
        "data_de_lancamento": "2024/09/22",
        "plataformas_disponiveis": ["Max"]
      },
      {
        "titulo": "Triple 9",
        "descricao": "Um grupo de criminosos e policiais corruptos planeja o roubo do século.",
        "data_de_lancamento": "2024/09/08",
        "plataformas_disponiveis": ["Max"]
      },
      {
        "titulo": "Drive My Car",
        "descricao": "Um ator e diretor enfrenta suas emoções reprimidas enquanto dirige uma produção teatral em Hiroshima.",
        "data_de_lancamento": "2024/09/02",
        "plataformas_disponiveis": ["Max"]
      },
      {
        "titulo": "Troll Hunter",
        "descricao": "Estudantes de cinema noruegueses descobrem um caçador de trolls em uma jornada perigosa para documentar criaturas míticas.",
        "data_de_lancamento": "2024/09/01",
        "plataformas_disponiveis": ["Max"]
      },
      {
        "titulo": "The Exorcist",
        "descricao": "Uma jovem é possuída por um espírito demoníaco e um padre tenta salvá-la com um exorcismo.",
        "data_de_lancamento": "2024/09/01",
        "plataformas_disponiveis": ["Max"]
      },
      {
        "titulo": "The Big Chill",
        "descricao": "Um grupo de amigos da faculdade se reúne após a morte de um deles e reflete sobre a vida e suas escolhas.",
        "data_de_lancamento": "2024/09/01",
        "plataformas_disponiveis": ["Max"]
      },
      {
        "titulo": "Scooby-Doo on Zombie Island",
        "descricao": "Scooby e sua turma investigam uma ilha misteriosa habitada por zumbis.",
        "data_de_lancamento": "2024/09/14",
        "plataformas_disponiveis": ["Max"]
      },
      {
        "titulo": "Independence Day",
        "descricao": "A humanidade se une para combater uma invasão alienígena maciça no Dia da Independência dos Estados Unidos.",
        "data_de_lancamento": "2024/09/01",
        "plataformas_disponiveis": ["Max"]
      },
      {
        "titulo": "Knight and Day",
        "descricao": "Um agente secreto inesperadamente leva uma mulher comum em uma aventura cheia de ação ao redor do mundo.",
        "data_de_lancamento": "2024/09/01",
        "plataformas_disponiveis": ["Max"]
      },
      {
        "titulo": "Shrek Forever After",
        "descricao": "Shrek tenta recuperar sua vida tranquila após assinar um pacto com o trapaceiro Rumpelstiltskin.",
        "data_de_lancamento": "2024/09/01",
        "plataformas_disponiveis": ["Max"]
      },
      {
        "titulo": "Viva",
        "descricao": "Um jovem aspirante a drag queen enfrenta as complicações de sua vida familiar em Havana.",
        "data_de_lancamento": "2024/09/01",
        "plataformas_disponiveis": ["Max"]
      },
      {
        "titulo": "I Saw the TV Glow",
        "descricao": "Um filme de terror surreal da A24 que explora as influências sombrias de uma estranha transmissão televisiva.",
        "data_de_lancamento": "2024/09/20",
        "plataformas_disponiveis": ["Max"]
      },
      {
        "titulo": "Boxer",
        "descricao": "Filme polonês sobre um jovem boxeador que foge do regime comunista para perseguir seu sonho de sucesso no boxe.",
        "data_de_lancamento": "2024/09/11",
        "plataformas_disponiveis": ["Netflix"]
      },
      {
        "titulo": "i Used to Be Funny",
        "descricao": "Comédia dramática sobre uma jovem que enfrenta dilemas enquanto tenta ser comediante e lidar com PTSD.",
        "data_de_lancamento": "2024/09/05",
        "plataformas_disponiveis": ["Netflix"]
      },
      {
        "titulo": "3:10 to Yuma",
        "descricao": "Faroeste em que um fazendeiro precisa escoltar um famoso fora-da-lei até o trem enfrentando muitos perigos.",
        "data_de_lancamento": "2024/09/01",
        "plataformas_disponiveis": ["Netflix"]
      },
      {
        "titulo": "Megalópolis",
        "descricao": "Drama de ficção científica sobre um arquiteto visionário que tenta reconstruir uma Nova York utópica após uma catástrofe.",
        "data_de_lancamento": "2024/09/01",
        "plataformas_disponiveis": ["Prime Video"]
      },
      {
        "titulo": "Transformers One",
        "descricao": "Prelúdio animado que explora a juventude de Optimus Prime e Megatron antes de se tornarem inimigos.",
        "data_de_lancamento": "2024/09/01",
        "plataformas_disponiveis": ["Prime Video"]
      },
      {
        "titulo": "Speak No Evil",
        "descricao": "Thriller psicológico sobre uma família americana que se vê presa em uma situação assustadora ao visitar amigos britânicos.",
        "data_de_lancamento": "2024/09/02",
        "plataformas_disponiveis": ["Prime Video"]
      },
      {
        "titulo": "The Walking Dead: Daryl Dixon – The Book of Carol",
        "descricao": "Daryl e Carol se reencontram na França enquanto buscam por um amigo desaparecido.",
        "data_de_lancamento": "2024/09/29",
        "plataformas_disponiveis": ["Max"]
      },
      {
        "titulo": "La Maison",
        "descricao": "Drama francês que explora as complexidades de uma herança familiar em uma grande propriedade.",
        "data_de_lancamento": "2024/09/20",
        "plataformas_disponiveis": ["Apple TV+"]
      },
      {
        "titulo": "Midnight Family",
        "descricao": "Série dramática que segue uma família de paramédicos lutando para salvar vidas nas ruas da Cidade do México.",
        "data_de_lancamento": "2024/09/25",
        "plataformas_disponiveis": ["Apple TV+"]
      },
      {
        "titulo": "The Expendables 4",
        "descricao": "Filme de ação que traz de volta a equipe de mercenários agora em uma missão mais perigosa do que nunca.",
        "data_de_lancamento": "2024/09/05",
        "plataformas_disponiveis": ["Prime Video"]
      },
      {
        "titulo": "Twilight of the Gods",
        "descricao": "Série animada de Zack Snyder que mergulha na mitologia nórdica com muita ação e drama épico.",
        "data_de_lancamento": "2024/09/19",
        "plataformas_disponiveis": ["Netflix"]
      },
      {
        "titulo": "Fool Me Once",
        "descricao": "Thriller psicológico onde uma mulher descobre segredos inquietantes sobre o assassinato de seu marido.",
        "data_de_lancamento": "2024/09/12",
        "plataformas_disponiveis": ["Netflix"]
      },
      {
        "titulo": "The Gentlemen",
        "descricao": "Série derivada do filme homônimo onde criminosos britânicos lidam com tramas complexas e traições.",
        "data_de_lancamento": "2024/09/10",
        "plataformas_disponiveis": ["Netflix"]
      },
      {
        "titulo": "Griselda",
        "descricao": "Série que conta a história de Griselda Blanco, uma das maiores traficantes de drogas da história.",
        "data_de_lancamento": "2024/09/01",
        "plataformas_disponiveis": ["Netflix"]
      },
      {
        "titulo": "The 3 Body Problem",
        "descricao": "Série de ficção científica baseada no famoso romance chinês explorando o primeiro contato da humanidade com uma civilização alienígena.",
        "data_de_lancamento": "2024/09/10",
        "plataformas_disponiveis": ["Netflix"]
      },
      {
        "titulo": "The Accident",
        "descricao": "Série de drama em que um acidente industrial devasta uma comunidade e revela segredos sombrios.",
        "data_de_lancamento": "2024/09/09",
        "plataformas_disponiveis": ["Netflix"]
      },
      {
        "titulo": "The Creator",
        "descricao": "Filme de ficção científica em um futuro onde a inteligência artificial se volta contra a humanidade.",
        "data_de_lancamento": "2024/09/07",
        "plataformas_disponiveis": ["Max"]
      },
      {
        "titulo": "A Haunting in Venice",
        "descricao": "Thriller sobrenatural onde um detetive investiga eventos estranhos em uma mansão em Veneza.",
        "data_de_lancamento": "2024/09/15",
        "plataformas_disponiveis": ["Max"]
      },
      {
        "titulo": "Beetlejuice 2",
        "descricao": "Sequência da famosa comédia de Tim Burton com novos sustos e risadas em uma casa mal-assombrada.",
        "data_de_lancamento": "2024/09/05",
        "plataformas_disponiveis": ["Max"]
      },
      {
        "titulo": "Blue Giant",
        "descricao": "Filme animado sobre um jovem saxofonista que sonha em se tornar o maior músico de jazz do mundo.",
        "data_de_lancamento": "2024/09/03",
        "plataformas_disponiveis": ["Netflix"]
      },
      {
        "titulo": "Minha Fama de Mau",
        "descricao": "Filme biográfico sobre o cantor Erasmo Carlos, explorando sua juventude, carreira musical e sua parceria com Roberto Carlos.",
        "data_de_lancamento": "2019/02/14",
        "plataformas_disponiveis": ["HBO Max"]
      },
      {
        "titulo": "Rua Augusta",
        "descricao": "Série que mergulha no mundo noturno da Rua Augusta, em São Paulo, centrada na vida de Mika, uma stripper que busca sua identidade em meio ao caos da noite paulistana.",
        "data_de_lancamento": "2018/03/15",
        "plataformas_disponiveis": ["HBO Max"]
      },
      {
        "titulo": "Psi",
        "descricao": "Série sobre o psicanalista Carlo Antonini, que lida com seus pacientes em São Paulo enquanto enfrenta seus próprios desafios pessoais.",
        "data_de_lancamento": "2014/03/23",
        "plataformas_disponiveis": ["HBO Max"]
      },
      {
        "titulo": "O Nome da Morte",
        "descricao": "Baseado em fatos reais, o filme narra a história de Júlio Santana, um dos maiores assassinos de aluguel do Brasil, explorando as consequências de suas ações.",
        "data_de_lancamento": "2018/08/09",
        "plataformas_disponiveis": ["Prime Video"]
      },
      {
        "titulo": "Irmandade",
        "descricao": "Série sobre uma advogada que descobre que seu irmão desaparecido é o líder de uma facção criminosa, levando-a a questionar seu senso de justiça.",
        "data_de_lancamento": "2019/10/25",
        "plataformas_disponiveis": ["Netflix"]
      },
      {
        "titulo": "Manhãs de Setembro",
        "descricao": "Série que segue Cassandra, uma mulher trans que tenta equilibrar sua vida pessoal e profissional após descobrir que tem um filho.",
        "data_de_lancamento": "2021/06/25",
        "plataformas_disponiveis": ["Prime Video"]
      },
      {
        "titulo": "Pacto Brutal: O Assassinato de Daniella Perez",
        "descricao": "Série documental que investiga o brutal assassinato da atriz Daniella Perez ocorrido nos anos 1990, revelando as falhas no sistema de justiça.",
        "data_de_lancamento": "2022/07/21",
        "plataformas_disponiveis": ["HBO Max"]
      },
      {
        "titulo": "Guerras do Brasil.doc",
        "descricao": "Documentário que explora diversos conflitos que moldaram a história do Brasil, como a Guerra do Paraguai e a Revolução de 1930.",
        "data_de_lancamento": "2019/04/25",
        "plataformas_disponiveis": ["Netflix"]
      },
      {
        "titulo": "Pico da Neblina",
        "descricao": "Série que imagina um Brasil onde a maconha foi legalizada, acompanhando a trajetória de Biriba, um ex-traficante que tenta se adaptar ao novo mercado legal.",
        "data_de_lancamento": "2019/08/04",
        "plataformas_disponiveis": ["HBO Max"]
      },
      {
        "titulo": "Nise: O Coração da Loucura",
        "descricao": "Filme biográfico sobre Nise da Silveira, uma psiquiatra que revolucionou o tratamento de pacientes psiquiátricos no Brasil com métodos humanizados.",
        "data_de_lancamento": "2016/04/21",
        "plataformas_disponiveis": ["Prime Video"]
      },
      {
        "titulo": "Bingo: O Rei das Manhãs",
        "descricao": "Filme inspirado na vida de Arlindo Barreto, que interpretou o palhaço Bozo no Brasil, retratando os altos e baixos de sua carreira e a luta contra o vício.",
        "data_de_lancamento": "2017/08/24",
        "plataformas_disponiveis": ["HBO Max"]
      }
    ]