/* Slide Show Context Provider */

interface ISlide {
  name: string;
  role: string;
  description: string;
  image: string;
}

export interface ISlideShowContext {
  currentSlideIndex: number;
  currentSlide: ISlide;
  direction: number;
  nextSlide: () => void;
  prevSlide: () => void;
}
