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
    textList: [
      ['С', 'е', 'р', 'и', 'й', 'н', 'ы', 'е', ' ', 'у', 'б', 'и', 'й', 'с', 'т', 'в', 'а'],
      ['С', 'о', 'к', 'р', 'ы', 'т', 'и', 'е', ' ', 'у', 'б', 'и', 'й', 'с', 'т', 'в', 'а'],
      ['С', 'о', 'к', 'р', 'ы', 'т', 'и', 'е', ' ', 'у', 'л', 'и', 'к']
    ],
    frontImg: { src: oneFrontImg, alt: 'one-front-image' },
    backImg: { src: oneBackImg, alt: 'one-back-image' },
  },
  {
    lvl: 1,
    textList: [
      ['П', 'о', 'п', 'ы', 'т', 'к', 'а', ' ', 'у', 'б', 'и', 'й', 'с', 'т', 'в', 'а', ' ', 'ж', 'е', 'н', 'ы', ' ', 'и', ' ', 'с', 'ы', 'н', 'а'],
      ['Н', 'а', 'п', 'а', 'д', 'е', 'н', 'и', 'е', ' ', 'с', ' ', 'о', 'р', 'у', 'ж', 'и', 'е', 'м'],
      ['Ф', 'и', 'з', 'и', 'ч', 'е', 'с', 'к', 'о', 'е', ' ', 'н', 'а', 'с', 'и', 'л', 'и', 'е'],
      ['П', 'с', 'и', 'х', 'о', 'л', 'о', 'г', 'и', 'ч', 'е', 'с', 'к', 'и', 'й', ' ', 'т', 'е', 'р', 'р', 'о', 'р']
    ],
    frontImg: { src: twoFrontImg, alt: 'two-front-image' },
    backImg: { src: twoBackImg, alt: 'two-back-image' },
  },
  {
    lvl: 2,
    textList: [
      ['П', 'р', 'о', 'н', 'и', 'к', 'н', 'о', 'в', 'е', 'н', 'и', 'е', ' ', 'с', 'о', ' ', 'в', 'з', 'л', 'о', 'м', 'о', 'м'],
      ['К', 'р', 'а', 'ж', 'а'],
      ['П', 'о', 'к', 'у', 'ш', 'е', 'н', 'и', 'е', ' ', 'н', 'а', ' ', 'у', 'б', 'и', 'й', 'с', 'т', 'в', 'о'],
      ['П', 'о', 'х', 'и', 'щ', 'е', 'н', 'и', 'е'],
      ['П', 'о', 'б', 'е', 'г', ' ', 'и', 'з', '-', 'п', 'о', 'д', ' ', 'з', 'а', 'к', 'л', 'ю', 'ч', 'е', 'н', 'и', 'я'],
      ['В', 'ы', 'д', 'а', 'ч', 'а', ' ', 'с', 'е', 'б', 'я', ' ', 'з', 'а', ' ', 'с', 'о', 'т', 'р', 'у', 'д', 'н', 'и', 'к', 'а', ' ', 'п', 'о', 'л', 'и', 'ц', 'и', 'и']
    ],
    frontImg: { src: threeFrontImg, alt: 'three-front-image' },
    backImg: { src: threeBackImg, alt: 'three-back-image' },
  },
  {
    lvl: 3,
    textList: [
      ['В', 'о', 'е', 'н', 'н', 'ы', 'е', ' ', 'п', 'р', 'е', 'с', 'т', 'у', 'п', 'л', 'е', 'н', 'и', 'я'],
      ['М', 'а', 'с', 'с', 'о', 'в', 'ы', 'е', ' ', 'у', 'б', 'и', 'й', 'с', 'т', 'в', 'а'],
      ['П', 'р', 'е', 'с', 'т', 'у', 'п', 'л', 'е', 'н', 'и', 'я', ' ', 'п', 'р', 'о', 'т', 'и', 'в', ' ', 'ч', 'е', 'л', 'о', 'в', 'е', 'ч', 'е', 'с', 'т', 'в', 'а'],
      ['П', 'р', 'е', 'д', 'а', 'т', 'е', 'л', 'ь', 'с', 'т', 'в', 'о'],
      ['П', 'с', 'и', 'х', 'о', 'л', 'о', 'г', 'и', 'ч', 'е', 'с', 'к', 'о', 'е', ' ', 'н', 'а', 'с', 'и', 'л', 'и', 'е']
    ],
    frontImg: { src: fourFrontImg, alt: 'four-front-image' },
    backImg: { src: fourBackImg, alt: 'four-back-image' },
  },
  {
    lvl: 4,
    textList: [
      ['П', 'ы', 'т', 'к', 'и'],
      ['Ж', 'е', 'с', 'т', 'о', 'к', 'о', 'е', ' ', 'о', 'б', 'р', 'а', 'щ', 'е', 'н', 'и', 'е', ' ', 'с', ' ', 'д', 'е', 'т', 'ь', 'м', 'и'],
      ['З', 'л', 'о', 'у', 'п', 'о', 'т', 'р', 'е', 'б', 'л', 'е', 'н', 'и', 'е', ' ', 'в', 'л', 'а', 'с', 'т', 'ь', 'ю'],
      ['П', 'р', 'е', 'д', 'а', 'т', 'е', 'л', 'ь', 'с', 'т', 'в', 'о'],
      ['У', 'б', 'и', 'й', 'с', 'т', 'в', 'а', ' ', 'и', ' ', 'п', 'о', 'д', 'с', 'т', 'р', 'е', 'к', 'а', 'т', 'е', 'л', 'ь', 'с', 'т', 'в', 'а', ' ', 'к', ' ', 'у', 'б', 'и', 'й', 'с', 'т', 'в', 'у'],
      ['П', 'р', 'е', 'с', 'т', 'у', 'п', 'л', 'е', 'н', 'и', 'я', ' ', 'п', 'р', 'о', 'т', 'и', 'в', ' ', 'ч', 'е', 'л', 'о', 'в', 'е', 'ч', 'н', 'о', 'с', 'т', 'и']
    ],
    frontImg: { src: fiveFrontImg, alt: 'five-front-image' },
    backImg: { src: fiveBackImg, alt: 'five-back-image' },
  },
  {
    lvl: 5,
    textList: [
      ['М', 'а', 'с', 'с', 'о', 'в', 'о', 'е', ' ', 'у', 'б', 'и', 'й', 'с', 'т', 'в', 'о'],
      ['К', 'р', 'а', 'ж', 'а'],
      ['Н', 'а', 'с', 'и', 'л', 'и', 'е'],
      ['П', 'с', 'и', 'х', 'о', 'л', 'о', 'г', 'и', 'ч', 'е', 'с', 'к', 'о', 'е', ' ', 'н', 'а', 'с', 'и', 'л', 'и', 'е'],
      ['В', 'а', 'н', 'д', 'а', 'л', 'и', 'з', 'м']
    ],
    frontImg: { src: sixFrontImg, alt: 'six-front-image' },
    backImg: { src: sixBackImg, alt: 'six-back-image' },
  },
  {
    lvl: 6,
    textList: [
      ['К', 'о', 'р', 'р', 'у', 'п', 'ц', 'и', 'я'],
      ['У', 'б', 'и', 'й', 'с', 'т', 'в', 'а', ' ', 'и', ' ', 'п', 'о', 'д', 'с', 'т', 'р', 'е', 'к', 'а', 'т', 'е', 'л', 'ь', 'с', 'т', 'в', 'а', ' ', 'к', ' ', 'у', 'б', 'и', 'й', 'с', 'т', 'в', 'у'],
      ['Н', 'а', 'р', 'к', 'о', 'т', 'о', 'р', 'г', 'о', 'в', 'л', 'я'],
      ['Ж', 'е', 'с', 'т', 'о', 'к', 'о', 'е', ' ', 'о', 'б', 'р', 'а', 'щ', 'е', 'н', 'и', 'е', ' ', 'с', ' ', 'д', 'е', 'т', 'ь', 'м', 'и'],
      ['П', 'ы', 'т', 'к', 'и'],
      ['В', 'ы', 'м', 'о', 'г', 'а', 'т', 'е', 'л', 'ь', 'с', 'т', 'в', 'о'],
      ['П', 'о', 'х', 'и', 'щ', 'е', 'н', 'и', 'е', ' ', 'л', 'ю', 'д', 'е', 'й']
    ],
    frontImg: { src: sevenFrontImg, alt: 'seven-front-image' },
    backImg: { src: sevenBackImg, alt: 'seven-back-image' },
  },
  {
    lvl: 7,
    textList: [
      ['М', 'а', 'с', 'с', 'о', 'в', 'о', 'е', ' ', 'у', 'б', 'и', 'й', 'с', 'т', 'в', 'о'],
      ['П', 'о', 'х', 'и', 'щ', 'е', 'н', 'и', 'е'],
      ['П', 'ы', 'т', 'к', 'и'],
      ['У', 'з', 'у', 'р', 'п', 'а', 'ц', 'и', 'я'],
      ['П', 'р', 'е', 'с', 'т', 'у', 'п', 'л', 'е', 'н', 'и', 'я', ' ', 'п', 'р', 'о', 'т', 'и', 'в', ' ', 'ч', 'е', 'л', 'о', 'в', 'е', 'ч', 'е', 'с', 'т', 'в', 'а'],
      ['П', 'р', 'е', 'с', 'т', 'у', 'п', 'л', 'е', 'н', 'и', 'я', ' ', 'н', 'а', ' ', 'п', 'о', 'ч', 'в', 'е', ' ', 'н', 'е', 'н', 'а', 'в', 'и', 'с', 'т', 'и']
    ],
    frontImg: { src: eightFrontImg, alt: 'eight-front-image' },
    backImg: { src: eightBackImg, alt: 'eight-back-image' },
  },
  {
    lvl: 8,
    textList: [
      ['П', 'р', 'е', 'д', 'а', 'т', 'е', 'л', 'ь', 'с', 'т', 'в', 'о'],
      ['У', 'з', 'у', 'р', 'п', 'а', 'ц', 'и', 'я'],
      ['У', 'б', 'и', 'й', 'с', 'т', 'в', 'а', ' ', 'и', ' ', 'п', 'о', 'д', 'с', 'т', 'р', 'е', 'к', 'а', 'т', 'е', 'л', 'ь', 'с', 'т', 'в', 'а', ' ', 'к', ' ', 'у', 'б', 'и', 'й', 'с', 'т', 'в', 'у'],
      ['П', 'о', 'д', 'ж', 'о', 'г'],
      ['Ш', 'а', 'н', 'т', 'а', 'ж'],
      ['В', 'о', 'е', 'н', 'н', 'ы', 'е', ' ', 'п', 'р', 'е', 'с', 'т', 'у', 'п', 'л', 'е', 'н', 'и', 'я'],
      ['З', 'л', 'о', 'у', 'п', 'о', 'т', 'р', 'е', 'б', 'л', 'е', 'н', 'и', 'е', ' ', 'в', 'л', 'а', 'с', 'т', 'ь', 'ю']
    ],
    frontImg: { src: nineFrontImg, alt: 'nine-front-image' },
    backImg: { src: nineBackImg, alt: 'nine-back-image' },
  },
  {
    lvl: 9,
    textList: [
      ['У', 'б', 'и', 'й', 'с', 'т', 'в', 'о'],
      ['П', 'о', 'п', 'ы', 'т', 'к', 'а', ' ', 'о', 'г', 'р', 'а', 'б', 'л', 'е', 'н', 'и', 'я'],
      ['З', 'а', 'х', 'в', 'а', 'т', ' ', 'з', 'а', 'л', 'о', 'ж', 'н', 'и', 'к', 'о', 'в']
    ],
    frontImg: { src: tenFrontImg, alt: 'ten-front-image' },
    backImg: { src: tenBackImg, alt: 'ten-back-image' },
  },
  {
    lvl: 10,
    textList: [
      ['П', 'о', 'х', 'и', 'щ', 'е', 'н', 'и', 'е', ' ', 'р', 'е', 'б', 'ё', 'н', 'к', 'а'],
      ['У', 'б', 'и', 'й', 'с', 'т', 'в', 'о', ' ', 'р', 'е', 'б', 'ё', 'н', 'к', 'а'],
      ['П', 'р', 'и', 'ч', 'а', 'с', 'т', 'н', 'о', 'с', 'т', 'ь', ' ', 'к', ' ', 'у', 'б', 'и', 'й', 'с', 'т', 'в', 'а', 'м']
    ],
    frontImg: { src: elevenFrontImg, alt: 'eleven-front-image' },
    backImg: { src: elevenBackImg, alt: 'eleven-back-image' },
  },
  {
    lvl: 11,
    textList: [
      ['П', 'о', 'х', 'и', 'щ', 'е', 'н', 'и', 'е'],
      ['У', 'б', 'и', 'й', 'с', 'т', 'в', 'а', ' ', 'и', ' ', 'п', 'о', 'п', 'ы', 'т', 'к', 'и', ' ', 'у', 'б', 'и', 'й', 'с', 'т', 'в', 'а'],
      ['П', 'ы', 'т', 'к', 'и'],
      ['Х', 'и', 'щ', 'е', 'н', 'и', 'я', ' ', 'с', 'р', 'е', 'д', 'с', 'т', 'в']
    ],
    frontImg: { src: twelveFrontImg, alt: 'twelve-front-image' },
    backImg: { src: twelveBackImg, alt: 'twelve-back-image' },
  },
  {
    lvl: 12,
    textList: [
      ['П', 'с', 'и', 'х', 'о', 'л', 'о', 'г', 'и', 'ч', 'е', 'с', 'к', 'о', 'е', ' ', 'н', 'а', 'с', 'и', 'л', 'и', 'е', ' ', 'н', 'а', 'д', ' ', 'п', 'а', 'ц', 'и', 'е', 'н', 'т', 'а', 'м', 'и'],
      ['З', 'л', 'о', 'у', 'п', 'о', 'т', 'р', 'е', 'б', 'л', 'е', 'н', 'и', 'е', ' ', 'в', 'л', 'а', 'с', 'т', 'ь', 'ю'],
      ['М', 'а', 'н', 'и', 'п', 'у', 'л', 'я', 'ц', 'и', 'и', ' ', 'и', ' ', 'у', 'г', 'р', 'о', 'з', 'ы'],
      ['П', 'р', 'и', 'м', 'е', 'н', 'е', 'н', 'и', 'е', ' ', 'ж', 'е', 'с', 'т', 'к', 'и', 'х', ' ', 'м', 'е', 'д', 'и', 'ц', 'и', 'н', 'с', 'к', 'и', 'х', ' ', 'п', 'р', 'о', 'ц', 'е', 'д', 'у', 'р'],
      ['Д', 'о', 'в', 'е', 'д', 'е', 'н', 'и', 'е', ' ', 'д', 'о', ' ', 'с', 'а', 'м', 'о', 'у', 'б', 'и', 'й', 'с', 'т', 'в', 'а']
    ],
    frontImg: { src: thirteenFrontImg, alt: 'thirteen-front-image' },
    backImg: { src: thirteenBackImg, alt: 'thirteen-back-image' },
  },
  {
    lvl: 13,
    textList: [
      ['С', 'е', 'р', 'и', 'й', 'н', 'ы', 'е', ' ', 'у', 'б', 'и', 'й', 'с', 'т', 'в', 'а', ' ', 'с', 'е', 'м', 'е', 'й'],
      ['П', 'р', 'о', 'н', 'и', 'к', 'н', 'о', 'в', 'е', 'н', 'и', 'я', ' ', 'в', ' ', 'д', 'о', 'м', 'а'],
      ['П', 'о', 'х', 'и', 'щ', 'е', 'н', 'и', 'е', ' ', 'и', ' ', 'н', 'а', 'п', 'а', 'д', 'е', 'н', 'и', 'е'],
      ['П', 'с', 'и', 'х', 'о', 'л', 'о', 'г', 'и', 'ч', 'е', 'с', 'к', 'о', 'е', ' ', 'н', 'а', 'с', 'и', 'л', 'и', 'е']
    ],
    frontImg: { src: fourteenFrontImg, alt: 'fourteen-front-image' },
    backImg: { src: fourteenBackImg, alt: 'fourteen-back-image' },
  },
  {
    lvl: 14,
    textList: [
      ['С', 'е', 'р', 'и', 'й', 'н', 'ы', 'е', ' ', 'у', 'б', 'и', 'й', 'с', 'т', 'в', 'а', ' ', 'д', 'е', 'т', 'е', 'й'],
      ['Ж', 'е', 'с', 'т', 'о', 'к', 'о', 'е', ' ', 'о', 'б', 'р', 'а', 'щ', 'е', 'н', 'и', 'е', ' ', 'и', ' ', 'и', 'з', 'д', 'е', 'в', 'а', 'т', 'е', 'л', 'ь', 'с', 'т', 'в', 'а'],
      ['П', 'с', 'и', 'х', 'о', 'л', 'о', 'г', 'и', 'ч', 'е', 'с', 'к', 'о', 'е', ' ', 'н', 'а', 'с', 'и', 'л', 'и', 'е', ' ', 'н', 'а', 'д', ' ', 'д', 'е', 'т', 'ь', 'м', 'и'],
      ['З', 'а', 'п', 'у', 'г', 'и', 'в', 'а', 'н', 'и', 'е']
    ],
    frontImg: { src: fifteenFrontImg, alt: 'fifteen-front-image' },
    backImg: { src: fifteenBackImg, alt: 'fifteen-back-image' },
  },
  {
    lvl: 15,
    textList: [
      ['У', 'б', 'и', 'й', 'с', 'т', 'в', 'а', ' ', 'и', ' ', 'п', 'о', 'к', 'у', 'ш', 'е', 'н', 'и', 'я'],
      ['П', 'р', 'е', 'в', 'р', 'а', 'щ', 'е', 'н', 'и', 'е', ' ', 'л', 'ю', 'д', 'е', 'й', ' ', 'в', ' ', 'в', 'а', 'м', 'п', 'и', 'р', 'о', 'в'],
      ['П', 'о', 'х', 'и', 'щ', 'е', 'н', 'и', 'я', ' ', 'и', ' ', 'м', 'а', 'н', 'и', 'п', 'у', 'л', 'я', 'ц', 'и', 'и'],
      ['С', 'о', 'ю', 'з', ' ', 'с', ' ', 'т', 'ё', 'м', 'н', 'ы', 'м', 'и', ' ', 'с', 'и', 'л', 'а', 'м', 'и']
    ],
    frontImg: { src: sixteenFrontImg, alt: 'sixteen-front-image' },
    backImg: { src: sixteenBackImg, alt: 'sixteen-back-image' },
  },
  {
    lvl: 16,
    textList: [
      ['С', 'е', 'р', 'и', 'й', 'н', 'ы', 'е', ' ', 'у', 'б', 'и', 'й', 'с', 'т', 'в', 'а'],
      ['П', 'о', 'х', 'и', 'щ', 'е', 'н', 'и', 'я'],
      ['П', 'ы', 'т', 'к', 'и'],
      ['Ш', 'а', 'н', 'т', 'а', 'ж'],
      ['П', 'с', 'и', 'х', 'о', 'л', 'о', 'г', 'и', 'ч', 'е', 'с', 'к', 'о', 'е', ' ', 'н', 'а', 'с', 'и', 'л', 'и', 'е']
    ],
    frontImg: { src: seventeenFrontImg, alt: 'seventeen-front-image' },
    backImg: { src: seventeenBackImg, alt: 'seventeen-back-image' },
  },
  {
    lvl: 17,
    textList: [
      ['У', 'б', 'и', 'й', 'с', 'т', 'в', 'а', ' ', 'и', ' ', 'п', 'о', 'к', 'у', 'ш', 'е', 'н', 'и', 'я'],
      ['С', 'в', 'я', 'з', 'ь', ' ', 'с', ' ', 'м', 'а', 'ф', 'и', 'е', 'й'],
      ['У', 'ч', 'а', 'с', 'т', 'и', 'е', ' ', 'в', ' ', 'г', 'р', 'у', 'п', 'п', 'е', ' ', 'н', 'а', 'ё', 'м', 'н', 'и', 'к', 'о', 'в']
    ],
    frontImg: { src: eighteenFrontImg, alt: 'eighteen-front-image' },
    backImg: { src: eighteenBackImg, alt: 'eighteen-back-image' },
  },
  {
    lvl: 18,
    textList: [
      ['Л', 'о', 'ж', 'н', 'о', 'е', ' ', 'о', 'б', 'в', 'и', 'н', 'е', 'н', 'и', 'е'],
      ['У', 'б', 'и', 'й', 'с', 'т', 'в', 'о'],
      ['П', 'о', 'д', 'д', 'е', 'л', 'к', 'а', ' ', 'д', 'о', 'к', 'у', 'м', 'е', 'н', 'т', 'о', 'в'],
      ['К', 'р', 'а', 'ж', 'а'],
      ['Д', 'о', 'м', 'а', 'ш', 'н', 'е', 'е', ' ', 'н', 'а', 'с', 'и', 'л', 'и', 'е'],
      ['П', 'с', 'и', 'х', 'о', 'л', 'о', 'г', 'и', 'ч', 'е', 'с', 'к', 'о', 'е', ' ', 'н', 'а', 'с', 'и', 'л', 'и', 'е'],
      ['Ж', 'е', 'с', 'т', 'о', 'к', 'о', 'е', ' ', 'о', 'б', 'р', 'а', 'щ', 'е', 'н', 'и', 'е', ' ', 'с', ' ', 'ж', 'и', 'в', 'о', 'т', 'н', 'ы', 'м', 'и']
    ],
    frontImg: { src: nineteenFrontImg, alt: 'nineteen-front-image' },
    backImg: { src: nineteenBackImg, alt: 'nineteen-back-image' },
  },
  {
    lvl: 19,
    textList: [
      ['С', 'е', 'р', 'и', 'й', 'н', 'ы', 'е', ' ', 'у', 'б', 'и', 'й', 'с', 'т', 'в', 'а'],
      ['Ж', 'е', 'с', 'т', 'о', 'к', 'о', 'е', ' ', 'о', 'б', 'р', 'а', 'щ', 'е', 'н', 'и', 'е', ' ', 'с', ' ', 'д', 'е', 'т', 'ь', 'м', 'и'],
      ['П', 'с', 'и', 'х', 'о', 'л', 'о', 'г', 'и', 'ч', 'е', 'с', 'к', 'о', 'е', ' ', 'н', 'а', 'с', 'и', 'л', 'и', 'е'],
      ['О', 'б', 'м', 'а', 'н', ' ', 'и', ' ', 'м', 'а', 'н', 'и', 'п', 'у', 'л', 'я', 'ц', 'и', 'и'],
      ['М', 'а', 'с', 'к', 'и', 'р', 'о', 'в', 'к', 'а', ' ', 'п', 'о', 'д', ' ', 'р', 'а', 'б', 'о', 'т', 'н', 'и', 'к', 'а', ' ', 'г', 'а', 'з', 'о', 'в', 'о', 'й', ' ', 'с', 'л', 'у', 'ж', 'б', 'ы']
    ],
    frontImg: { src: twentyFrontImg, alt: 'twenty-front-image' },
    backImg: { src: twentyBackImg, alt: 'twenty-back-image' },
  },
];


