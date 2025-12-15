export interface HdiwInterface {
  id: number;
  slideClassname: string;
  images: HdiwImageInterface[];
}

export interface HdiwImageInterface {
  id: string;
  src: string;
  alt: string;
  clicked: boolean;
  hiddenSrc?: string;
  hidden?: boolean;
}

export interface HdiwSlideProps {
  images: HdiwImageInterface[];
  isActive: boolean;
}
