export interface GuessSongInterface {
  lvl: number;
  images: GuessSongImgInterface[];
}

export interface GuessSongImgInterface {
  id: number;
  src: string;
  alt: string;
}
