import buterImg from '../assets/images/blue_light_images/buter.webp';
import charactersImg from '../assets/images/blue_light_images/characters.webp';
import mandarinImg from '../assets/images/blue_light_images/mandarin.webp';
import podarokImg from '../assets/images/blue_light_images/podarok.webp';
import salutImg from '../assets/images/blue_light_images/salut.webp';
import shampanskoeImg from '../assets/images/blue_light_images/shampanskoe.webp';
import sharImg from '../assets/images/blue_light_images/shar.webp';
import type {
  BlueLightDataTypes,
  BlueLightDepartmentsDataTypes,
} from '../types/blueLightTypes';

export const blueLightLinksData: BlueLightDataTypes = [
  {
    className: 'buter',
    url: 'audit',
    imgSrc: buterImg,
    imgAlt: 'buter',
    titleText: 'Аудит',
    x: '-45%',
    y: '-45%',
  },
  {
    className: 'shampanskoe',
    url: 'bookkeeping',
    imgSrc: shampanskoeImg,
    imgAlt: 'shampanskoe',
    titleText: 'Book keeping',
    x: '0',
    y: '-45%',
  },
  {
    className: 'salut',
    url: 'consulting',
    imgSrc: salutImg,
    imgAlt: 'salut',
    titleText: 'Консалтинг',
    x: '45%',
    y: '-45%',
  },
  {
    className: 'characters',
    url: 'director',
    imgSrc: charactersImg,
    imgAlt: 'characters',
    titleText: 'Директор',
    x: '0',
    y: '0',
  },
  {
    className: 'shar',
    url: 'tco',
    imgSrc: sharImg,
    imgAlt: 'shar',
    titleText: 'ТЦО',
    x: '-45%',
    y: '45%',
  },
  {
    className: 'mandarin',
    url: 'hr',
    imgSrc: mandarinImg,
    imgAlt: 'mandarin',
    titleText: 'HR',
    x: '45%',
    y: '45%',
  },
  {
    className: 'podarok',
    url: 'adc',
    imgSrc: podarokImg,
    imgAlt: 'podarok',
    titleText: 'ADC',
    x: '0',
    y: '45%',
  },
];

export const blueLightRoutingLinks: BlueLightDepartmentsDataTypes = [
  {
    link: 'director',
    image: charactersImg,
    bottomText: 'Директора ООО «Кэпт»',
    className: 'characters',
  },
  {
    link: 'bookkeeping',
    image: shampanskoeImg,
    bottomText: 'Отдела book keeping',
    className: 'shampanskoe',
  },
  {
    link: 'consulting',
    image: salutImg,
    bottomText: 'Отдела консалтинга',
    className: 'salut',
  },
  {
    link: 'hr',
    image: mandarinImg,
    bottomText: 'HR отдела',
    className: 'mandarin',
  },
  {
    link: 'audit',
    image: buterImg,
    bottomText: 'Отдела аудита',
    className: 'buter',
  },
  { link: 'tco', image: sharImg, bottomText: 'Отдела ТЦО', className: 'shar' },
  {
    link: 'adc',
    image: podarokImg,
    bottomText: 'Отдела поддержки аудита',
    className: 'podarok',
  },
];
