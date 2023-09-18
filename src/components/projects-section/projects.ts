import proworking from "../../assets/img/proworking.png";
import tetris from "../../assets/img/tetris.png";
import kenziefy from "../../assets/img/kenziefy.png";
import flappyBird from "../../assets/img/flappy-bird.png";
import torreDeHanoi from "../../assets/img/torre-de-hanoi.png";
import musicClubShop from "../../assets/img/music-club-shop.png";
import jogoDaCobrinha from "../../assets/img/jogo-da-cobrinha.png";
import jogoDaVelha from "../../assets/img/jogo-da-velha.png";
import doIt from "../../assets/img/do-it.png";
import kenzieBurguer from "../../assets/img/kenzie-burguer.png";
import kenzieHub from "../../assets/img/kenzie-hub.png";
import nukenzie from "../../assets/img/nu-kenzie.png"
import calculadora from "../../assets/img/calculadora-react.png"
import consumindoApi from "../../assets/img/consumindo-api-github.png"

const mainProjects = [
  {
    title: "Proworking",
    image: proworking,
    description:
      "Proworking é uma aplicação feita em react que tem o objetivo de facilitar a contratação de serviços informais, e aproximar o contratante do prestador de serviço. Nessa aplicação você pode se cadastrar e informar a sua área de atuação, assim como os locais que você atende, e também pode enviar mensagens diretas através da aplicação para outros prestadores de serviços, foi usado o chat engine para isso, porém como a aplicação está parada no momento, essa feature foi desativada.",
    urlRepo: "https://github.com/gabrielrochasouza/Proworking-capstone",
    urlProject: "https://capstone-m3.vercel.app/",
    technologies: ['React JS', 'Styled Components', 'React-router-dom', 'Aos', 'Axios', 'react-icons', 'MUI', 'yup'],
  },
  {
    title: "Music Club Shop",
    image: musicClubShop,
    description: "Essa foi uma aplicação voltada ao backend, e tem o objetivo de gerar uma api para um ecommerce de venda de instrumentos. Nessa aplicação, você pode se cadastrar e logar, e ao fazer isso é gerado um token jwt, que irá proteger nossas rotas da aplicação. Nesse projeto podemos cadastrar produtos novos, adicionar produtos ao carrinho e fazer o pedido, informando o endereço de entrega do mesmo. Além disso, você pode fazer reviews dos produtos. Foi feita também um painel de admin para consumir a nossa api. E foi feito o deploy no heroku.",
    urlRepo: "https://github.com/gabrielrochasouza/capstone-m4-api-music-club-shop",
    urlProject: "https://api-music-club-shop.herokuapp.com",
    technologies: ['Node JS','express','postgres',"Typescript",'Heroku','React JS', 'Styled Components', 'React-router-dom', 'Aos', 'Axios', 'react-icons', 'MUI', 'yup'],
  },
  {
    title: "Flappy Bird",
    image: flappyBird,
    description: "É um jogo de flappy bird, nele você tem um placar de pontuação, assim como medalhas que irão aparecer de acordo com sua pontuação. O jogo é dividido em telas, tela de início, se prepare, jogando e gameover.",
    urlRepo: "https://github.com/gabrielrochasouza/flappy-bird-js",
    urlProject: "https://gabrielrochasouza.github.io/flappy-bird-js/",
    technologies: ['HTML', 'CSS', 'Javasctipt Vanilla'],
  },
  {
    title: "Kenzie Burguer",
    image: kenzieBurguer,
    description: "É uma aplicação feita com typescript e react, que tem como objetivo simular uma hamburgueria, foi consumido uma api para gerar os produtos e fazer a feature de cadastro e login de usuário. Também foi feita uma parte de checkout para finalizar a compra.",
    urlRepo: "https://github.com/gabrielrochasouza/hamburgueria",
    urlProject: "https://hamburgueria-typescript-one.vercel.app/",
    technologies: ['Typescript', 'React', 'styled-components', 'react-router-dom', 'yup'],
  },
  {
    title: "Tetris",
    image: tetris,
    description: "É uma réplica do jogo tetris feito usando apenas javascript, html, e css; apenas. Nesse jogo, você pode ver a marca de onde a peça irá cair e se encaixar, também pode acelerar o tempo de caída. Você pode ver quais vão ser os próximos tetrominos, e há uma pontuação, que quanto maior for, maior será a velocidade do jogo.",
    urlRepo: "https://github.com/gabrielrochasouza/TetrisJs",
    urlProject: "https://gabrielrochasouza.github.io/TetrisJs/",
    technologies: ['HTML', 'CSS', 'Javasctipt Vanilla'],
  },
  {
    title: "Do It",
    image: doIt,
    description: "Essa aplicação foi feita em react, e tem como objetivo de ser um gerenciador de tarefas, também foi consumida uma api para fazer as funções dessa aplicação. Nessa aplicação o usuário consegue se cadastrar e logar, assim como, adicionar tarefas novas, que por sua vez vem com a data de sua criação, e também pode mudar o status para concluído ou deletar a tarefa.",
    urlRepo: "https://github.com/gabrielrochasouza/Do.it-gerenciador-de-tarefas",
    urlProject: "https://do-it-gabrielrochasouza.vercel.app/",
    technologies: ['React JS', 'Styled Components', 'React-router-dom', 'Axios', 'react-icons', 'yup'],
  },
  {
    title: "KenzieHub",
    image: kenzieHub,
    description: "Essa aplicação foi feita com react js, e também foi consumida uma api para realizar as funcionalidades da aplicação. Nessa aplicação o usuário pode se cadastrar e cadastrar as tecnologias que ele domina, e fazer um update, delete dessas informações.",
    urlRepo: "https://github.com/gabrielrochasouza/Kenziehub",
    urlProject: "https://react-entrega-s2-kenzie-hub-gabrielrochasouza-gabrielrochasouza.vercel.app/",
    technologies: ['React JS', 'Styled Components', 'React-router-dom', 'Axios', 'react-icons', 'yup'],
  },
  {
    title: "Kenziefy",
    image: kenziefy,
    description: "Essa aplicação eu desenvolvi durante uma maratona da Kenzie Academy Brasil, essa aplicação tem o objetivo de ser algo similar ao spotify, nele você consegue ouvir algumas músicas, e possui as funções de next, back, play e pause, de um player comum. Foi uma aplicação que eu gostei bastante do resultado.",
    urlRepo: "https://github.com/gabrielrochasouza/Maratona-kenzie-plataforma-streaming",
    urlProject: "https://gabrielrochasouza.github.io/Maratona-kenzie-plataforma-streaming/",
    technologies: ['HTML', 'CSS', 'Javasctipt Vanilla'],
  },
  {
    title: "Jogo da Velha",
    image: jogoDaVelha,
    description: "Esse é o tradicional jogo da velha, com uma diferença, ele é automático, ou seja, há um algoritmo que possibilita você jogar sozinho. Há também um placar para marcar o número de vitórias, derrotas e empates. Esse projeto me ajudou a desenvolver minha lógica de programação e foi muito legal.",
    urlRepo: "https://github.com/gabrielrochasouza/Jogo-da-velha-feito-com-JS",
    urlProject: "https://gabrielrochasouza.github.io/Jogo-da-velha-feito-com-JS/",
    technologies: ['HTML', 'CSS', 'Javasctipt Vanilla'],
  },
  {
    title: "Jogo da Cobrinha",
    image: jogoDaCobrinha,
    description: "Esse jogo foi um projeto pessoal meu, e foi feito usando a tag html do canvas, o jogo se comporta como o tradicional jogo da cobrinha, a medida que vocẽ pega o item você ganha pontos, e também consegue comparar com sua pontuação máxima. E caso a cabeça encontre com o rabo o jogo acaba, e para recomeçar basta apertar alguma tecla de seta.",
    urlRepo: "https://github.com/gabrielrochasouza/Jogo-da-cobrinha-js",
    urlProject: "https://gabrielrochasouza.github.io/Jogo-da-cobrinha-js/",
    technologies: ['HTML', 'CSS', 'Javasctipt Vanilla'],
  },
  {
    title: "Torre de Hanoi",
    image: torreDeHanoi,
    description: "O objetivo do jogo da torre de hanoi é passar todos os discos de uma haste para outra com o mínimo de movimentos possíveis, e sem colocar um disco maior sobre um menor. Esse joguinho foi desenvolvido na Kenzie academy no módulo 2, nele pude aprimorar minhas habilidades de manipular elementos no DOM, assim como pude aprimorar minha lógica de programação. Nesse jogo também há efeitos de movimento para mexer os discos.",
    urlRepo: "https://github.com/gabrielrochasouza/Torre-de-Hanoi",
    urlProject: "https://gabrielrochasouza.github.io/Torre-de-Hanoi/",
    technologies: ['HTML', 'CSS', 'Javasctipt Vanilla'],
  },
  {
    title: "Nukenzie",
    image: nukenzie,
    description:"O projeto Nukenzie é uma aplicação feita em react js que tem como objetivo fazer um controle de gastos, de entrada e saída. E calcular e mostrar o valor resultante. Nessa aplicação pude exercitar o uso dos hooks do react, foi uma aplicação que eu gostei muito de fazer!",
    urlRepo: "https://github.com/gabrielrochasouza/Nu-Kenzie",
    urlProject: "https://react-entrega-s1-nu-kenzie-gabrielrochasouza-duidq7pyj.vercel.app/",
    technologies:["React"]
  },
  {
    title: "Calculadora React",
    image: calculadora,
    description:"Essa calculadora foi feita com react js e foi uma aplicação feita para simular uma calculadora simples real. Nessa aplicação pude exercitar o uso e estilização de componentes react, e exercitar o uso de react hooks.",
    urlRepo: "https://github.com/Kenzie-Academy-Brasil-Developers/react-tarefa1-s1-template-calculadora-gabrielrochasouza",
    urlProject: "https://react-tarefa1-s1-template-calculadora-gabrielrochasouza.vercel.app/",
    technologies:["React"]
  },
  {
    title: "Consumindo Api Github",
    image: consumindoApi,
    description:"Nessa aplicação eu exercito o consumo de api pelo react, nessa aplicação ao digitar o caminho do repositório no github, é gerado um card com a foto de avatar e um link do repositório do github. Aqui eu também utilizo a biblioteca MUI para aproveitar componentes prontos.",
    urlRepo: "https://github.com/gabrielrochasouza/Consumindo-api-github",
    urlProject: "https://react-atividade-s2-github-card-gabrielrochasouza-k6lngyygv.vercel.app/",
    technologies:["React", "MUI"]
  },
];


export default mainProjects;
