import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/Carousel';
import { carouselPhotos } from '@/lib/photos.ts';
import Autoplay from 'embla-carousel-autoplay';
import { useRef } from 'react';

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
        {carouselPhotos.map((item, index) => (
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
