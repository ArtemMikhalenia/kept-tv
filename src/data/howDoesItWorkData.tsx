import type { HdiwInterface } from '../interfaces/howDoesItWorkInterface';

import tamagochiImg from '../assets/images/how_does_it_work_images/1_Tamagochi.webp';
import playerImg from '../assets/images/how_does_it_work_images/2_CD_player.webp';
import laserImg from '../assets/images/how_does_it_work_images/3_laser.webp';
import skeletonsImg from '../assets/images/how_does_it_work_images/4_Skeletons.webp';
import skeletonsHiddenImg from '../assets/images/how_does_it_work_images/4_Skeletons_hidden.webp';
import icqImg from '../assets/images/how_does_it_work_images/5_ICQ.webp';
import jvachkaImg from '../assets/images/how_does_it_work_images/6_jvachka_cigareta.webp';
import hlebImg from '../assets/images/how_does_it_work_images/7_Hleb_maslo.webp';
import simsImg from '../assets/images/how_does_it_work_images/8_The_Sims_Lot.webp';
import bombasterImg from '../assets/images/how_does_it_work_images/9_bombaster.webp';
import bombasterHiddenImg from '../assets/images/how_does_it_work_images/9_bombaster_hidden.webp';
import nokiaImg from '../assets/images/how_does_it_work_images/10_Nokia.webp';
import bykvaImg from '../assets/images/how_does_it_work_images/11_bykva.webp';
import kvasmolokoImg from '../assets/images/how_does_it_work_images/12_kvasmoloko.webp';
import kvasmolokoHiddenImg from '../assets/images/how_does_it_work_images/12_kvasmoloko_hidden.webp';
import koltsaImg from '../assets/images/how_does_it_work_images/13_koltsa.webp';
import fenechkiImg from '../assets/images/how_does_it_work_images/14_Fenechki.webp';
import kinderImg from '../assets/images/how_does_it_work_images/15_kinder.webp';
import stolImg from '../assets/images/how_does_it_work_images/16_stol_kniga.webp';
import rogatkaImg from '../assets/images/how_does_it_work_images/17_Rogatka.webp';
import lllokerImg from '../assets/images/how_does_it_work_images/18_jvachka_LLloker.webp';
import tattooImg from '../assets/images/how_does_it_work_images/19_jvachka_tattoo.webp';
import vidImg from '../assets/images/how_does_it_work_images/20_Telekomp_VID.webp';
import vidHiddenImg from '../assets/images/how_does_it_work_images/20_Telekomp_VID_hidden.webp';
import shagomerImg from '../assets/images/how_does_it_work_images/21_Zarya_shagomer.webp';
import molokoImg from '../assets/images/how_does_it_work_images/22._Moloko_storozh.webp';
import molokoHiddenImg from '../assets/images/how_does_it_work_images/22._Moloko_storozh_hidden.webp';
import pelmeniImg from '../assets/images/how_does_it_work_images/23_lepka_pelmeni.webp';
import ylibkaImg from '../assets/images/how_does_it_work_images/24_Fen_ylibka.webp';

export const howDoesItWorkData: HdiwInterface[] = [
  {
    id: 0,
    slideClassname: 'slide1',
    images: [
      { id: 'tamagochi', src: tamagochiImg, alt: 'tamagochi', clicked: false },
      { id: 'player', src: playerImg, alt: 'player', clicked: false },
      { id: 'laser', src: laserImg, alt: 'laser', clicked: false },
      {
        id: 'skeletons',
        src: skeletonsImg,
        alt: 'skeletons',
        clicked: false,
        hiddenSrc: skeletonsHiddenImg,
        hidden: false,
      },
    ],
  },
  {
    id: 1,
    slideClassname: 'slide2',
    images: [
      { id: 'icq', src: icqImg, alt: 'icq', clicked: false },
      { id: 'jvachka', src: jvachkaImg, alt: 'jvachka', clicked: false },
      { id: 'hleb', src: hlebImg, alt: 'hleb', clicked: false },
      { id: 'sims', src: simsImg, alt: 'sims', clicked: false },
    ],
  },
  {
    id: 2,
    slideClassname: 'slide3',
    images: [
      {
        id: 'bombaster',
        src: bombasterImg,
        alt: 'bombaster',
        clicked: false,
        hiddenSrc: bombasterHiddenImg,
        hidden: false,
      },
      { id: 'nokia', src: nokiaImg, alt: 'nokia', clicked: false },
      { id: 'bykva', src: bykvaImg, alt: 'bykva', clicked: false },
      {
        id: 'kvasmoloko',
        src: kvasmolokoImg,
        alt: 'kvasmoloko',
        clicked: false,
        hiddenSrc: kvasmolokoHiddenImg,
        hidden: false,
      },
    ],
  },
  {
    id: 3,
    slideClassname: 'slide4',
    images: [
      { id: 'koltsa', src: koltsaImg, alt: 'koltsa', clicked: false },
      { id: 'fenechki', src: fenechkiImg, alt: 'fenechki', clicked: false },
      { id: 'kinder', src: kinderImg, alt: 'kinder', clicked: false },
      { id: 'stol', src: stolImg, alt: 'stol', clicked: false },
    ],
  },
  {
    id: 4,
    slideClassname: 'slide5',
    images: [
      { id: 'rogatka', src: rogatkaImg, alt: 'rogatka', clicked: false },
      { id: 'llloker', src: lllokerImg, alt: 'llloker', clicked: false },
      { id: 'tattoo', src: tattooImg, alt: 'tattoo', clicked: false },
      {
        id: 'vid',
        src: vidImg,
        alt: 'vid',
        clicked: false,
        hiddenSrc: vidHiddenImg,
        hidden: false,
      },
    ],
  },
  {
    id: 5,
    slideClassname: 'slide6',
    images: [
      { id: 'shagomer', src: shagomerImg, alt: 'shagomer', clicked: false },
      {
        id: 'moloko',
        src: molokoImg,
        alt: 'moloko',
        clicked: false,
        hiddenSrc: molokoHiddenImg,
        hidden: false,
      },
      { id: 'pelmeni', src: pelmeniImg, alt: 'pelmeni', clicked: false },
      { id: 'ylibka', src: ylibkaImg, alt: 'ylibka', clicked: false },
    ],
  },
];
