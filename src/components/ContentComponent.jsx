import { createSignal, createResource } from 'solid-js';
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
// import InputForm from '../lib/inputForm/InputForm';
// import FileUpload from '../lib/inputForm/InputFile'




export default function ContentComponent(props) {

  // this takes care of the string representation of the current component's jsx format code
  const currentComponent = props.component.replaceAll(' ', ''); // converts 'Input Form' to 'InputForm'
  const { string } = useContext(StringRepContext); // this is context that wraps the whole app. This context contains the string representation of each Solibee component saved in an obj;
  const code = string[currentComponent]; // selects the str representation of the component we currently selected ie: Input Form

  const [formattedCode, setCodeHtml] = createSignal();
  const [textToCopy, setTextToCopy] = createSignal(code);
  const [currentComp, setCurrentComp] = createSignal(props.component);
  

  console.log(props) // checking is this component renders for each comp in the Context
  

  const getHtml = async () => {
    console.log(code);
    let codeHtml = await codeToHtml(code, {
      lang: 'jsx',
      theme: 'rose-pine',
    });
    setCodeHtml(codeHtml);
    return codeHtml;
  };
  getHtml();



  return (
    <div class='max-w-3xl mx-auto pt-10 xl:max-w-none w-10/12 overflow-auto'>
      {/* Component name and description */}
      <header class=''>
        <h1 class='inline-block text-4xl font-bold tracking-tight'>{currentComp()}</h1>
        <hr />
        <p class='text-slate-500'>
          A vertically stacked set of interactive headings that each reveal a
          section of content.
        </p>
      </header>

      {/* Code and preview */}
      <div class='my-5 flex flex-col space-y-4'>
        {/* class="mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 relative rounded-md border" */}
        <div class='w-full'>
          <p class='text-slate-500'>Code</p>
          <hr />
          <div class='relative w-full'>
            <CopyButton textToCopy={textToCopy()} />
            <Code html={formattedCode()} />
          </div>
        </div>

        <div class='w-full'>
          <p class='text-slate-500'>Preview</p>
          <hr />
          <div class='my-6 flex min-h-[350px] w-full justify-center items-center bg-slate-100 rounded-md'>
            < Code />
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
      <div class='my-5 flex flex-col mt-12'>
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
      </div>
    </div>
  );
}
