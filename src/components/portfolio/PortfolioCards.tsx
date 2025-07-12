import { FadeIn } from '@/components/ui/FadeIn.tsx';
import { allGrahamPhotos, type HeroImage } from '@/lib/photos.ts';

const splitIntoColumns = (arr: HeroImage[], colCount: number): HeroImage[][] => {
  const result: HeroImage[][] = [];
  for (let i = 0; i < colCount; i++) {
    result.push([]);
  }
  arr.forEach((item, index) => {
    result[index % colCount].push(item);
  });
  return result;
};

export const PortfolioCards = () => {
  const photos = splitIntoColumns(allGrahamPhotos, 3);

  return (
    <section className="py-16 sm:py-20">
      <div className="flex flex-col gap-2 lg:gap-4">
        <div className="grid gap-0.5 sm:grid-cols-2 lg:grid-cols-3">
          {photos.map((column, colIndex) => (
            <div key={colIndex} className={`space-y-8 ${colIndex === 1 && 'lg:mt-16'}`}>
              {column.map((value) => {
                return (
                  <div key={value.src} className={`flex flex-col gap-6 rounded-3xl px-3 py-4`}>
                    <div className="flex flex-col gap-2">
                      <FadeIn>
                        <img src={value.src} alt={value.alt} className="rounded-3xl" />
                      </FadeIn>
                    </div>
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
