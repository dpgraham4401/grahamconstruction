const services = [
  {
    step: '01',
    name: 'Design',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
  },
  {
    step: '02',
    name: 'Build',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
  },
  {
    step: '03',
    name: 'Refresh',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
  },
];

export const Services = () => (
  <section className="py-16 sm:py-20">
    <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
      <div className="flex flex-col gap-12 sm:gap-16">
        <h2 className="text-3xl font-medium tracking-tight sm:text-4xl">Services</h2>
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
      </div>
    </div>
  </section>
);
