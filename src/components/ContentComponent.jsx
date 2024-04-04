import { createSignal, createResource, Show } from 'solid-js';
import { codeToHtml } from 'shiki';

import { useContext } from 'solid-js';
import { StringRepContext } from '../context/StrRepresentationContext';
// use the following 
// const { components } = useContext(ComponentContext);

import { Code, CodeToString } from './Code';
import Steps from './Steps';
import CopyButton from './CopyButton.jsx';
import Footer from './Footer.jsx'

// custom components:
import InputForm from '../lib/inputForm/InputForm';
import InputFile from '../lib/inputForm/InputFile';
import GenerateOTP from '../lib/inputForm/GenerateOTP';
import InputOTP from '../lib/inputForm/InputOTP';
import { ToDoList } from '../lib/inputForm/ToDoList';




export default function ContentComponent(props) {

  // this takes care of the string representation of the current component's jsx format code
  const currentComponent = props.component.replaceAll(' ', ''); // converts 'Input Form' to 'InputForm'
  const { string } = useContext(StringRepContext); // this is context that wraps the whole app. This context contains the string representation of each Solibee component saved in an obj;
  const code = string[currentComponent]; // selects the str representation of the component we currently selected ie: Input Form

  const [formattedCode, setCodeHtml] = createSignal();
  const [textToCopy, setTextToCopy] = createSignal(code);
  const [currentComp, setCurrentComp] = createSignal(props.component); // Input Form
  

  console.log(props) // checking is this component renders for each comp in the Context
  

  const getHtml = async () => {
    console.log(code);
    let codeHtml = await codeToHtml(code, {
      lang: 'jsx',
      theme: 'rose-pine-dawn',
    });
    setCodeHtml(codeHtml);
    console.log(codeHtml);
    return codeHtml;
  };
  getHtml();



  return (
    // previously existed: xl:max-w-none
    <div class='prose max-w-[800px] min-w-0 mx-auto w-10/12 bg-white/[0.9] overflow-auto'>
      {/* Component name and description */}
      <div class="mb-4 max-h-8 flex items-center text-sm">
        <div class="">Components</div>
        <svg class="h-4 w-4">
          <path d="M6.1584 3.13508C6.35985 2.94621 6.67627 2.95642 6.86514 3.15788L10.6151 7.15788C10.7954 7.3502 10.7954 7.64949 10.6151 7.84182L6.86514 11.8418C6.67627 12.0433 6.35985 12.0535 6.1584 11.8646C5.95694 11.6757 5.94673 11.3593 6.1356 11.1579L9.565 7.49985L6.1356 3.84182C5.94673 3.64036 5.95694 3.32394 6.1584 3.13508Z"></path>
        </svg>
        {/* <div>Drawer</div> */}
      </div>
      <header class=''>
        <h1 class='inline-block text-4xl font-bold tracking-tight'>{currentComp()}</h1>
        <hr />
        <p class='text-slate-500'>
          A vertically stacked set of interactive headings that each reveal a
          section of content.
        </p>
      </header>

      <div class='w-full'>
          <p class='text-slate-500'>Preview</p>
          <hr />
          <div class='my-6 flex min-h-[350px] w-full justify-center items-center bg-slate-100 rounded-md'>
            <Show
              when={currentComp()==='Input Form'}
            >
              <InputForm/>
            </Show>
            <Show
              when={currentComp()==='Input File'}
            >
              <InputFile/>
            </Show>
            <Show
              when={currentComp()==='Generate OTP'}
            >
              <GenerateOTP/>
            </Show>
            <Show
              when={currentComp()==='Input OTP'}
            >
              <InputOTP/>
            </Show>
            <Show
              when={currentComp()==='To Do List'}
            >
              <ToDoList/>
            </Show>

          </div>
        </div>

      {/* Code and preview */}
      <div class='my-5 flex flex-col space-y-4'>
        {/* class="mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 relative rounded-md border" */}
        <div class='w-full'>
          <p class='text-slate-500'>Code</p>
          <hr />
          <div class='my-6 relative w-full'>
            <CopyButton textToCopy={textToCopy()} />
            <Code html={formattedCode()} />
          </div>
        </div>
      </div>

      {/* Guide, usage, etc. */}
      <div class='my-5 flex flex-col mt-12'>
        <p class='text-slate-500 text-2xl tracking-tight' id='installation'>
          Installation Guide
        </p>
        <hr />
        <Steps />
      </div>
      {/* <div class='my-5 flex flex-col mt-12'>
        <p class='text-slate-500 text-2xl tracking-tight' id='Usage'>
          Usage
        </p>
        <hr />
        <div>
          <p />
        </div>
      </div>
      <div class='my-5 flex flex-col mt-12'>
        <p class='text-slate-500 text-2xl tracking-tight' id='installation'>
          Test
        </p>
        <hr />
        <div>
          <p />
        </div>
      </div> */}
    </div>
  );
}
