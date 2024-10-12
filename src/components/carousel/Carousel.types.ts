interface CarouselProps {
  timePerTransition?: number;
  imgUrls: string[];
  width?: number;
  height?: number;
}

interface CarouselSlideProps {
  imgUrl: string;
  page: number;
  currentPage?: number;
  onImgLoaded: (page: number) => void;
  cachedImages: { [page: number]: boolean };
  width: number;
}

export type { CarouselProps, CarouselSlideProps };
