import { codeToHtml } from 'shiki';
import { createSignal, createResource } from 'solid-js';
import Code from './Code';
import Steps from './Steps';

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
  const [textToCopy, setTextToCopy] = createSignal(code);

  const getHtml = async () => {
    //try token code
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

  // fn for copying to clipboard
  const copyToClipboard = () => {
    navigator.clipboard.writeText(textToCopy());
  };

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
            <button
              class='absolute bottom-2 right-2 w-0.5 h-0.5 flex justify-center items-center py-4 px-4 rounded'
              onClick={copyToClipboard}
            >
              <svg
                class='absolute'
                id='Copy_24'
                width='24'
                height='24'
                viewBox='0 0 24 24'
                xmlns='http://www.w3.org/2000/svg'
                xmlns:xlink='http://www.w3.org/1999/xlink'
              >
                <rect
                  width='24'
                  height='24'
                  stroke='none'
                  fill='#000000'
                  opacity='0'
                />

                <g transform='matrix(0.53 0 0 0.53 12 12)'>
                  <path
                    style='stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-dashoffset: 0; stroke-linejoin: miter; stroke-miterlimit: 4; fill: white; fill-rule: nonzero; opacity: 1;'
                    transform=' translate(-24, -24)'
                    d='M 18.5 5 C 15.480226 5 13 7.4802259 13 10.5 L 13 32.5 C 13 35.519774 15.480226 38 18.5 38 L 34.5 38 C 37.519774 38 40 35.519774 40 32.5 L 40 10.5 C 40 7.4802259 37.519774 5 34.5 5 L 18.5 5 z M 18.5 8 L 34.5 8 C 35.898226 8 37 9.1017741 37 10.5 L 37 32.5 C 37 33.898226 35.898226 35 34.5 35 L 18.5 35 C 17.101774 35 16 33.898226 16 32.5 L 16 10.5 C 16 9.1017741 17.101774 8 18.5 8 z M 11 10 L 9.78125 10.8125 C 8.66825 11.5545 8 12.803625 8 14.140625 L 8 33.5 C 8 38.747 12.253 43 17.5 43 L 30.859375 43 C 32.197375 43 33.4465 42.33175 34.1875 41.21875 L 35 40 L 17.5 40 C 13.91 40 11 37.09 11 33.5 L 11 10 z'
                    stroke-linecap='round'
                  />
                </g>
              </svg>
            </button>

            <Code html={formattedCode()} />
          </div>
        </div>

        <div class='w-full'>
          <p class='text-slate-500'>Preview</p>
          <hr />
          {/* <div class="flex min-h-[350px] w-full justify-center items-center bg-slate-100"> */}
          <div class='my-6 flex min-h-[350px] w-full justify-center items-center bg-slate-100 rounded-md'>
            <button title='Copy code' class='code'></button>
            Content
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
