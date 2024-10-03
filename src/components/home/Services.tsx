const services = [
  {
    step: '01',
    name: 'Design',
    description:
      "With 30+ years of experience, we can help you design your dream home. We'll work with you to create a plan that fits your needs.",
  },
  {
    step: '02',
    name: 'Build',
    description:
      "Make a new addition to your home or build from the ground up. We'll guide you from concept, to permits, to completion.",
  },
  {
    step: '03',
    name: 'Remodel',
    description:
      'Modify your existing home to give a fresh look or fit your needs. We can help you with the entire process.',
  },
];

export const Services = () => (
  <section>
    <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
      <div className="flex flex-col gap-12 sm:gap-16">
        <h2 className="text-3xl font-medium tracking-tight sm:text-4xl">
          You have the vision, we have a way to get you there
        </h2>
        <div className="grid gap-8 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.name}
              className="flex flex-col gap-12 rounded-3xl bg-primary-500/10 px-6 py-8 dark:bg-primary-400/10"
            >
              <p className="text-sm">{service.step}</p>
              <div className="flex flex-col gap-4">
                <h3 className="text-xl font-medium">{service.name}</h3>
                <p className="text-base text-primary-950/70 dark:text-primary-200/70 sm:text-lg">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div></div>
      </div>
    </div>
  </section>
);
