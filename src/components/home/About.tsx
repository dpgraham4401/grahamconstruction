export const About = () => (
  <section className="py-16 sm:py-20">
    <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
      <div className="grid gap-12 lg:grid-cols-3 lg:gap-8">
        <h2 className="text-3xl font-medium tracking-tight sm:text-4xl">About</h2>
        <div className="flex flex-col items-start gap-8 sm:gap-10 lg:col-span-2">
          <p className="text-base text-primary-950/70 dark:text-primary-200/70 sm:text-lg">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis
            suscipit eaque, iste dolor cupiditate blanditiis ratione. Lorem ipsum, dolor sit amet
            consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor
            cupiditate blanditiis ratione. Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis
            suscipit eaque, iste dolor cupiditate.
          </p>
          <a
            href="/about"
            className="inline-flex items-center justify-center rounded-full border border-transparent bg-primary-600 px-5 py-3 text-base font-medium text-white transition hover:bg-primary-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600 dark:bg-primary-400 dark:text-primary-950 dark:hover:bg-primary-300 dark:focus-visible:outline-primary-400"
          >
            Read about us
          </a>
        </div>
      </div>
    </div>
  </section>
);
