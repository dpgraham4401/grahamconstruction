const questions = [
  {
    id: 'faq-2',
    title: 'How can I upgrade, downgrade, or cancel my plan?',
    answer:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, voluptas ipsa quia excepturi, quibusdam natus exercitationem sapiente tempore labore voluptatem.',
  },
  {
    id: 'faq-3',
    title: "What does 'lifetime access' mean exactly?",
    answer:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, voluptas ipsa quia excepturi, quibusdam natus exercitationem sapiente tempore labore voluptatem.',
  },
  {
    id: 'faq-4',
    title: "What does 'free updates' mean exactly?",
    answer:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, voluptas ipsa quia excepturi, quibusdam natus exercitationem sapiente tempore labore voluptatem.',
  },
  {
    id: 'faq-5',
    title: 'Do you offer a free trial?',
    answer:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, voluptas ipsa quia excepturi, quibusdam natus exercitationem sapiente tempore labore voluptatem.',
  },
  {
    id: 'faq-6',
    title: 'How can I request support?',
    answer:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, voluptas ipsa quia excepturi, quibusdam natus exercitationem sapiente tempore labore voluptatem.',
  },
];

export const Faq = () => (
  <section className="py-16 sm:py-20">
    <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
      <div className="grid gap-12 lg:grid-cols-3 lg:gap-8">
        <div>
          <h2 className="text-3xl font-medium tracking-tight sm:text-4xl">
            Frequently asked questions
          </h2>
        </div>
        <div className="lg:col-span-2">
          <dl
            className="-mt-3"
            x-data="{ selected: null, toggle(value) { this.selected = this.selected === value ? null : value } }"
          >
            {questions.map((question, index) => (
              <div
                className="rounded-3xl px-4 transition"
                x-data={`{ id: ${index}, get isOpen() { return this.id === this.selected }, get isNextOpen() { return (this.id + 1) === this.selected } }`}
                x-bind:className="{ 'bg-primary-500/10 dark:bg-primary-400/10': isOpen }"
              >
                <dt
                  className="border-b text-lg transition"
                  x-cloak
                  x-bind:className="{ 'border-transparent': isOpen || isNextOpen, 'border-primary-900/10 dark:border-primary-300/10': !(isOpen || isNextOpen) }"
                >
                  <button
                    type="button"
                    className="group block w-full py-6 text-left transition focus-visible:outline-none"
                    aria-controls={question.id}
                    x-on:click="toggle(id)"
                    aria-expanded="false"
                    x-bind:aria-expanded="isOpen.toString()"
                  >
                    <div className="flex items-center justify-between rounded-3xl group-focus-visible:outline group-focus-visible:outline-2 group-focus-visible:outline-offset-2 group-focus-visible:outline-primary-950 dark:group-focus-visible:outline-primary-200">
                      <span className="font-medium">{question.title}</span>
                      <span className="ml-6 flex h-7 items-center">
                        <svg
                          className="h-6 w-6 rotate-0 transform text-primary-600 transition duration-200 ease-in-out dark:text-primary-400"
                          x-bind:className="{ '-rotate-180': isOpen, 'rotate-0': !isOpen }"
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
                <dd className="pb-6 pr-6" id={question.id} x-show="isOpen" x-cloak x-collapse>
                  <p className="text-base text-primary-950/70 dark:text-primary-200/70">
                    {question.answer}
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
