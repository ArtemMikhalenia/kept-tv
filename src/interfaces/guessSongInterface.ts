export interface GuessSongInterface {
  lvl: number;
  images: GuessSongImgInterface[];
}

export interface GuessSongImgInterface {
  id: number;
  src: string;
  alt: string;
}

export interface GuessSongLinkInterface {
  className: string;
  link: string;
  text: string;
}

export interface GuessSongRound2Interface {
  lvl: number;
  src: string;
  alt: string;
}

export interface GuessSongRound3Interface {
  slide: number;
  images: GuessSongRound3ImageInterface[];
}

export interface GuessSongRound3ImageInterface {
  id: number;
  imgLogoSrc: string;
  imgAnswerSrc: string;
  x: string;
  y: string;
  transformActive: string;
  transformInactive: string;
  clicked: boolean;
}

export interface GuessSongRound3SlideInterface {
  element: GuessSongRound3ImageInterface[];
  isActive: boolean;
}

export interface GuessSongRound4Interface {
  videoLink: string;
  thumbnail: string;
  imgFake: string;
  imgOriginal: string;
}

export interface GuessSongRound5Interface {
  id: number;
  text: string;
}
