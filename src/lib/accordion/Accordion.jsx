import { For } from 'solid-js';
import { createStore } from 'solid-js/store';

export default function Accordion() {

  const [data, setData] = createStore([
    {
      question: 'What is Solibee?',
      answer:
        'Solibee is an open-source project simply styled, and accessible SolidJS components and a bunch of other things and another one and another',
    },
    { question: 'Who is on the team?', answer: 'Our team is made up of 5 engineers: Bongi Sibanda, Congke Zhao, Lillian Tenn, Marselena Romero, and Neul Seol' },
    { question: 'I am question?', answer: 'I am answer' },
  ]);

  const [activeID, setActiveID] = createStore(Array(data.length).fill(false));

  function toggleAccordion(index) {
    setActiveID(activeID.map((_, i) => (i === index ? !activeID[i] : false)));
  }

  return (
    <div
      class='flex w-[500px] flex-col rounded-md shadow-md p-4 transition-all'
      id='accordion-collapse'
    >
      <div class='border border-orange-100 rounded-md'>
        <For each={data}>
          {(obj, i) => {
            const isLastIndex = i() === data.length - 1; 
            return (
              <div
                id='wrapper'
                class={`${isLastIndex ? '' : 'border-b'}  border-orange-100`}
                classList={{}}
              >
                <h2 id={`accordion-collapse-heading-${i}`}>
                  <button
                    type='button'
                    class='flex w-full items-center justify-between gap-10 px-1 py-2 pr-2 text-sm font-bold hover:bg-orange-200/[0.1]'
                    data-accordion-target={`#accordion-collapse-body-${i}`}
                    aria-expanded={activeID[i()] ? true : false}
                    aria-controls={`accordion-collapse-body-${i}`}
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
                <Show when={activeID[i()] === true} fallback={<></>}>
                  {/* <div
                    class='overflow-hidden'
                    id={`accordion-collapse-body-${i}`}
                    aria-labelledby={`accordion-collapse-heading-${i}`}
                  >
                    <p class='px-1 text-sm'>{obj.answer}</p>
                  </div> */}
                  <div
                    class={`transition-height overflow-hidden duration-150 ${
                      activeID[i()] ? 'h-auto' : 'h-0'
                    }`}
                    id={`accordion-collapse-body-${i}`}
                    aria-labelledby={`accordion-collapse-heading-${i}`}
                  >
                    <p class='px-1 text-sm'>{obj.answer}</p>
                  </div>
                </Show>
              </div>
            );
          }}
        </For>
      </div>
    </div>
  );
}


