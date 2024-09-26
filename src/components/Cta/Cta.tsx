import { ContactUsBtn } from '@/components/ContactUsBtn/ContactUsBtn.tsx';

interface Props {
  title: string;
  description: string;
  buttonText?: string;
}

/**
 * Cta (Call to Action) component.
 * @constructor
 */
export const Cta = ({ title, buttonText, description }: Props) => (
  <section className="my-16 sm:my-20">
    <div className="mx-auto max-w-2xl px-4 text-center sm:px-6 lg:max-w-7xl lg:px-8">
      <div className="flex flex-col items-center gap-8 rounded-3xl bg-primary-500/10 px-5 py-16 dark:bg-primary-400/10 sm:gap-10">
        <div className="flex flex-col gap-4 sm:gap-6">
          <h2 className="mx-auto max-w-sm text-3xl font-medium tracking-tight sm:text-4xl">
            {title}
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-primary-950/70 dark:text-primary-200/70">
            {description}
          </p>
        </div>
        <ContactUsBtn>{buttonText}</ContactUsBtn>
      </div>
    </div>
  </section>
);
