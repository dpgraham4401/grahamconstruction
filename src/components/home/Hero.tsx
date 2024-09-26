import { PicCarousel } from './PicCarousel';

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
                Remodeling your home should be fun, not stressful.
              </p>
            </div>
            <a
              href="/services"
              className="inline-flex items-center justify-center rounded-full border border-transparent bg-primary-600 px-5 py-3 text-base font-medium text-white transition hover:bg-primary-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600 dark:bg-primary-400 dark:text-primary-950 dark:hover:bg-primary-300 dark:focus-visible:outline-primary-400"
            >
              Get started
            </a>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <PicCarousel />
      </div>
    </section>
  );
};
