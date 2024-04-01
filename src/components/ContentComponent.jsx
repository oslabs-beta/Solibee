import { codeToHtml } from "shiki";
import { createSignal, createResource } from "solid-js";
import Code from "./Code";

const code = `function Search() {
  return (
    <div class="w-40">
      <button>
        <img class="h-7 px-1" src={search} alt="search icon" />
        Search ...
      </button>
    </div>
  );
}`;

export default function ContentComponent() {

  const [formattedCode, setCodeHtml] = createSignal();
  
  const getHtml = async () => {
    //try token code 
    let codeHtml = await codeToHtml(code, {
      lang: "jsx",
      theme: 'rose-pine',
    });
    console.log("I am codeHtml", codeHtml);
    console.log("I am type", typeof codeHtml);
    
    setCodeHtml(codeHtml);
    return codeHtml;
  };
  getHtml();

  // const [htmlCode] = createResource(getHtml);
  // console.log('I am from createResource', htmlCode);
  // setCodeHtml(htmlCode);

  return (
    <div class="max-w-3xl mx-auto pt-10 xl:max-w-none w-10/12 overflow-auto">
      {/* Component name and description */}
      <header class="">
        <h1 class="inline-block text-4xl font-bold tracking-tight">
          Accordion
        </h1>
        <hr />
        <p class="text-slate-500">
          A vertically stacked set of interactive headings that each reveal a
          section of content.
        </p>
      </header>

      {/* Code and preview */}
      <div class="my-5 flex flex-col space-y-4">
        {/* class="mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 relative rounded-md border" */}
        <div class="w-full">
          <p class="text-slate-500">Code</p>
          <hr />
          <div class="w-full">
            <button title="Copy code" class="left-3"></button>
            <Code html = {formattedCode()}/>
          </div>
        </div>

        <div class="w-full">
          <p class="text-slate-500">Preview</p>
          <hr />
          {/* <div class="flex min-h-[350px] w-full justify-center items-center bg-slate-100"> */}
          <div class="my-6 flex min-h-[350px] w-full justify-center items-center bg-slate-100 rounded-md">
          <button title="Copy code" class="code"></button>
            Content
          </div>
        </div>
      </div>

      {/* Guide, usage, etc. */}
      <div class="my-5 flex flex-col mt-12">
        <p class="text-slate-500 text-2xl tracking-tight" id="installation">
          Installation Guide
        </p>
        <hr />
        <div class="steps mb-12 ml-4 border-l pl-8 [counter-reset:step]">
          <p class="font-heading mt-8 scroll-m-20 text-xl font-semibold tracking-tight">
            Run the following command
          </p>
          <p class="font-heading mt-8 scroll-m-20 text-xl font-semibold tracking-tight">
            step2
          </p>
          <p class="font-heading mt-8 scroll-m-20 text-xl font-semibold tracking-tight">
            step3
          </p>
        </div>
      </div>
      <div class="my-5 flex flex-col mt-12">
        <p class="text-slate-500 text-2xl tracking-tight" id="Usage">
          Usage
        </p>
        <hr />
        <div>
          <p />
        </div>
      </div>
      <div class="my-5 flex flex-col mt-12">
        <p class="text-slate-500 text-2xl tracking-tight" id="installation">
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
