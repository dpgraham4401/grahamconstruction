import patioLawther from '/assets/graham_co_photos/GR3_0011.jpg?url';
import patioLawther2 from '/assets/graham_co_photos/GR3_0021.jpg?url';
import patioLawther3 from '/assets/graham_co_photos/GR3_0031.jpg?url';
import livingRoomLawther1 from '/assets/graham_co_photos/GR3_0056.jpg?url';
import officeLawther1 from '/assets/graham_co_photos/GR3_0111.jpg?url';
import libraryImage from '/assets/graham_co_photos/GR3_1244.jpg?url';
import dresserCondo1 from '/assets/graham_co_photos/GR3_1306.jpg?url';
import garageImage from '/assets/graham_co_photos/GR3_1487.jpg?url';
import kitchenCondo1 from '/assets/graham_co_photos/GR3_1526.jpg?url';
import apartmentBedroomImage from '/assets/graham_co_photos/GR3_1639.jpg?url';
import kitchenDenImage from '/assets/graham_co_photos/GR3_6152.jpg?url';
import billiardsImage from '/assets/graham_co_photos/GR3_6197.jpg?url';

export interface HeroImage {
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
  {
    src: patioLawther,
    alt: 'Back patio viewed towards the house.',
  },
  {
    src: patioLawther2,
    alt: 'Back patio viewed towards the house.',
  },
  {
    src: patioLawther3,
    alt: 'Back patio viewed towards the house.',
  },
  {
    src: livingRoomLawther1,
    alt: 'Back patio viewed towards the house.',
  },
  {
    src: officeLawther1,
    alt: 'Back patio viewed towards the house.',
  },
  {
    src: dresserCondo1,
    alt: 'Back patio viewed towards the house.',
  },
  {
    src: kitchenCondo1,
    alt: 'Back patio viewed towards the house.',
  },
];
