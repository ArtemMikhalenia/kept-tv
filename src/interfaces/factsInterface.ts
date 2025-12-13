export interface FactsInterface {
  lvl: number;
  background: string;
  containerType: string;
  correctAnswer: string[];
  correctImg: string[];
  facts: FactInterface[];
}

export interface FactInterface {
  id: string;
  variant: string;
  numberColor: string;
  factClassName: string;
  factText: string;
  clicked: boolean;
}

export interface FactsSlideProps {
  level: FactsInterface;
  initialFacts: FactInterface[];
  isActive: boolean;
}
