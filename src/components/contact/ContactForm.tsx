import emmaMajestic from '@/assets/img/emma_majestic.webp?url';

export const ContactForm = () => (
  <section className="py-16 sm:py-20">
    <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
      <div className="grid gap-12 lg:grid-cols-2 lg:gap-8">
        <div className="flex flex-col gap-4 sm:gap-6">
          <h1 className="text-3xl font-medium tracking-tight sm:text-4xl">Let's work together</h1>
          <p className="text-primary-950/70 dark:text-primary-200/70 max-w-lg text-lg sm:text-xl">
            We'd love to learn more about you and what we can build together.
          </p>
          <div>
            <img
              src={emmaMajestic}
              alt="Graham Constructions head or PR, Emma."
              className="rounded-3xl"
            />
          </div>
        </div>
        <div className="lg:mt-32">
          <form
            action="https://formsubmit.co/73ee075b416e0b36f581ee570dc11ed3"
            method="POST"
            className="mt-3 flex flex-col gap-y-6"
          >
            {/*Full name input */}
            <div>
              <label htmlFor="full-name" className="sr-only">
                Full name
              </label>
              <input
                type="text"
                name="full-name"
                id="full-name"
                autoComplete="name"
                className="hover:ring-primary-600 focus:ring-primary-600 dark:hover:ring-primary-400 dark:focus:ring-primary-400 bg-primary-50 dark:bg-primary-950 ring-primary-900/40 dark:ring-primary-200/40 placeholder:text-primary-950/60 dark:placeholder:text-primary-200/60 block w-full appearance-none rounded-md border-0 px-4 py-4 text-base ring-1 transition focus:ring-2 focus:outline-hidden"
                placeholder="Full name"
              />
            </div>

            {/*Email input */}
            <div>
              <label htmlFor="email" className="sr-only">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                autoComplete="email"
                className="hover:ring-primary-600 focus:ring-primary-600 dark:hover:ring-primary-400 dark:focus:ring-primary-400 bg-primary-50 dark:bg-primary-950 ring-primary-900/40 dark:ring-primary-200/40 placeholder:text-primary-950/60 dark:placeholder:text-primary-200/60 block w-full appearance-none rounded-md border-0 px-4 py-4 text-base ring-1 transition focus:ring-2 focus:outline-hidden"
                placeholder="Email"
              />
            </div>

            {/*Message textarea */}
            <div>
              <label htmlFor="message" className="sr-only">
                Message
              </label>
              <textarea
                name="message"
                id="message"
                rows={3}
                className="hover:ring-primary-600 focus:ring-primary-600 dark:hover:ring-primary-400 dark:focus:ring-primary-400 bg-primary-50 dark:bg-primary-950 ring-primary-900/40 dark:ring-primary-200/40 placeholder:text-primary-950/60 dark:placeholder:text-primary-200/60 block w-full appearance-none rounded-md border-0 px-4 py-4 text-base ring-1 transition focus:ring-2 focus:outline-hidden"
                placeholder="Message"
              ></textarea>
            </div>

            <div>
              <button
                className="bg-primary-600 dark:bg-primary-400 hover:bg-primary-700 dark:hover:bg-primary-300 focus-visible:outline-primary-600 dark:focus-visible:outline-primary-400 dark:text-primary-950 inline-flex items-center justify-center rounded-full border border-transparent px-5 py-3 text-base font-medium text-white transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                type="submit"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
);
