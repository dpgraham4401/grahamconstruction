import libraryImage from '/assets/graham_co_photos/GR3_1244.jpg?url';
import garageImage from '/assets/graham_co_photos/GR3_1487.jpg?url';
import apartmentBedroomImage from '/assets/graham_co_photos/GR3_1639.jpg?url';
import kitchenDenImage from '/assets/graham_co_photos/GR3_6152.jpg?url';
import billiardsImage from '/assets/graham_co_photos/GR3_6197.jpg?url';

interface HeroImage {
  src: string;
  alt: string;
}

export const carouselPhotos: HeroImage[] = [
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
    src: apartmentBedroomImage,
    alt: 'a long bedroom with a fireplace, sliding door closets, and a private bathroom',
  },
  {
    src: billiardsImage,
    alt: 'a billiards room with a pool table, bar, and arcade games',
  },
];

export const allGrahamPhotos: HeroImage[] = [
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
    src: apartmentBedroomImage,
    alt: 'a long bedroom with a fireplace, sliding door closets, and a private bathroom',
  },
  {
    src: billiardsImage,
    alt: 'a billiards room with a pool table, bar, and arcade games',
  },
];
