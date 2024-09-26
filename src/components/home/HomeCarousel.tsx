import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/Carousel';
import Autoplay from 'embla-carousel-autoplay';
import { useRef } from 'react';

export const HomeCarousel = () => {
  const plugin = useRef(Autoplay({ delay: 4000, stopOnMouseEnter: true, playOnInit: true }));

  return (
    <Carousel
      plugins={[plugin.current]}
      className="my-12 w-9/12 max-w-fit"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent>
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index} className="">
            <div className="p-1">
              <img
                className="h-auto w-full rounded-3xl"
                width="1280"
                height="640"
                src="/assets/hero.webp"
                alt="Hero picture"
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};
