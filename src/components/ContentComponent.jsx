import { codeToHtml } from 'shiki';
import { createSignal, createResource } from 'solid-js';
import { Code, CodeToString } from './Code';
import Steps from './Steps';
import CopyButton from './CopyButton.jsx';
import Footer from './Footer.jsx'

const code = CodeToString;

export default function ContentComponent(props) {
  const [formattedCode, setCodeHtml] = createSignal();
  const [textToCopy, setTextToCopy] = createSignal(code);

  console.log(props) // checking is this component renders for each comp in the Context

  const getHtml = async () => {
    //try token code
    console.log(code);
    let codeHtml = await codeToHtml(code, {
      lang: 'jsx',
      theme: 'rose-pine',
    });
    console.log('I am codeHtml', codeHtml);
    console.log('I am type', typeof codeHtml);

    setCodeHtml(codeHtml);
    return codeHtml;
  };
  getHtml();

  // const [htmlCode] = createResource(getHtml);
  // console.log('I am from createResource', htmlCode);
  // setCodeHtml(htmlCode);


  return (
    <div class='max-w-3xl mx-auto pt-10 xl:max-w-none w-10/12 overflow-auto'>
      {/* Component name and description */}
      <header class=''>
        <h1 class='inline-block text-4xl font-bold tracking-tight'>Drawer</h1>
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
            <Steps/>
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
