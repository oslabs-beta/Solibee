import { codeToHtml } from 'shiki';
import { createSignal, createResource } from 'solid-js';
import { Code, CodeToString } from './Code';
import Steps from './Steps';
import CopyButton from './CopyButton.jsx';
import Footer from './Footer.jsx'

// input form
import FileUpload from '../lib/inputForm/inputFile.jsx'

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
    // previously existed: xl:max-w-none
    <div class='prose max-w-[800px] min-w-0 mt-10 mx-auto w-10/12 bg-white/[0.9] overflow-auto'>
      {/* Component name and description */}
      <div class="mb-4 max-h-8 flex items-center text-sm">
        <div class="">Components</div>
        <svg class="h-4 w-4">
          <path d="M6.1584 3.13508C6.35985 2.94621 6.67627 2.95642 6.86514 3.15788L10.6151 7.15788C10.7954 7.3502 10.7954 7.64949 10.6151 7.84182L6.86514 11.8418C6.67627 12.0433 6.35985 12.0535 6.1584 11.8646C5.95694 11.6757 5.94673 11.3593 6.1356 11.1579L9.565 7.49985L6.1356 3.84182C5.94673 3.64036 5.95694 3.32394 6.1584 3.13508Z"></path>
        </svg>
        {/* <div>Drawer</div> */}
      </div>
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
            <FileUpload/>
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
