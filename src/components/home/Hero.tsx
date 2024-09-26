import { ContactUsBtn } from '@/components/ContactUsBtn/ContactUsBtn';
import { HomeCarousel } from '@/components/home/HomeCarousel';

export const Hero = () => {
  return (
    <section className="justify-center py-8 sm:pt-12">
      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="flex flex-col gap-16">
          <div className="flex flex-col items-start gap-8 sm:gap-10">
            <div className="flex max-w-xl flex-col items-start gap-4 sm:gap-6">
              <h1 className="text-4xl font-medium tracking-tight sm:text-5xl lg:text-6xl">
                Bring your dream home to life
              </h1>
              <p className="text-lg text-primary-950/70 dark:text-primary-200/70 sm:text-xl">
                Remodeling your home should be fun, not stressful. We have the expertise to guide
                you through the entire process.
              </p>
            </div>
            <ContactUsBtn>Get started today</ContactUsBtn>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <HomeCarousel />
      </div>
    </section>
  );
};
