import type { AnchorHTMLAttributes } from 'react';

export const ContactUsBtn = ({ children, ...rest }: AnchorHTMLAttributes<HTMLAnchorElement>) => (
  <a
    href="/contact"
    className="bg-secondary-500 hover:bg-secondary-700 dark:bg-secondary-400 dark:hover:bg-secondary-300 inline-flex items-center justify-center rounded-full border border-transparent px-5 py-3 text-base font-medium transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600 dark:text-primary-950 dark:focus-visible:outline-primary-400"
    {...rest}
  >
    {children ?? 'Contact Us'}
  </a>
);
