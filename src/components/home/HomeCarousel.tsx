import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/Carousel';
import Autoplay from 'embla-carousel-autoplay';
import { useRef } from 'react';
import libraryImage from '../../../public/assets/graham_co_photos/GR3_1244_HDR_WEB.jpg?url';
import garageImage from '../../../public/assets/graham_co_photos/GR3_1487_HDR_WEB.jpg?url';
import apartmentBedreoomImage from '../../../public/assets/graham_co_photos/GR3_1639_HDR_WEB.jpg?url';
import kitchenDenImage from '../../../public/assets/graham_co_photos/GR3_6152_HDR_WEB.jpg?url';
import billiardsImage from '../../../public/assets/graham_co_photos/GR3_6197_HDR_WEB.jpg?url';

interface HeroImage {
  src: string;
  alt: string;
}

const carouselItems: HeroImage[] = [
  {
    src: libraryImage,
    alt: 'A cozy library with dark stained wooden shelves',
  },
  {
    src: garageImage,
    alt: 'An over-sized, standalone garage at night with light streaming out of the open doors',
  },
  {
    src: kitchenDenImage,
    alt: 'a traditionally styled kitchen with a large island and a cozy den',
  },
  {
    src: apartmentBedreoomImage,
    alt: 'a long bedroom with a fireplace, sliding door closets, and a private bathroom',
  },
  {
    src: billiardsImage,
    alt: 'a billiards room with a pool table, bar, and arcade games',
  },
];

export const HomeCarousel = () => {
  const plugin = useRef(Autoplay({ delay: 4000, stopOnMouseEnter: true, playOnInit: true }));

  return (
    <Carousel
      plugins={[plugin.current]}
      className="my-12 w-11/12 max-w-fit sm:w-10/12 md:w-8/12"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent>
        {carouselItems.map((item, index) => (
          <CarouselItem key={index} className="">
            <div className="p-1">
              <img
                className="h-auto w-full rounded-3xl"
                width="948"
                height="640"
                src={item.src}
                alt={item.alt}
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="hidden sm:inline-flex" />
      <CarouselNext className="hidden sm:inline-flex" />
    </Carousel>
  );
};
