import { FadeIn } from '@/components/ui/FadeIn.tsx';

const values = [
  [
    {
      ref: '01',
      name: 'Trustworthiness',
      description:
        "You need to trust the contractor you're letting into your home. We work with subcontractors who we've known for years and trust.",
    },
    {
      ref: '02',
      name: 'Communication',
      description:
        'We understand that this is not your area of expertise. That’s why we make sure to keep you in the loop every step of the way. Have a question? Just ask.',
    },
  ],
  [
    {
      ref: '03',
      name: 'Quality',
      description:
        "We've been in the business for over 30 years and we take pride in our work. We'll make sure you're happy with the final product.",
    },
    {
      ref: '04',
      name: 'Transparency',
      description:
        "They say you can have it fast, cheap or good, but not all three. We'll work with you so save money where we can, fast where you need it, and good where it matters.",
    },
  ],
];

export const Values = () => (
  <section className="py-16 sm:py-20">
    <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
      <div className="flex flex-col gap-8 lg:gap-12">
        <h2 className="text-3xl font-medium tracking-tight sm:text-4xl">Our Values</h2>
        <div className="grid gap-8 lg:grid-cols-2">
          {values.map((column, colIndex) => (
            <div key={colIndex} className={`space-y-8 ${colIndex === 1 && 'lg:mt-16'}`}>
              {column.map((value, rowIndex) => {
                const isAccented = (colIndex * 2 + rowIndex) % 2 === 0;
                const textColor = isAccented ? 'text-primary-950/70' : 'dark:text-primary-200/70';
                return (
                  <div
                    key={value.ref}
                    className={`flex flex-col gap-12 rounded-3xl ${isAccented ? 'bg-secondary-500/10 dark:bg-primary-200/80' : 'bg-primary-500/10 dark:bg-primary-400/10'} px-6 py-8`}
                  >
                    <FadeIn>
                      <p className={`${textColor} text-sm`}>{value.ref}</p>
                      <div className="flex flex-col gap-4">
                        <h3 className={`${textColor} text-xl font-medium`}>{value.name}</h3>
                        <p className={`text-base ${textColor} sm:text-lg`}>{value.description}</p>
                      </div>
                    </FadeIn>
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);
