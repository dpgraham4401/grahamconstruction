const testimonials = [
  {
    name: 'Rebecca Hayes',
    description: 'Designer',
    image: '/assets/testimonial-1.webp',
    message:
      '“Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita voluptas culpa sapiente alias molestiae. Numquam corrupti in laborum sed rerum et corporis.”',
  },
  {
    name: 'Rosa Spencer',
    description: 'Team Leader',
    image: '/assets/testimonial-2.webp',
    message:
      '“Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita voluptas culpa sapiente alias molestiae. Numquam corrupti in laborum sed rerum et corporis.”',
  },
  {
    name: 'Christina Upton',
    description: 'Manager',
    image: '/assets/testimonial-3.webp',
    message:
      '“Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita voluptas culpa sapiente alias molestiae. Numquam corrupti in laborum sed rerum et corporis.”',
  },
];

export const Testimonials = () => (
  <section className="py-16 sm:py-20">
    <div className="v mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8">
      <div className="flex flex-col items-center gap-12 lg:gap-20">
        <h2 className="mx-auto max-w-xl text-center text-3xl font-medium tracking-tight sm:text-4xl">
          Trusted by the largest companies in the world
        </h2>
        <div className="grid divide-y divide-primary-900/10 dark:divide-primary-300/10 lg:grid-cols-3 lg:divide-x lg:divide-y-0">
          {testimonials.map((testimonial) => (
            <figure
              key={testimonial.name}
              className="mx-auto flex max-w-lg flex-col items-center gap-6 py-8 lg:px-8 lg:py-0"
            >
              <div className="flex flex-row gap-2">
                {[...Array(3)].map((_value, index) => (
                  <svg
                    key={index}
                    className="h-6 w-6 text-primary-600 dark:text-primary-400"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M12.0006 18.26L4.94715 22.2082L6.52248 14.2799L0.587891 8.7918L8.61493 7.84006L12.0006 0.5L15.3862 7.84006L23.4132 8.7918L17.4787 14.2799L19.054 22.2082L12.0006 18.26Z" />
                  </svg>
                ))}
              </div>
              <blockquote className="text-center text-lg italic leading-loose text-primary-950/70 dark:text-primary-200/70">
                <p>{testimonial.message}</p>
              </blockquote>
              <figcaption className="flex flex-col gap-4">
                <img className="mx-auto h-8 w-8 rounded-full" src={testimonial.image} alt="" />
                <div className="text-center">
                  <div className="text-base font-medium">{testimonial.name}</div>
                  <div className="text-sm text-primary-950/70 dark:text-primary-200/70">
                    {testimonial.description}
                  </div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </div>
  </section>
);
