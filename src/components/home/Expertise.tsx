import { useState } from 'react';

const features = [
  {
    id: 'expertise-1',
    name: 'Digital Experience Platforms',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
  },
  {
    id: 'expertise-2',
    name: 'Web & Mobile Development',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
  },
  {
    id: 'expertise-3',
    name: 'Serverless Computing Platforms',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
  },
  {
    id: 'expertise-4',
    name: 'Build & Test Automation Tools',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
  },
  {
    id: 'expertise-5',
    name: 'Artificial Intelligence',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
  },
  {
    id: 'expertise-6',
    name: 'Full project support',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
  },
];

export const Expertise = () => {
  const [selected, setSelected] = useState<number | null>(null);

  const toggle = (index: number) => {
    console.log('toggle', index);
    setSelected(selected === index ? null : index);
  };

  return (
    <section className="py-16 sm:py-20">
      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="grid gap-12 lg:grid-cols-3 lg:gap-8">
          <h2 className="text-3xl font-medium tracking-tight sm:text-4xl">Expertise</h2>
          <div className="lg:col-span-2">
            <dl className="-mt-3">
              {features.map((feature, index) => (
                <div
                  key={feature.id}
                  className={`rounded-3xl px-4 pb-6 transition-all duration-300 ${
                    selected === index ? 'bg-primary-500/10 dark:bg-primary-400/10' : ''
                  }`}
                >
                  <dt
                    className={`border-b text-lg transition-all ${
                      selected === index || selected === index + 1
                        ? 'border-transparent'
                        : 'border-primary-900/10 dark:border-primary-300/10'
                    }`}
                  >
                    <button
                      type="button"
                      className="group block w-full py-6 text-left transition-all focus-visible:outline-none"
                      aria-controls={feature.id}
                      onClick={() => toggle(index)}
                      aria-expanded={selected === index}
                    >
                      <div className="flex items-center justify-between rounded-3xl group-focus-visible:outline group-focus-visible:outline-2 group-focus-visible:outline-offset-2 group-focus-visible:outline-primary-950 dark:group-focus-visible:outline-primary-200">
                        <span className="font-medium">{feature.name}</span>
                        <span className="ml-6 flex h-7 items-center">
                          <svg
                            className={`h-6 w-6 transform text-primary-600 transition duration-200 ease-in-out dark:text-primary-400 ${
                              selected === index ? '-rotate-180' : 'rotate-0'
                            }`}
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            aria-hidden="true"
                          >
                            <path d="M11.9997 13.1714L16.9495 8.22168L18.3637 9.63589L11.9997 15.9999L5.63574 9.63589L7.04996 8.22168L11.9997 13.1714Z" />
                          </svg>
                        </span>
                      </div>
                    </button>
                  </dt>
                  <dd
                    className={`overflow-hidden px-6 pt-0 transition-all duration-500 ease-in-out ${selected === index ? 'max-h-40' : 'max-h-0'}`}
                    id={feature.id}
                  >
                    <p className="text-base text-primary-950/70 dark:text-primary-200/70">
                      {feature.description}
                    </p>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
};
