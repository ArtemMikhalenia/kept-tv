import type { FactsInterface } from '../interfaces/factsInterface';

import bg1 from '../assets/images/facts_images/facts_bg1.png';
import bg2 from '../assets/images/facts_images/facts_bg2.png';
import bg3 from '../assets/images/facts_images/facts_bg3.png';
import bg4 from '../assets/images/facts_images/facts_bg4.png';
import bg5 from '../assets/images/facts_images/facts_bg5.png';
import newsImg1 from '../assets/images/facts_images/news/1.jpg';
import newsImg2 from '../assets/images/facts_images/news/2.jpg';
import newsImg3 from '../assets/images/facts_images/news/3.jpg';
import newsImg4 from '../assets/images/facts_images/news/4.jpg';
import newsImg5 from '../assets/images/facts_images/news/5.jpg';
import newsImg6 from '../assets/images/facts_images/news/6.jpg';
import newsImg7 from '../assets/images/facts_images/news/7.jpg';
import newsImg8 from '../assets/images/facts_images/news/8.jpeg';
import newsImg9_1 from '../assets/images/facts_images/news/9.1.jpeg';
import newsImg9_2 from '../assets/images/facts_images/news/9.2.jpeg';
import newsImg10_1 from '../assets/images/facts_images/news/10.1.jpg';
import newsImg10_2 from '../assets/images/facts_images/news/10.2.jpg';
import newsImg11_1 from '../assets/images/facts_images/news/11.1.jpg';
import newsImg11_2 from '../assets/images/facts_images/news/11.2.jpg';
import newsImg12_1 from '../assets/images/facts_images/news/12.1.webp';
import newsImg12_2 from '../assets/images/facts_images/news/12.2.webp';
import newsImg13_1 from '../assets/images/facts_images/news/13.1.jpg';
import newsImg13_2 from '../assets/images/facts_images/news/13.2.jpg';
import newsImg14_1 from '../assets/images/facts_images/news/14.1.jpg';
import newsImg14_2 from '../assets/images/facts_images/news/14.2.jpg';
import newsImg15_1 from '../assets/images/facts_images/news/15.1.jpg';
import newsImg15_2 from '../assets/images/facts_images/news/15.2.jpg';

