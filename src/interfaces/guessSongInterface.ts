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
