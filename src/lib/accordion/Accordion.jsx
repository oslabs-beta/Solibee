import { For } from 'solid-js';
import { createStore } from 'solid-js/store';
import { createEffect } from 'solid-js';

export default function Accordion() {
  const data = [
    {
      question: 'What is Solibee?',
      answer:
        'Solibee is an open-source collection of simply styled, tested and accessible SolidJS components.',
    },
    {
      question: 'Accessible? Tell me more...',
      answer:
        'Yes our components are accessible. They adhere to WAI_ARIA design patterns',
    },
    {
      question: 'Who is on the team?',
      answer:
        'Our team is made up of 5 engineers: Bongi Sibanda, Congke Zhao, Lillian Tenn, Marselena Sequoia, and Neul Seo',
    },
    {
      question: "I'm excited, how do I install the components?",
      answer:
        'You can install each component either manually or via CLI. Visit our installation page for more details.',
    },
  ];

  const [activeID, setActiveID] = createStore(Array(data.length).fill(false));

  function toggleAccordion(index) {
    setActiveID(activeID.map((_, i) => (i === index ? !activeID[i] : false)));
  }

  return (
    <div
      class='flex w-[500px] flex-col rounded-md  p-4'
      id='accordion-collapse'
    >
      <div class='rounded-md border border-orange-100'>
        <For each={data}>
          {(obj, i) => {
            return (
              <div
                id='wrapper'
                class={`${i() === data.length - 1 ? '' : 'border-b'}  border-orange-100`}
                data-testid='wrapper'
              >
                <h2 id={`accordion-collapse-heading-${i()}`}>
                  <button
                    type='button'
                    class='flex w-full items-center justify-between gap-10 px-2 py-3 text-sm font-bold hover:bg-orange-200/[0.1]'
                    data-accordion-target={`#accordion-collapse-body-${i()}`}
                    aria-expanded={activeID[i()]}
                    aria-controls={`accordion-collapse-body-${i()}`}
                    onClick={() => toggleAccordion(i())}
                  >
                    <span>{obj.question}</span>
                    <svg
                      class={`size-2 shrink-0 ${activeID[i()] ? 'rotate-180' : ''} transition-transform`}
                      aria-hidden='true'
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 10 6'
                    >
                      <path
                        stroke='currentColor'
                        stroke-linecap='round'
                        stroke-linejoin='round'
                        stroke-width='2'
                        d='M9 5 5 1 1 5'
                      />
                    </svg>
                  </button>
                </h2>

                <div
                  class={` overflow-hidden  ${
                    activeID[i()]
                      ? 'h-full  animate-accordion-down opacity-100'
                      : 'h-0  animate-accordion-up opacity-0'
                  }`}
                  id={`accordion-collapse-body-${i()}`}
                  aria-labelledby={`accordion-collapse-heading-${i()}`}
                  data-testid='hidden'
                >
                  <p class='p-2 text-sm'>{obj.answer}</p>
                </div>
              </div>
            );
          }}
        </For>
      </div>
    </div>
  );
}
