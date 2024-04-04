import { createSignal, createResource } from 'solid-js';

export default function Steps() {

  // const text = document.getElementById('copy-text').innerText;
  const [textToCopy, setTextToCopy] = createSignal();
  // select the txt from element after elements render; 

  const copyToClipboard = () => {
    navigator.clipboard.writeText(textToCopy());
  };

  return (
    <>
      {/* First Step */}
      <div
        data-orientation='horizontal'
        class='steps relative mb-12 ml-4 border-l z-0'
      >
        <p
          class='step-counter font-heading mt-8 text-xl font-semibold tracking-tight
  relative pl-10 before:z-10 before:content-[counter(step)] before:absolute before:left-0 before:flex before:items-center before:justify-center before:w-[calc(1.375rem+1px)] before:h-[calc(1.375rem+1px)] before:text-[0.9rem]
before:font-bold before:text-slate-700 before:rounded-md before:shadow-md before:ring-2 before:ring-slate-900/5 before:z-20'
        >
          Install the following dependencies:
        </p>
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
          <div class="contents [&>pre]:overflow-auto [&>pre]:rounded-md [&>pre]:py-2 [&>pre]:pl-2 [&>pre]:pr-12 [&>pre]:md:pr-2">
            {/* <pre class='mb-4 mt-6 ml-10 max-h-[650px] overflow-x-auto rounded-lg border bg-zinc-950 py-4 dark:bg-slate-100'>
            <span class='mx-6'>Hello</span>
            <div class='copy-tag mx-6' onclick='copyText()'>
              Click to Copy
            </div>
            <textarea id='copy-text' class='mx-6'>
              Text to copy
            </textarea>
          </pre>
          <button class='inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 z-10 h-6 w-6 text-zinc-50 hover:bg-zinc-700 hover:text-zinc-50 absolute right-4 top-4'>
            <svg class='h-3 w-3 bg-slate-500'>SVG</svg>
          </button> */}
            <pre class="shiki rose-pine" style="background-color:#191724;color:#e0def4" tabindex="0">
              <code>
                <span class="line" id='copy-text'>
                  <span style="color:#31748F">npm install</span>
                  <span style="color:#EBBCBA"> Search</span>
                </span>
              </code>
            </pre>
          </div>
        </div>
        {/* Second step */}
        <p
          class='step-counter font-heading mt-8 text-xl font-semibold tracking-tight
          relative pl-10 before:z-10 before:content-[counter(step)] before:absolute before:left-0 before:flex before:items-center before:justify-center before:w-[calc(1.375rem+1px)] before:h-[calc(1.375rem+1px)] before:text-[0.9rem]
before:font-bold before:text-slate-700 before:rounded-md before:shadow-md before:ring-2 before:ring-slate-900/5 before:z-20'
        >
          Copy and paste the following code into your project
        </p>
        <div>
          {console.log(typeof (textToCopy()))}
        </div>

        {/* Third step */}
        <p
          class='step-counter font-heading mt-8 text-xl font-semibold tracking-tight
          relative pl-10 before:z-10 before:content-[counter(step)] before:absolute before:left-0 before:flex before:items-center before:justify-center before:w-[calc(1.375rem+1px)] before:h-[calc(1.375rem+1px)] before:text-[0.9rem]
before:font-bold before:text-slate-700 before:rounded-md before:shadow-md before:ring-2 before:ring-slate-900/5 before:z-20'
        >
          Update the import paths to match your project setup
        </p>
        <div></div>
      </div>
    </>
  );
}