export const factsData: FactsInterface[] = [
  {
    lvl: 0,
    background: bg1,
    containerType: 'four-items',
    correctAnswer: ['police'],
    correctImg: [newsImg1],
    facts: [
      {
        id: 'police',
        variant: 'a',
        numberColor: 'number-blue',
        factClassName: 'grid-item-4 facts-item1',
        factText:
          'Милиция задержала мужчину, катающегося по Беловежской пуще на самогонном аппарате',
        clicked: false,
      },
      {
        id: 'salad',
        variant: 'b',
        numberColor: 'number-blue',
        factClassName: 'grid-item-4 facts-item1',
        factText: 'Салат "Оливье" получил статус временной валюты',
        clicked: false,
      },
      {
        id: 'coffee',
        variant: 'c',
        numberColor: 'number-blue',
        factClassName: 'grid-item-4 facts-item1',
        factText: 'В одной известной кофейне появился кофе с ароматом камней',
        clicked: false,
      },
      {
        id: 'roach',
        variant: 'd',
        numberColor: 'number-blue',
        factClassName: 'grid-item-4 facts-item1',
        factText: 'Учёные доказали, что тараканы любят джаз',
        clicked: false,
      },
    ],
  },
  {
    lvl: 1,
    background: bg2,
    containerType: 'four-items',
    correctAnswer: ['humanoid'],
    correctImg: [newsImg2],
    facts: [
      {
        id: 'ezhik',
        variant: 'a',
        numberColor: 'number-blue',
        factClassName: 'grid-item-4 facts-item2',
        factText:
          'Белорусский ёжик стал звездой TikTok и требует отдельный лес',
        clicked: false,
      },
      {
        id: 'divan',
        variant: 'b',
        numberColor: 'number-blue',
        factClassName: 'grid-item-4 facts-item2',
        factText:
          'Чемпионат мира по лежанию на диване признан олимпийским видом',
        clicked: false,
      },
      {
        id: 'humanoid',
        variant: 'c',
        numberColor: 'number-blue',
        factClassName: 'grid-item-4 facts-item2',
        factText:
          'Людей спаивают гуманоиды! – С какой целью? Астрономы сейчас это выясняют',
        clicked: false,
      },
      {
        id: 'chaiki',
        variant: 'd',
        numberColor: 'number-blue',
        factClassName: 'grid-item-4 facts-item2',
        factText: 'Учёные выяснили, что чайки действительно смеются над людьми',
        clicked: false,
      },
    ],
  },
  {
    lvl: 2,
    background: bg3,
    containerType: 'four-items',
    correctAnswer: ['fbr'],
    correctImg: [newsImg3],
    facts: [
      {
        id: 'nichego',
        variant: 'a',
        numberColor: 'number-blue',
        factClassName: 'grid-item-4 facts-item3',
        factText:
          'Курс “Профессиональное ничегонеделание” набрал полный зал — сертификаты по лежанию раскупили',
        clicked: false,
      },
      {
        id: 'grodno',
        variant: 'b',
        numberColor: 'number-blue',
        factClassName: 'grid-item-4 facts-item3',
        factText: 'В Гродно прошёл митинг против слишком мягкого хлеба',
        clicked: false,
      },
      {
        id: 'teatr',
        variant: 'c',
        numberColor: 'number-blue',
        factClassName: 'grid-item-4 facts-item3',
        factText:
          'Женщина потребовала вернуть деньги за билет в театр, потому что «актёры слишком громко дышали»',
        clicked: false,
      },
      {
        id: 'fbr',
        variant: 'd',
        numberColor: 'number-blue',
        factClassName: 'grid-item-4 facts-item3',
        factText:
          'ФБР ищет россиянина. Его подозревают в кибервымогательстве и в проживании в Барнауле',
        clicked: false,
      },
    ],
  },
  {
    lvl: 3,
    background: bg1,
    containerType: 'four-items',
    correctAnswer: ['tumen'],
    correctImg: [newsImg4],
    facts: [
      {
        id: 'mkad',
        variant: 'a',
        numberColor: 'number-blue',
        factClassName: 'grid-item-4 facts-item1',
        factText:
          'Фильм о пробке на МКАДе получил награду за лучшую драму в потоке',
        clicked: false,
      },
      {
        id: 'ufa',
        variant: 'b',
        numberColor: 'number-blue',
        factClassName: 'grid-item-4 facts-item1',
        factText:
          'Житель Уфы три дня искал свой телефон, который оказался в холодильнике',
        clicked: false,
      },
      {
        id: 'tumen',
        variant: 'c',
        numberColor: 'number-blue',
        factClassName: 'grid-item-4 facts-item1',
        factText: 'В пятницу Тюменская область передохнет от морозов',
        clicked: false,
      },
      {
        id: 'muzei',
        variant: 'd',
        numberColor: 'number-blue',
        factClassName: 'grid-item-4 facts-item1',
        factText: 'В Полоцке открыли музей забытых вещей из маршруток',
        clicked: false,
      },
    ],
  },
  {
    lvl: 4,
    background: bg2,
    containerType: 'four-items',
    correctAnswer: ['vdnh'],
    correctImg: [newsImg5],
    facts: [
      {
        id: 'chelyabinsk',
        variant: 'a',
        numberColor: 'number-blue',
        factClassName: 'grid-item-4 facts-item2',
        factText:
          'В магазине игрушек Челябинска ребёнок отказался покупать куклу, потому что «она слишком счастливая»',
        clicked: false,
      },
      {
        id: 'vdnh',
        variant: 'b',
        numberColor: 'number-blue',
        factClassName: 'grid-item-4 facts-item2',
        factText:
          'На ВДНХ открылась никому не интересная автомобильная выставка',
        clicked: false,
      },
      {
        id: 'sydney',
        variant: 'c',
        numberColor: 'number-blue',
        factClassName: 'grid-item-4 facts-item2',
        factText: 'Сиднейская опера предложила вечер опер для собак',
        clicked: false,
      },
      {
        id: 'bonus',
        variant: 'd',
        numberColor: 'number-blue',
        factClassName: 'grid-item-4 facts-item2',
        factText:
          'Сеть магазинов предлагает бонусные баллы за добрые жесты к кассиру',
        clicked: false,
      },
    ],
  },
  {
    lvl: 5,
    background: bg1,
    containerType: 'four-items',
    correctAnswer: ['potter'],
    correctImg: [newsImg6],
    facts: [
      {
        id: 'salsa',
        variant: 'a',
        numberColor: 'number-blue',
        factClassName: 'grid-item-4 facts-item1',
        factText:
          'Исследователи доказали, что ленивцы лучше всех танцуют сальсу',
        clicked: false,
      },
      {
        id: 'baranovichi',
        variant: 'b',
        numberColor: 'number-blue',
        factClassName: 'grid-item-4 facts-item1',
        factText:
          'В Барановичах нашли загадочную надпись «Не забудь картошку» на всех остановках',
        clicked: false,
      },
      {
        id: 'voronezh',
        variant: 'c',
        numberColor: 'number-blue',
        factClassName: 'grid-item-4 facts-item1',
        factText:
          'Школьники Воронежа придумали машину, которая едет на газированных напитках',
        clicked: false,
      },
      {
        id: 'potter',
        variant: 'd',
        numberColor: 'number-blue',
        factClassName: 'grid-item-4 facts-item1',
        factText: 'Гарри Поттер принял православие',
        clicked: false,
      },
    ],
  },
  {
    lvl: 6,
    background: bg2,
    containerType: 'four-items',
    correctAnswer: ['perm'],
    correctImg: [newsImg7],
    facts: [
      {
        id: 'confety',
        variant: 'a',
        numberColor: 'number-blue',
        factClassName: 'grid-item-4 facts-item2',
        factText:
          'Ученые научились делать конфеты, которые помогают вспомнить забытые воспоминания',
        clicked: false,
      },
      {
        id: 'zhaloba',
        variant: 'b',
        numberColor: 'number-blue',
        factClassName: 'grid-item-4 facts-item2',
        factText:
          'В Твери из-за жалобы на старое дерево решили создать парк из стекла',
        clicked: false,
      },
      {
        id: 'avtomat',
        variant: 'c',
        numberColor: 'number-blue',
        factClassName: 'grid-item-4 facts-item2',
        factText:
          'В новом торговом центре появился автомат, который угадывает, что ты хочешь купить, до того, как ты сам это осознал',
        clicked: false,
      },
      {
        id: 'perm',
        variant: 'd',
        numberColor: 'number-blue',
        factClassName: 'grid-item-4 facts-item2',
        factText:
          'Пермь признана городом с самым высоким уровнем жизни для голубей',
        clicked: false,
      },
    ],
  },
  {
    lvl: 7,
    background: bg3,
    containerType: 'four-items',
    correctAnswer: ['trup'],
    correctImg: [newsImg8],
    facts: [
      {
        id: 'utka',
        variant: 'a',
        numberColor: 'number-blue',
        factClassName: 'grid-item-4 facts-item3',
        factText:
          'В Владивостоке нашли утку, которая умеет говорить по-пекински',
        clicked: false,
      },
      {
        id: 'pensioner',
        variant: 'b',
        numberColor: 'number-blue',
        factClassName: 'grid-item-4 facts-item3',
        factText:
          'Полиция Нью-Йорка в поисках пенсионеров, которые выращивают цветы, меняющие цвет в зависимости от настроения',
        clicked: false,
      },
      {
        id: 'trup',
        variant: 'c',
        numberColor: 'number-blue',
        factClassName: 'grid-item-4 facts-item3',
        factText: 'Труп террориста взяли живьем',
        clicked: false,
      },
      {
        id: 'lego',
        variant: 'd',
        numberColor: 'number-blue',
        factClassName: 'grid-item-4 facts-item3',
        factText:
          'Корабль из лего с живыми людьми отправится на Марс уже эту субботу',
        clicked: false,
      },
    ],
  },
  {
    lvl: 8,
    background: bg4,
    containerType: 'five-items',
    correctAnswer: ['kolbasa', 'zhuk'],
    correctImg: [newsImg9_1, newsImg9_2],
    facts: [
      {
        id: 'festival',
        variant: 'a',
        numberColor: 'number-yellow',
        factClassName: 'grid-item-5 facts-item4',
        factText:
          'Фестиваль «Ничего не понятно, но весело» приедет в следующем году в то же время',
        clicked: false,
      },
      {
        id: 'ulitka',
        variant: 'b',
        numberColor: 'number-yellow',
        factClassName: 'grid-item-5 facts-item4',
        factText:
          'Учёные обнаружили, что улитки способны различать музыку Баха и Шакиры',
        clicked: false,
      },
      {
        id: 'kolbasa',
        variant: 'c',
        numberColor: 'number-yellow',
        factClassName: 'grid-item-5 facts-item4',
        factText: '«34 года хранила колбасу, изготовленную к Олимпиаде-80»',
        clicked: false,
      },
      {
        id: 'cuba',
        variant: 'd',
        numberColor: 'number-yellow',
        factClassName: 'grid-item-5 facts-item4',
        factText:
          'На Кубе мужчина пытался зарегистрировать свой диван как транспортное средство',
        clicked: false,
      },
      {
        id: 'zhuk',
        variant: 'e',
        numberColor: 'number-yellow',
        factClassName: 'grid-item-5 facts-item4',
        factText: 'Как колорадский жук стал работать на ЦРУ',
        clicked: false,
      },
    ],
  },
  {
    lvl: 9,
    background: bg4,
    containerType: 'five-items',
    correctAnswer: ['doneck', 'belka'],
    correctImg: [newsImg10_1, newsImg10_2],
    facts: [
      {
        id: 'teplo',
        variant: 'a',
        numberColor: 'number-yellow',
        factClassName: 'grid-item-5 facts-item4',
        factText:
          'Тепло, запах. А может быть – смех? Чем еще мы интересуем комаров',
        clicked: false,
      },
      {
        id: 'tabletki',
        variant: 'b',
        numberColor: 'number-yellow',
        factClassName: 'grid-item-5 facts-item4',
        factText:
          'В аптеках Брянской области начали продавать таблетки от любопытства',
        clicked: false,
      },
      {
        id: 'doneck',
        variant: 'c',
        numberColor: 'number-yellow',
        factClassName: 'grid-item-5 facts-item4',
        factText: 'Донецк решили переименовать в Сталино в честь Ленина',
        clicked: false,
      },
      {
        id: 'belka',
        variant: 'd',
        numberColor: 'number-yellow',
        factClassName: 'grid-item-5 facts-item4',
        factText:
          'В Богородицке обнаружили белку, которая подумала, что она - утка',
        clicked: false,
      },
      {
        id: 'mif',
        variant: 'e',
        numberColor: 'number-yellow',
        factClassName: 'grid-item-5 facts-item4',
        factText: 'Учёные доказали: понедельник — это миф',
        clicked: false,
      },
    ],
  },
  {
    lvl: 10,
    background: bg5,
    containerType: 'five-items',
    correctAnswer: ['nalogi', 'chukotka'],
    correctImg: [newsImg11_1, newsImg11_2],
    facts: [
      {
        id: 'shangai',
        variant: 'a',
        numberColor: 'number-yellow',
        factClassName: 'grid-item-5 facts-item5',
        factText:
          'Созданный шанхайскими инженерами ИИ-робот начал жаловаться на жизнь',
        clicked: false,
      },
      {
        id: 'nalogi',
        variant: 'b',
        numberColor: 'number-yellow',
        factClassName: 'grid-item-5 facts-item5',
        factText: 'Россияне остались довольны повышением налогов',
        clicked: false,
      },
      {
        id: 'biblioteka',
        variant: 'c',
        numberColor: 'number-yellow',
        factClassName: 'grid-item-5 facts-item5',
        factText:
          'В библиотеке появился автомат, который создает книги по желанию читателя',
        clicked: false,
      },
      {
        id: 'chukotka',
        variant: 'd',
        numberColor: 'number-yellow',
        factClassName: 'grid-item-5 facts-item5',
        factText: 'Ученые на Чукотке «поговорили» с китами, но не знают, о чем',
        clicked: false,
      },
      {
        id: 'hogwarts',
        variant: 'e',
        numberColor: 'number-yellow',
        factClassName: 'grid-item-5 facts-item5',
        factText:
          'Русский Хогвардс? В научных центрах экспериментируют с созданием живых картин, которые движутся',
        clicked: false,
      },
    ],
  },
  {
    lvl: 11,
    background: bg4,
    containerType: 'five-items',
    correctAnswer: ['iosif', 'leto'],
    correctImg: [newsImg12_1, newsImg12_2],
    facts: [
      {
        id: 'migrant',
        variant: 'a',
        numberColor: 'number-yellow',
        factClassName: 'grid-item-5 facts-item4',
        factText:
          'Мигрант в Испании пытался обменять паспорт на коллекцию марок',
        clicked: false,
      },
      {
        id: 'plastic',
        variant: 'b',
        numberColor: 'number-yellow',
        factClassName: 'grid-item-5 facts-item4',
        factText:
          'В Японии запустили генно-модифицированных рыб, способных очищать океан от пластика',
        clicked: false,
      },
      {
        id: 'mosty',
        variant: 'c',
        numberColor: 'number-yellow',
        factClassName: 'grid-item-5 facts-item4',
        factText:
          'В Сингапуре появились мосты, которые меняют свою форму в зависимости от погоды',
        clicked: false,
      },
      {
        id: 'iosif',
        variant: 'd',
        numberColor: 'number-yellow',
        factClassName: 'grid-item-5 facts-item4',
        factText: 'Иосиф Сталин и вомбат: зловещие призраки Кремля',
        clicked: false,
      },
      {
        id: 'leto',
        variant: 'e',
        numberColor: 'number-yellow',
        factClassName: 'grid-item-5 facts-item4',
        factText: 'Лето в городе: почаще прикладывайтесь к бутылке',
        clicked: false,
      },
    ],
  },
  {
    lvl: 12,
    background: bg5,
    containerType: 'five-items',
    correctAnswer: ['sputnik', 'ldina'],
    correctImg: [newsImg13_1, newsImg13_2],
    facts: [
      {
        id: 'sputnik',
        variant: 'a',
        numberColor: 'number-yellow',
        factClassName: 'grid-item-5 facts-item5',
        factText: 'Российский спутник с грибами и ящерицами стал неуправляемым',
        clicked: false,
      },
      {
        id: 'ldina',
        variant: 'b',
        numberColor: 'number-yellow',
        factClassName: 'grid-item-5 facts-item5',
        factText: 'Собака пыталась покинуть Омк на льдине',
        clicked: false,
      },
      {
        id: 'compliments',
        variant: 'c',
        numberColor: 'number-yellow',
        factClassName: 'grid-item-5 facts-item5',
        factText: 'Учёные выяснили: грибы реагируют на комплименты',
        clicked: false,
      },
      {
        id: 'vremya',
        variant: 'd',
        numberColor: 'number-yellow',
        factClassName: 'grid-item-5 facts-item5',
        factText: 'Мужчина подал в суд на часы за слишком быстрое время',
        clicked: false,
      },
      {
        id: 'online',
        variant: 'e',
        numberColor: 'number-yellow',
        factClassName: 'grid-item-5 facts-item5',
        factText:
          'В онлайн-библиотеках появились книги, которые меняют сюжет при каждом прочтении',
        clicked: false,
      },
    ],
  },
  {
    lvl: 13,
    background: bg4,
    containerType: 'five-items',
    correctAnswer: ['saratov', 'kartoshka'],
    correctImg: [newsImg14_1, newsImg14_2],
    facts: [
      {
        id: 'saratov',
        variant: 'a',
        numberColor: 'number-yellow',
        factClassName: 'grid-item-5 facts-item4',
        factText: 'Немецкого футболиста в юности мама запугала Саратовом',
        clicked: false,
      },
      {
        id: 'vlasti',
        variant: 'b',
        numberColor: 'number-yellow',
        factClassName: 'grid-item-5 facts-item4',
        factText:
          'Городские власти решили сделать жизнь граждан веселее. Светофоры теперь рассказывают анекдоты',
        clicked: false,
      },
      {
        id: 'kartoshka',
        variant: 'c',
        numberColor: 'number-yellow',
        factClassName: 'grid-item-5 facts-item4',
        factText: 'Газировку из картофеля создали ученые в Беларуси',
        clicked: false,
      },
      {
        id: 'taobao',
        variant: 'd',
        numberColor: 'number-yellow',
        factClassName: 'grid-item-5 facts-item4',
        factText:
          'На таобао появился отдел для роботов — теперь они могут примерить костюмы',
        clicked: false,
      },
      {
        id: 'india',
        variant: 'e',
        numberColor: 'number-yellow',
        factClassName: 'grid-item-5 facts-item4',
        factText:
          'В Индии открыли первый в мире музей невидимых экспонатов — вход бесплатный',
        clicked: false,
      },
    ],
  },
  {
    lvl: 14,
    background: bg4,
    containerType: 'five-items',
    correctAnswer: ['kant', 'taburet'],
    correctImg: [newsImg15_1, newsImg15_2],
    facts: [
      {
        id: 'kant',
        variant: 'a',
        numberColor: 'number-yellow',
        factClassName: 'grid-item-5 facts-item4',
        factText:
          'Спор о творчестве Канта в очереди за пивом закончился стрельбой',
        clicked: false,
      },
      {
        id: 'karasi',
        variant: 'b',
        numberColor: 'number-yellow',
        factClassName: 'grid-item-5 facts-item4',
        factText: 'Из всех рыб распознавать мемы умеют только караси',
        clicked: false,
      },
      {
        id: 'taburet',
        variant: 'c',
        numberColor: 'number-yellow',
        factClassName: 'grid-item-5 facts-item4',
        factText:
          'Россиянин с табуретом и ножом остановил преступников, избивших полицейских на глазах у военных',
        clicked: false,
      },
      {
        id: 'chemodan',
        variant: 'd',
        numberColor: 'number-yellow',
        factClassName: 'grid-item-5 facts-item4',
        factText:
          'В аэропорту задержали пассажира с тремя чемоданами, набитыми резиновыми уточками',
        clicked: false,
      },
      {
        id: 'kot',
        variant: 'e',
        numberColor: 'number-yellow',
        factClassName: 'grid-item-5 facts-item4',
        factText:
          'Женщина вызвала скорую помощь, потому что её кот «слишком серьёзно смотрит»',
        clicked: false,
      },
    ],
  },
];
