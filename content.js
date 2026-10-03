/* =========================================================
   КОНТЕНТ САЙТА — редактируй только этот файл
   ========================================================= */


/* =========================================================
   ИГРЫ
   ========================================================= */

const GAMES = [

  {
    id: 'what-the-car',

    title: 'WHAT THE CAR',

    img: 'https://img.itch.zone/aW1nLzI5ODk2NzE0LmdpZg==/original/NYSPcY.gif',

    itch: 'https://daniellechoster.itch.io/what-the-car',

    text: [
      'Бесконечное путешествие сквозь сотни миров на своей тачке. Телепортируйся, исследуй, кастомизируй авто.',
      'An endless journey through hundreds of worlds in your car. Teleport, explore and customize your ride.'
    ],

    meta: [
      'следить в тг-канале',
      'follow on Telegram'
    ]
  },


  {
    id: 'outpatient',

    title: 'OUTPATIENT',

    img: 'https://img.itch.zone/aW1nLzI5ODgwNjkzLmdpZg==/original/Qxnvlh.gif',

    itch: 'https://daniellechoster.itch.io/outpatient',

    text: [
      'Бесконечная поездка на операционном столе: не рулишь, только стреляешь. Психоделический шутер про безумие и врачей.',
      'An endless ride on an operating table: you do not drive, you only shoot. A psychedelic shooter about madness and doctors.'
    ],

    meta: [
      '5 звёзд · 9 рейтингов',
      '5 stars · 9 ratings'
    ]
  },


  {
    id: 'loop-protocol',

    title: 'LOOP PROTOCOL',

    img: 'https://img.itch.zone/aW1nLzI3NDExMzIxLnBuZw==/original/zeFXv1.png',

    itch: 'https://daniellechoster.itch.io/loop-protocol',

    text: [
      'Пиши код — смотри, как он оживает. Головоломка про программирование персонажа командами.',
      'Write code and watch it come alive. A puzzle about programming a character with commands.'
    ],

    meta: [
      '4.9 звезды · 8 рейтингов',
      '4.9 stars · 8 ratings'
    ]
  }

];


/* =========================================================
   ПОСТЫ
   (без перевода — пиши текстом как есть)
   ========================================================= */

const POSTS = [

  {
    date: '02.10.2026',

    game: 'what-the-car',

    title: 'Я всё запорол',

    text: 'Я всё запорол удалив половину проекта. НО все окей я с божьей помощью все восстановил.'
  },
   
  {
    date: '03.10.2026',

    title: 'ТГК ТГК ТГК СМОТРИ ТГК ТГК ТГК ТАМ ВСЕ В ТГК В ТГК ТГК',

    text: 'ТГК ГОВОРЮ ТГК ТГК ТГК СМАРИ ТГК ТГК ТГК БРО ЛЮБИМЫЙ ТГК ТГК t.me/sran_dev '
  }
];


/* =========================================================
   ЧЕНДЖЛОГ
   (без перевода — пиши текстом как есть)
   ========================================================= */

const LOG = [

  {
    date: '02.10.2026',

    game: 'what-the-car',

    text: 'В разработке. Новости — в тг-канале.'
  },


  {
    date: '02.10.2026',

    game: 'outpatient',

    text: 'Последнее демо: 88 MB, Windows.'
  },


  {
    date: '02.10.2026',

    game: 'loop-protocol',

    text: '4.9 ★ · 8 оценок.'
  },


  {
    date: '02.10.2026',

    text: 'UI: сайт переделан — окна, ссылки, ченджлог и посты.'
  }

];



const PICS = [

  /* 1 */ { alt: 'Konata Izumi', src: 'https://i.kym-cdn.com/photos/images/newsfeed/001/169/456/8f4.png' },
  /* 2 */ { alt: 'Konata Izumi', src: 'https://i.kym-cdn.com/photos/images/original/002/194/255/837.jpg' },
  /* 3 */ { alt: 'Konata Izumi', src: 'https://i.kym-cdn.com/photos/images/newsfeed/000/799/792/ef4.png' },
  /* 4 */ { alt: 'Rei Ayanami',  src: 'https://i.kym-cdn.com/entries/icons/original/000/016/648/maxresdefault.jpeg' },
  /* 5 */ { alt: 'Rei Ayanami',  src: 'https://i.kym-cdn.com/photos/images/newsfeed/000/751/443/14d.jpg' },
  /* 6 */ { alt: 'Rei Ayanami',  src: 'https://i.kym-cdn.com/photos/images/newsfeed/000/750/621/205.jpg' },
  /* 7 */ { alt: 'Rei Ayanami',  src: 'https://i.kym-cdn.com/entries/icons/original/000/014/531/cover1.jpg' }

];




const STICKERS = [

  { id: 'comments', src: 'https://gifs.ru/embed/qYpM2T',
    width: 90,  side: 'left',  x: 40, y: 0 },

  { window: 3, src: 'https://media.tenor.com/Zx8ctkiYqagAAAAj/hololive-shirakami-fubuki.gif',
    width: 90,  side: 'left',  x: 80, y: 0 },

  { window: 6, src: 'https://media.tenor.com/WT70fOcKC7oAAAAj/k-on.gif',
    width: 120, side: 'left',  x: 24, y: 0 }

];
