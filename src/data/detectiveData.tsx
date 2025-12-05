import oneBackImg from '../assets/images/detective_game_images/1.webp';
import oneFrontImg from '../assets/images/detective_game_images/1_1.webp';
import twoBackImg from '../assets/images/detective_game_images/2.webp';
import twoFrontImg from '../assets/images/detective_game_images/2_1.webp';
import threeBackImg from '../assets/images/detective_game_images/3.webp';
import threeFrontImg from '../assets/images/detective_game_images/3_1.webp';
import fourBackImg from '../assets/images/detective_game_images/4.webp';
import fourFrontImg from '../assets/images/detective_game_images/4_1.webp';
import fiveBackImg from '../assets/images/detective_game_images/5.webp';
import fiveFrontImg from '../assets/images/detective_game_images/5_1.webp';
import sixBackImg from '../assets/images/detective_game_images/6.webp';
import sixFrontImg from '../assets/images/detective_game_images/6_1.webp';
import sevenBackImg from '../assets/images/detective_game_images/7.webp';
import sevenFrontImg from '../assets/images/detective_game_images/7_1.webp';
import eightBackImg from '../assets/images/detective_game_images/8.webp';
import eightFrontImg from '../assets/images/detective_game_images/8_1.webp';
import nineBackImg from '../assets/images/detective_game_images/9.webp';
import nineFrontImg from '../assets/images/detective_game_images/9_1.webp';
import tenBackImg from '../assets/images/detective_game_images/10.webp';
import tenFrontImg from '../assets/images/detective_game_images/10_1.webp';
import elevenBackImg from '../assets/images/detective_game_images/11.webp';
import elevenFrontImg from '../assets/images/detective_game_images/11_1.webp';
import twelveBackImg from '../assets/images/detective_game_images/12.webp';
import twelveFrontImg from '../assets/images/detective_game_images/12_1.webp';
import thirteenBackImg from '../assets/images/detective_game_images/13.webp';
import thirteenFrontImg from '../assets/images/detective_game_images/13_1.webp';
import fourteenBackImg from '../assets/images/detective_game_images/14.webp';
import fourteenFrontImg from '../assets/images/detective_game_images/14_1.webp';
import fifteenBackImg from '../assets/images/detective_game_images/15.webp';
import fifteenFrontImg from '../assets/images/detective_game_images/15_1.webp';
import sixteenBackImg from '../assets/images/detective_game_images/16.webp';
import sixteenFrontImg from '../assets/images/detective_game_images/16_1.webp';
import seventeenBackImg from '../assets/images/detective_game_images/17.webp';
import seventeenFrontImg from '../assets/images/detective_game_images/17_1.webp';
import eighteenBackImg from '../assets/images/detective_game_images/18.webp';
import eighteenFrontImg from '../assets/images/detective_game_images/18_1.webp';
import nineteenBackImg from '../assets/images/detective_game_images/19.webp';
import nineteenFrontImg from '../assets/images/detective_game_images/19_1.webp';
import twentyBackImg from '../assets/images/detective_game_images/20.webp';
import twentyFrontImg from '../assets/images/detective_game_images/20_1.webp';
import type { DetectiveDataTypes } from '../types/detectiveTypes';

