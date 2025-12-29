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
    url: 'accounting',
    imgSrc: shampanskoeImg,
    imgAlt: 'shampanskoe',
    titleText: 'Accounting',
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
    videoLink1: '',
    videoLink2: 'https://youtu.be/SS7HFg02TS0?si=vIb5oE-vLTDWnmkF',
  },
  {
    link: 'accounting',
    image: shampanskoeImg,
    bottomText: 'Отдела бухгалтерии',
    className: 'shampanskoe',
    videoLink1: '',
    videoLink2: 'https://youtu.be/-NZOmv27-OQ?si=OsdMO9RFUHxupdlo',
  },
  {
    link: 'consulting',
    image: salutImg,
    bottomText: 'Отдела консалтинга',
    className: 'salut',
    videoLink1: '',
    videoLink2: 'https://youtu.be/k7ps0YBCANk?si=q2nkBOQVfqm-73LT',
  },
  {
    link: 'hr',
    image: mandarinImg,
    bottomText: 'HR отдела',
    className: 'mandarin',
    videoLink1: 'https://youtu.be/qh7dQdJArVk?si=a58atI3oNrX3e7Qt',
    videoLink2: 'https://youtu.be/eSSg_fdux68?si=QFWPGqmLUsoiU1T6',
  },
  {
    link: 'audit',
    image: buterImg,
    bottomText: 'Отдела аудита',
    className: 'buter',
    videoLink1: '',
    videoLink2: 'https://youtu.be/TUyvOYTFmQw?si=GtA4EnGSOUhPuAlt',
  },
  {
    link: 'tco',
    image: sharImg,
    bottomText: 'Отдела ТЦО',
    className: 'shar',
    videoLink1: 'https://youtu.be/nFbsI4W5lKI?si=IFe2VhlfIGHunEtI',
    videoLink2: 'https://youtu.be/aC7_ZAnY9OE?si=P25LbXUCj_YB-Lcq',
  },
  {
    link: 'adc',
    image: podarokImg,
    bottomText: 'Отдела поддержки аудита',
    className: 'podarok',
    videoLink1: 'https://youtu.be/43HK3yuBLDQ?si=ijWYR7RKtgtW0vMw',
    videoLink2: 'https://youtu.be/8Q2WwUHDUj4?si=_EuuSzjDlCrDy-Iq',
  },
];
