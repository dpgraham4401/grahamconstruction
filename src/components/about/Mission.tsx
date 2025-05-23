import portrait from '@/assets/img/portrait.webp?url';

const years =
  new Date(new Date().valueOf() - new Date('1985/01/01').valueOf()).getFullYear() - 1970;
const stats = [
  {
    name: 'Years',
    value: `${years.toString()}+`,
  },
  {
    name: 'Projects',
    value: '122+',
  },
];

export const Mission = () => (
  <section className="py-16 sm:py-20">
    <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
      <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
        <img
          className="mx-auto h-auto w-full max-w-xl rounded-3xl"
          width="576"
          height="864"
          src={portrait}
          alt="Our experts working together"
        />
        <div className="flex flex-col gap-10">
          {/* Mission description */}
          <div className="space-y-8 sm:space-y-12">
            <h2 className="text-3xl font-medium tracking-tight sm:text-4xl">Our mission</h2>
            <div className="space-y-6">
              <p className="text-primary-950/70 dark:text-primary-200/70 text-base sm:text-lg">
                Our mission is simple:{' '}
                <em className="font-semibold">
                  make the process of building your dream home as easy and stress-free as possible
                </em>
                .
              </p>
              <p className="text-primary-950/70 dark:text-primary-200/70 text-base sm:text-lg">
                Remodeling your home can seem daunting; between the designing, planning, budgeting,
                and construction, it's easy to get overwhelmed. That's where we come in. We'll work
                with you every step of the way to ensure your vision comes to life.
              </p>
              <p className="text-primary-950/70 dark:text-primary-200/70 text-base sm:text-lg">
                Whether you're looking to remodel a bathroom, or add an entire second story to your
                home, we've got you covered.
              </p>
            </div>
          </div>

          {/*Stats */}
          <dl className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {stats.map((stat) => (
              <div
                key={stat.name}
                className="border-primary-900/10 dark:border-primary-300/10 rounded-3xl border p-6"
              >
                <dt className="text-base">{stat.name}</dt>
                <dd className="text-3xl font-medium tracking-tight">{stat.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  </section>
);