// export const detectiveData: DetectiveDataTypes = [
//   {
//     lvl: 0,
//     textList: ['Серийные убийства', 'Сокрытие убийства', 'Сокрытие улик'],
//     frontImg: { src: oneFrontImg, alt: 'one-front-image' },
//     backImg: { src: oneBackImg, alt: 'one-back-image' },
//   },
//   {
//     lvl: 1,
//     textList: [
//       'Попытка убийства жены и сына',
//       'Нападение с оружием',
//       'Физическое насилие',
//       'Психологический террор',
//     ],
//     frontImg: { src: twoFrontImg, alt: 'two-front-image' },
//     backImg: { src: twoBackImg, alt: 'two-back-image' },
//   },
//   {
//     lvl: 2,
//     textList: [
//       'Проникновение со взломом',
//       'Кража',
//       'Покушение на убийство',
//       'Похищение',
//       'Побег из-под заключения',
//       'Выдача себя за сотрудника полиции',
//     ],
//     frontImg: { src: threeFrontImg, alt: 'three-front-image' },
//     backImg: { src: threeBackImg, alt: 'three-back-image' },
//   },
//   {
//     lvl: 3,
//     textList: [
//       'Военные преступления',
//       'Массовые убийства',
//       'Преступления против человечества',
//       'Предательство',
//       'Психологическое насилие',
//     ],
//     frontImg: { src: fourFrontImg, alt: 'four-front-image' },
//     backImg: { src: fourBackImg, alt: 'four-back-image' },
//   },
//   {
//     lvl: 4,
//     textList: [
//       'Пытки',
//       'Жестокое обращение с детьми',
//       'Злоупотребление властью',
//       'Предательство',
//       'Убийства и подстрекательства к убийству',
//       'Преступления против человечности',
//     ],
//     frontImg: { src: fiveFrontImg, alt: 'five-front-image' },
//     backImg: { src: fiveBackImg, alt: 'five-back-image' },
//   },
//   {
//     lvl: 5,
//     textList: [
//       'Массовое убийство',
//       'Кража',
//       'Насилие',
//       'Психологическое насилие',
//       'Вандализм',
//     ],
//     frontImg: { src: sixFrontImg, alt: 'six-front-image' },
//     backImg: { src: sixBackImg, alt: 'six-back-image' },
//   },
//   {
//     lvl: 6,
//     textList: [
//       'Коррупция',
//       'Убийства и подстрекательства к убийству',
//       'Наркоторговля',
//       'Жестокое обращение с детьми',
//       'Пытки',
//       'Вымогательство',
//       'Похищение людей',
//     ],
//     frontImg: { src: sevenFrontImg, alt: 'seven-front-image' },
//     backImg: { src: sevenBackImg, alt: 'seven-back-image' },
//   },
//   {
//     lvl: 7,
//     textList: [
//       'Массовое убийство',
//       'Похищение',
//       'Пытки',
//       'Узурпация',
//       'Преступления против человечества',
//       'Преступления на почве ненависти',
//     ],
//     frontImg: { src: eightFrontImg, alt: 'eight-front-image' },
//     backImg: { src: eightBackImg, alt: 'eight-back-image' },
//   },
//   {
//     lvl: 8,
//     textList: [
//       'Предательство',
//       'Узурпация',
//       'Убийства и подстрекательства к убийству',
//       'Поджог',
//       'Шантаж',
//       'Военные преступления',
//       'Злоупотребление властью',
//     ],
//     frontImg: { src: nineFrontImg, alt: 'nine-front-image' },
//     backImg: { src: nineBackImg, alt: 'nine-back-image' },
//   },
//   {
//     lvl: 9,
//     textList: ['Убийство', 'Попытка ограбления', 'Захват заложников'],
//     frontImg: { src: tenFrontImg, alt: 'ten-front-image' },
//     backImg: { src: tenBackImg, alt: 'ten-back-image' },
//   },
//   {
//     lvl: 10,
//     textList: [
//       'Похищение ребёнка',
//       'Убийство ребёнка',
//       'Причастность к убийствам',
//     ],
//     frontImg: { src: elevenFrontImg, alt: 'eleven-front-image' },
//     backImg: { src: elevenBackImg, alt: 'eleven-back-image' },
//   },
//   {
//     lvl: 11,
//     textList: [
//       'Похищение',
//       'Убийства и попытки убийства',
//       'Пытки',
//       'Хищения средств',
//     ],
//     frontImg: { src: twelveFrontImg, alt: 'twelve-front-image' },
//     backImg: { src: twelveBackImg, alt: 'twelve-back-image' },
//   },
//   {
//     lvl: 12,
//     textList: [
//       'Психологическое насилие над пациентами',
//       'Злоупотребление властью',
//       'Манипуляции и угрозы',
//       'Применение жестких медицинских процедур',
//       'Доведение до самоубийства',
//     ],
//     frontImg: { src: thirteenFrontImg, alt: 'thirteen-front-image' },
//     backImg: { src: thirteenBackImg, alt: 'thirteen-back-image' },
//   },
//   {
//     lvl: 13,
//     textList: [
//       'Серийные убийства семей',
//       'Проникновения в дома',
//       'Похищение и нападение',
//       'Психологическое насилие',
//     ],
//     frontImg: { src: fourteenFrontImg, alt: 'fourteen-front-image' },
//     backImg: { src: fourteenBackImg, alt: 'tfourteenwo-back-image' },
//   },
//   {
//     lvl: 14,
//     textList: [
//       'Серийные убийства детей',
//       'Жестокое обращение и издевательства',
//       'Психологическое насилие над детьми',
//       'Запугивание',
//     ],
//     frontImg: { src: fifteenFrontImg, alt: 'fifteen-front-image' },
//     backImg: { src: fifteenBackImg, alt: 'fifteen-back-image' },
//   },
//   {
//     lvl: 15,
//     textList: [
//       'Убийства и покушения',
//       'Превращение людей в вампиров',
//       'Похищения и манипуляции',
//       'Союз с тёмными силами',
//     ],
//     frontImg: { src: sixteenFrontImg, alt: 'six-front-image' },
//     backImg: { src: sixteenBackImg, alt: 'six-back-image' },
//   },
//   {
//     lvl: 16,
//     textList: [
//       'Серийные убийства',
//       'Похищения',
//       'Пытки',
//       'Шантаж',
//       'Психологическое насилие',
//     ],
//     frontImg: { src: seventeenFrontImg, alt: 'seventeen-front-image' },
//     backImg: { src: seventeenBackImg, alt: 'seventeen-back-image' },
//   },
//   {
//     lvl: 17,
//     textList: [
//       'Убийства и покушения',
//       'Связь с мафией',
//       'Участие в группе наемников',
//     ],
//     frontImg: { src: eighteenFrontImg, alt: 'eighteen-front-image' },
//     backImg: { src: eighteenBackImg, alt: 'eighteen-back-image' },
//   },
//   {
//     lvl: 18,
//     textList: [
//       'Ложное обвинение',
//       'Убийство',
//       'Подделка документов',
//       'Кража',
//       'Домашнее насилие',
//       'Психологическое насилие',
//       'Жестокое обращение с животными',
//     ],
//     frontImg: { src: nineteenFrontImg, alt: 'nineteen-front-image' },
//     backImg: { src: nineteenBackImg, alt: 'nineteen-back-image' },
//   },
//   {
//     lvl: 19,
//     textList: [
//       'Серийные убийства',
//       'Жестокое обращение с детьми',
//       'Психологическое насилие',
//       'Обман и манипуляции',
//       'Маскировка под работника газовой службы',
//     ],
//     frontImg: { src: twentyFrontImg, alt: 'twenty-front-image' },
//     backImg: { src: twentyBackImg, alt: 'twenty-back-image' },
//   },
// ];
