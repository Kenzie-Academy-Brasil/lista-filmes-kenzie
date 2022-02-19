const filmes = [
  {
    id: 1,
    nome: "O Massacre da Serra Elétrica: O Retorno de Leatherface",
    categoria: "Terror",
    descricao:
      "Nesta sequência, um grupo de jovens decide dar vida nova a uma cidade fantasma no Texas, mas acaba se deparando com Leatherface, o famoso m...",
    url: "https://raw.githubusercontent.com/Kenzie-Academy-Brasil/lista-filmes-kenzie/main/assets/img/image%20(23).png",
  },
  {
    id: 2,
    nome: "Pânico",
    categoria: "Terror",
    descricao:
      "Vinte e cinco anos após uma série de crimes brutais chocar a tranquila Woodsboro, um novo assassino se apropria da máscara de Ghostface e...",
    url: "https://raw.githubusercontent.com/Kenzie-Academy-Brasil/lista-filmes-kenzie/main/assets/img/image%20(22).png",
  },
  {
    id: 3,
    nome: "A Filha do Rei Online",
    categoria: "Romance",
    descricao:
      "Em busca de imortalidade, o rei Luís XIV rouba a força vital de uma sereia, mas tudo se complica quando sua filha ilegítima cria laços c...",
    url: "https://raw.githubusercontent.com/Kenzie-Academy-Brasil/lista-filmes-kenzie/main/assets/img/image%20(1).png",
  },
  {
    id: 4,
    nome: "Hypnotic",
    categoria: "Terror",
    descricao:
      "Sentindo-se bloqueada na vida pessoal e profissional, Jenn busca ajuda na hipnoterapia, mas descobre que se envolveu em um jogo mental mortífero.",
    url: "https://raw.githubusercontent.com/Kenzie-Academy-Brasil/lista-filmes-kenzie/main/assets/img/image%20(19).png",
  },
  {
    id: 5,
    nome: "Quattro metà",
    categoria: "Romance",
    descricao:
      "Nesta comédia romântica que desafia o conceito de almas gêmeas, histórias paralelas mostram quatro amigos (dois homens e duas mulheres) ...",
    url: "https://raw.githubusercontent.com/Kenzie-Academy-Brasil/lista-filmes-kenzie/main/assets/img/image%20(2).png",
  },
  {
    id: 6,
    nome: "Mais Além",
    categoria: "Comédia",
    descricao:
      "Uma mãe solteira resolve se mudar para uma pequena cidade do interior com seus filhos, e acaba descobrindo uma conexão com os Caça-Fantas...",
    url: "https://raw.githubusercontent.com/Kenzie-Academy-Brasil/lista-filmes-kenzie/main/assets/img/image%20(3).png",
  },
  {
    id: 7,
    nome: "Duna",
    categoria: "Drama",
    descricao:
      "Em um futuro distante, planetas são comandados por casas nobres que fazem parte de um império feudal intergalático. Paul Atreides é um jovem homem cuja família toma controle do planeta deserto...",
    url: "https://raw.githubusercontent.com/Kenzie-Academy-Brasil/lista-filmes-kenzie/main/assets/img/image%20(20).png",
  },
  {
    id: 8,
    nome: "Matrix: Resurrections",
    categoria: "Ação",
    descricao:
      "quarta parcela da franquia Matrix. Trama ainda desconhecida....",
    url: "https://raw.githubusercontent.com/Kenzie-Academy-Brasil/lista-filmes-kenzie/main/assets/img/image%20(6).png",
  },
  {
    id: 9,
    nome: "Halloween Kills: O Terror",
    categoria: "Terror",
    descricao:
      "Minutos depois de Laurie Strode, sua filha Karen e sua neta Allyson deixarem o assassino mascarado Michael Myers enjaulado e queimando no porão de Laurie",
    url: "https://raw.githubusercontent.com/Kenzie-Academy-Brasil/lista-filmes-kenzie/main/assets/img/image%20(21).png",
  },
  {
    id: 10,
    nome: "Imperdoável",
    categoria: "Drama",
    descricao:
      "Após cumprir pena por um crime violento, Ruth volta ao convívio na sociedade, que se recusa a perdoar seu passado. Discriminada no lugar q...",
    url: "https://raw.githubusercontent.com/Kenzie-Academy-Brasil/lista-filmes-kenzie/main/assets/img/image%20(8).png",
  },
  {
    id: 11,
    nome: "007: Sem Tempo para Morrer",
    categoria: "Ação",
    descricao:
      "Bond deixou o serviço ativo e está desfrutando de uma vida tranquila na Jamaica. Sua paz é interrompida quando o seu velho amigo Felix Le..",
    url: "https://raw.githubusercontent.com/Kenzie-Academy-Brasil/lista-filmes-kenzie/main/assets/img/image%20(10).png",
  },
  {
    id: 12,
    nome: "Não Olhe para Cima",
    categoria: "Comédia",
    descricao:
      "Dois astrônomos descobrem um cometa mortal vindo em direção à Terra e partem em um tour midiático para alertar a humanidade. Só que ninguém parece dar muita bola.",
    url: "https://raw.githubusercontent.com/Kenzie-Academy-Brasil/lista-filmes-kenzie/main/assets/img/image%20(5).png",
  },
  {
    id: 13,
    nome: "Resident Evil: Bem-Vindo a Raccoon City ",
    categoria: "Ação",
    descricao:
      "O que já foi um dia a casa da gigante farmacêutica em expansão Umbrella Corporation, Raccoon City, é agora uma cidade agonizante do meio-oeste.",
    url: "https://raw.githubusercontent.com/Kenzie-Academy-Brasil/lista-filmes-kenzie/main/assets/img/image%20(7).png",
  },
  {
    id: 14,
    nome: "O Último Duelo",
    categoria: "Ação",
    descricao:
      "História sobre o duelo entre o cavaleiro Jean de Carrouges e o escudeiro Jaques Le Gris, acusado de ter violado a esposa do cavaleiro.",
    url: "https://raw.githubusercontent.com/Kenzie-Academy-Brasil/lista-filmes-kenzie/main/assets/img/image%20(9).png",
  },
  {
    id: 15,
    nome: "Ferida",
    categoria: "Drama",
    descricao:
      "Uma ex-lutadora de MMA volta ao ringue para manter a custódia do filho e recomeçar sua carreira. Dirigido e estrelado por Halle Berry",
    url: "https://raw.githubusercontent.com/Kenzie-Academy-Brasil/lista-filmes-kenzie/main/assets/img/image%20(12).png",
  },
  {
    id: 16,
    nome: "tick, tick...BOOM! ",
    categoria: "Drama",
    descricao:
      "Prestes a fazer 30 anos, o compositor Jonathan Larson reluta para levar adiante seu sonho de escrever um grande musical.",
    url: "https://raw.githubusercontent.com/Kenzie-Academy-Brasil/lista-filmes-kenzie/main/assets/img/image%20(14).png",
  },
  {
    id: 17,
    nome: "Alerta Vermelho    ",
    categoria: "Comédia",
    descricao:
      "No mundo do crime internacional, a INTERPOL lança um Alerta Vermelho, o que inicia uma caçada para capturar a mais notória ladra de artes do globo",
    url: "https://raw.githubusercontent.com/Kenzie-Academy-Brasil/lista-filmes-kenzie/main/assets/img/image%20(15).png",
  },
  {
    id: 18,
    nome: "Paranormal Activity: Next of Kin",
    categoria: "Terror",
    descricao:
      "Margot, uma cineasta de documentários, dirige-se a uma comunidade Amish isolada na esperança de aprender sobre sua mãe perdida e seus parentes.",
    url: "https://raw.githubusercontent.com/Kenzie-Academy-Brasil/lista-filmes-kenzie/main/assets/img/image%20(17).png",
  },
  {
    id: 19,
    nome: "Exército de Ladrões: Invasão da Europa",
    categoria: "Comédia",
    descricao:
      "Nesta história que antecede Army of the Dead, uma mulher misteriosa convida o caixa de banco Dieter para roubar cofres superprotegidos na Europa.",
    url: "https://raw.githubusercontent.com/Kenzie-Academy-Brasil/lista-filmes-kenzie/main/assets/img/image%20(18).png",
  },
  {
    id: 20,
    nome: "Venom",
    categoria: "Ação",
    descricao:
      "O jornalista Eddie Brock desenvolve força e poder sobre-humanos quando seu corpo se funde com o alienígena Venom. Dominado pela raiva, Venom tenta controlar as novas e perigosas habilidades de Eddie",
    url: "https://raw.githubusercontent.com/Kenzie-Academy-Brasil/lista-filmes-kenzie/main/assets/img/image%20(13).png",
  },
];
