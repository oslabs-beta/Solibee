// solidJS
import { createSignal, Show, useContext, createResource } from 'solid-js';
import { codeToHtml } from 'shiki';

//contexts
import { StringRepContext } from '../context/StrRepresentationContext';
import { CompDescriptionsContext } from '../context/CompDescriptions';

// web components
import Step from './Step';
import CodeBoxWithCopy from './CodeBoxWithCopy';
import Menu from './Menu';

// custom components
import Accordion from '../lib/accordion/Accordion';
import InputForm from '../lib/inputForm/InputForm';
import InputFile from '../lib/inputForm/InputFile';
import GenerateOTP from '../lib/inputForm/GenerateOTP';
import InputOTP from '../lib/inputForm/InputOTP';
import ToDoList from '../lib/inputForm/ToDoList';
import DragAndDrop from '../lib/DragAndDrop';
import Search from '../lib/searchButton/Search';
// import Switch from "../lib/switch/Switch";
import SwitchDemo from '../lib/switch/SwitchDemo';

export default function ContentComponent(props) {
  // this takes care of the string representation of the current component's jsx format code
  // converts 'Input Form' to 'InputForm'
  const currentComponent = props.component.replaceAll(' ', '');
  // this is context that wraps the whole app. This context contains the string representation of each Solibee component saved in an obj;
  const { string } = useContext(StringRepContext);
  const { compDescriptions } = useContext(CompDescriptionsContext);
  //initialize an install step which will dynamically change instructions based on prop comp
  const installStepCode = `npx solibee create-${currentComponent}`;

  const configCode = string.tailwindConfigStringsObj[currentComponent];
  const code = string.JsxToString[currentComponent]; // selects the str representation of the component we currently selected ie: Input Form
  const currentDescription = compDescriptions[currentComponent];

  const [formattedCode, setFormattedCode] = createSignal();
  const [textToCopy, setTextToCopy] = createSignal(code);
  const [currentComp, setCurrentComp] = createSignal(props.component); // Input Form
  const [formattedStep, setFormattedStep] = createSignal();
  const [formattedConfigCode, setFormattedConfigCode] = createSignal();

  const shikiTheme = 'dark-plus';

  createResource(() => {
    const getHtml = async () => {
      let codeHtml = await codeToHtml(code, {
        lang: 'jsx',
        theme: shikiTheme,
      });

      let formattedStep = await codeToHtml(installStepCode, {
        lang: 'jsx',
        theme: shikiTheme,
      });

      let formattedConfigCode = await codeToHtml(configCode, {
        lang: 'jsx',
        theme: shikiTheme,
      });

      setFormattedCode(codeHtml);
      setFormattedStep(formattedStep);
      setFormattedConfigCode(formattedConfigCode);

      return codeHtml;
    };
    getHtml();
  });

  return (
    <>
      <Menu />
      <div class='prose w-10/12 max-w-[850px] px-3 backdrop-blur-sm'>
        {/* Component name and description */}
        <header class='mb-4'>
          <h1 class='mb-4 inline-block text-4xl font-bold tracking-tight'>
            {currentComp()}
          </h1>
          <hr />
          <p class='text-subfont mb-5'>
            {/* Dynamic Description */}
            {currentDescription.desc}
          </p>
        </header>

        <div class='w-full text-font'>
          <p class=''>Preview</p>
          <hr />
          <div class='my-6 flex min-h-[350px] w-full items-center justify-center rounded-md bg-slate-100 text-black'>
            <Show when={currentComp() === 'Input Form'}>
              <InputForm />
            </Show>
            <Show when={currentComp() === 'Input File'}>
              <InputFile />
            </Show>
            <Show when={currentComp() === 'Generate OTP'}>
              <GenerateOTP />
            </Show>
            <Show when={currentComp() === 'Input OTP'}>
              <InputOTP />
            </Show>
            <Show when={currentComp() === 'To Do List'}>
              <ToDoList />
            </Show>
            <Show when={currentComp() === 'Switch'}>
              <SwitchDemo />
            </Show>
            <Show when={currentComp() === 'Drag And Drop'}>
              <DragAndDrop items={2} columns={4} showNewColBtn={false} />
            </Show>
            <Show when={currentComp() === 'Accordion'}>
              <Accordion />
            </Show>
            <Show when={currentComp() === 'Search Button'}>
              <Search />
            </Show>
          </div>
        </div>

        <div>
          <p class='mt-3 '>Features</p>
          <hr />
          <ul class='text-subfont mt-3'>
            <For each={currentDescription.feats}>
              {(feat) => (
                <li class='py-1 '>
                  <div class='flex w-full gap-2'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      viewBox='0 0 25 25'
                      width='24'
                      height='24'
                    >
                      <path
                        fill='#faaa3d'
                        d='M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z'
                      />
                    </svg>
                    {feat}
                  </div>
                </li>
              )}
            </For>
            <div class='mt-3'>
              {currentDescription.inBeta && (
                <div class='flex gap-2'>
                  <span aria-label='seedling icon'> 🌱 </span> Component in beta.
                </div>
              )}
            </div>
            <div class='mt-3 '>
              <span class='font-bold'>Accessibility : </span>
              {currentDescription.accessibility}
            </div>
          </ul>
        </div>

        {/* Code and preview */}
        <div class='my-5 flex flex-col space-y-4'>
          <div class='w-full'>
            <p class=''>Code</p>
            <hr />
            <div class='relative my-6 w-full'>
              <CodeBoxWithCopy
                textToCopy={textToCopy()}
                html={formattedCode()}
              />
            </div>
          </div>
        </div>

        {/* Guide, usage, etc. */}
        <div class='my-5 mt-12 flex flex-col'>
          <p class='text-2xl tracking-tight text-h3font' id='installation'>
            Installation Guide
          </p>
          <hr />
          <section class='mb-5'>
            <h2 class='m-2 text-2xl font-bold'>Manual Installation</h2>
            <div
              data-orientation='horizontal'
              class='steps relative z-0 mb-12 ml-4 border-l'
            >
              <Step step='Copy the code from the code section above' />
              <div class='flex-column gap-col-5 m-5'>
                <div class='mb-3'></div>
              </div>

              <Step step='Refer to our Installation page for more information on how to set up the necessary dependencies.' />
              <div class='flex-column gap-col-5 m-5'>
                <div class='mb-3'>
                  <a target='_blank' href='/installation' class='solibee-link'>
                    Click here
                  </a>{' '}
                  to navigate to the Installation Page
                </div>
              </div>
            </div>
          </section>
          {/* Automatic installation instructions */}
          <section class='mb-5'>
            <h2 class='m-2 text-2xl font-bold'>Automatic Installation</h2>
            <div
              data-orientation='horizontal'
              class='steps relative z-0 mb-12 ml-4 border-l'
            >
              <Step step='Add a component to your project via CLI' />
              <div class='flex-column gap-col-5 m-5'>
                <div class='mb-3'>
                  Run the following command in your terminal:
                </div>
                <CodeBoxWithCopy
                  html={formattedStep()}
                  textToCopy={installStepCode}
                />
                <div class='mt-3'>
                  The component should be in your root folder.
                </div>
              </div>

              <Step step='Update/Configure your tailwind.config.js file' />
              <div class='flex-column gap-col-5 m-5'>
                <div class='mb-3'>
                  Add the following to your tailwind.config.js file
                </div>
                <CodeBoxWithCopy
                  html={formattedConfigCode()}
                  textToCopy={installStepCode}
                />
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