export const detectiveData: DetectiveDataTypes = [
  {
    lvl: 0,
    textList: ['Серийные убийства', 'Сокрытие убийства', 'Сокрытие улик'],
    frontImg: { src: oneFrontImg, alt: 'one-front-image' },
    backImg: { src: oneBackImg, alt: 'one-back-image' },
  },
  {
    lvl: 1,
    textList: [
      'Попытка убийства жены и сына',
      'Нападение с оружием',
      'Физическое насилие',
      'Психологический террор',
    ],
    frontImg: { src: twoFrontImg, alt: 'two-front-image' },
    backImg: { src: twoBackImg, alt: 'two-back-image' },
  },
  {
    lvl: 2,
    textList: [
      'Проникновение со взломом',
      'Кража',
      'Покушение на убийство',
      'Похищение',
      'Побег из-под заключения',
      'Выдача себя за сотрудника полиции',
    ],
    frontImg: { src: threeFrontImg, alt: 'three-front-image' },
    backImg: { src: threeBackImg, alt: 'three-back-image' },
  },
  {
    lvl: 3,
    textList: [
      'Военные преступления',
      'Массовые убийства',
      'Преступления против человечества',
      'Предательство',
      'Психологическое насилие',
    ],
    frontImg: { src: fourFrontImg, alt: 'four-front-image' },
    backImg: { src: fourBackImg, alt: 'four-back-image' },
  },
  {
    lvl: 4,
    textList: [
      'Пытки',
      'Жестокое обращение с детьми',
      'Злоупотребление властью',
      'Предательство',
      'Убийства и подстрекательства к убийству',
      'Преступления против человечности',
    ],
    frontImg: { src: fiveFrontImg, alt: 'five-front-image' },
    backImg: { src: fiveBackImg, alt: 'five-back-image' },
  },
  {
    lvl: 5,
    textList: [
      'Массовое убийство',
      'Кража',
      'Насилие',
      'Психологическое насилие',
      'Вандализм',
    ],
    frontImg: { src: sixFrontImg, alt: 'six-front-image' },
    backImg: { src: sixBackImg, alt: 'six-back-image' },
  },
  {
    lvl: 6,
    textList: [
      'Коррупция',
      'Убийства и подстрекательства к убийству',
      'Наркоторговля',
      'Жестокое обращение с детьми',
      'Пытки',
      'Вымогательство',
      'Похищение людей',
    ],
    frontImg: { src: sevenFrontImg, alt: 'seven-front-image' },
    backImg: { src: sevenBackImg, alt: 'seven-back-image' },
  },
  {
    lvl: 7,
    textList: [
      'Массовое убийство',
      'Похищение',
      'Пытки',
      'Узурпация',
      'Преступления против человечества',
      'Преступления на почве ненависти',
    ],
    frontImg: { src: eightFrontImg, alt: 'eight-front-image' },
    backImg: { src: eightBackImg, alt: 'eight-back-image' },
  },
  {
    lvl: 8,
    textList: [
      'Предательство',
      'Узурпация',
      'Убийства и подстрекательства к убийству',
      'Поджог',
      'Шантаж',
      'Военные преступления',
      'Злоупотребление властью',
    ],
    frontImg: { src: nineFrontImg, alt: 'nine-front-image' },
    backImg: { src: nineBackImg, alt: 'nine-back-image' },
  },
  {
    lvl: 9,
    textList: ['Убийство', 'Попытка ограбления', 'Захват заложников'],
    frontImg: { src: tenFrontImg, alt: 'ten-front-image' },
    backImg: { src: tenBackImg, alt: 'ten-back-image' },
  },
  {
    lvl: 10,
    textList: [
      'Похищение ребёнка',
      'Убийство ребёнка',
      'Причастность к убийствам',
    ],
    frontImg: { src: elevenFrontImg, alt: 'eleven-front-image' },
    backImg: { src: elevenBackImg, alt: 'eleven-back-image' },
  },
  {
    lvl: 11,
    textList: [
      'Похищение',
      'Убийства и попытки убийства',
      'Пытки',
      'Хищения средств',
    ],
    frontImg: { src: twelveFrontImg, alt: 'twelve-front-image' },
    backImg: { src: twelveBackImg, alt: 'twelve-back-image' },
  },
  {
    lvl: 12,
    textList: [
      'Психологическое насилие над пациентами',
      'Злоупотребление властью',
      'Манипуляции и угрозы',
      'Применение жестких медицинских процедур',
      'Доведение до самоубийства',
    ],
    frontImg: { src: thirteenFrontImg, alt: 'thirteen-front-image' },
    backImg: { src: thirteenBackImg, alt: 'thirteen-back-image' },
  },
  {
    lvl: 13,
    textList: [
      'Серийные убийства семей',
      'Проникновения в дома',
      'Похищение и нападение',
      'Психологическое насилие',
    ],
    frontImg: { src: fourteenFrontImg, alt: 'fourteen-front-image' },
    backImg: { src: fourteenBackImg, alt: 'tfourteenwo-back-image' },
  },
  {
    lvl: 14,
    textList: [
      'Серийные убийства детей',
      'Жестокое обращение и издевательства',
      'Психологическое насилие над детьми',
      'Запугивание',
    ],
    frontImg: { src: fifteenFrontImg, alt: 'fifteen-front-image' },
    backImg: { src: fifteenBackImg, alt: 'fifteen-back-image' },
  },
  {
    lvl: 15,
    textList: [
      'Убийства и покушения',
      'Превращение людей в вампиров',
      'Похищения и манипуляции',
      'Союз с тёмными силами',
    ],
    frontImg: { src: sixteenFrontImg, alt: 'six-front-image' },
    backImg: { src: sixteenBackImg, alt: 'six-back-image' },
  },
  {
    lvl: 16,
    textList: [
      'Серийные убийства',
      'Похищения',
      'Пытки',
      'Шантаж',
      'Психологическое насилие',
    ],
    frontImg: { src: seventeenFrontImg, alt: 'seventeen-front-image' },
    backImg: { src: seventeenBackImg, alt: 'seventeen-back-image' },
  },
  {
    lvl: 17,
    textList: [
      'Убийства и покушения',
      'Связь с мафией',
      'Участие в группе наемников',
    ],
    frontImg: { src: eighteenFrontImg, alt: 'eighteen-front-image' },
    backImg: { src: eighteenBackImg, alt: 'eighteen-back-image' },
  },
  {
    lvl: 18,
    textList: [
      'Ложное обвинение',
      'Убийство',
      'Подделка документов',
      'Кража',
      'Домашнее насилие',
      'Психологическое насилие',
      'Жестокое обращение с животными',
    ],
    frontImg: { src: nineteenFrontImg, alt: 'nineteen-front-image' },
    backImg: { src: nineteenBackImg, alt: 'nineteen-back-image' },
  },
  {
    lvl: 19,
    textList: [
      'Серийные убийства',
      'Жестокое обращение с детьми',
      'Психологическое насилие',
      'Обман и манипуляции',
      'Маскировка под работника газовой службы',
    ],
    frontImg: { src: twentyFrontImg, alt: 'twenty-front-image' },
    backImg: { src: twentyBackImg, alt: 'twenty-back-image' },
  },
];
