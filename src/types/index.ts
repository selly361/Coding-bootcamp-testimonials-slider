/* Slide Show Context Provider */

interface ISlide {
  name: string;
  role: string;
  description: string;
  image: string;
}

export interface ISlideShowContext {
  currentSlide: ISlide;
  direction: number;
  nextSlide: () => void;
  prevSlide: () => void;
}
