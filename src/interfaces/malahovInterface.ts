export interface MalahovInterface {
  level: number;
  sliderClassName: string;
  backgroundImageSrc: string;
  h2AnimationXStart: string;
  h2AnimationXEnd: string;
  h2AnimationYStart: string;
  h2AnimationYEnd: string;
  textAnimationXStart: string;
  textAnimationXEnd: string;
  textAnimationYStart: string;
  textAnimationYEnd: string;
  text: string;
  swiperImageXStart: string;
  swiperImageXEnd: string;
  swiperImageYStart: string;
  swiperImageYEnd: string;
  snakeImageActiveAnimation: string;
  snakeImageInactiveAnimation: string;
  diseaseImageSrc: string;
}

export interface MalahovSlideInterface {
  element: MalahovInterface;
  isActive: boolean;
}
