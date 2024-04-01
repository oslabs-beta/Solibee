export default function Steps() {
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

        <div>
          <pre class='mb-4 mt-6 ml-10 max-h-[650px] overflow-x-auto rounded-lg border bg-zinc-950 py-4 dark:bg-slate-100'>
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
          </button>
        </div>

        {/* Second step */}
        <p
          class='step-counter font-heading mt-8 text-xl font-semibold tracking-tight
          relative pl-10 before:z-10 before:content-[counter(step)] before:absolute before:left-0 before:flex before:items-center before:justify-center before:w-[calc(1.375rem+1px)] before:h-[calc(1.375rem+1px)] before:text-[0.9rem]
before:font-bold before:text-slate-700 before:rounded-md before:shadow-md before:ring-2 before:ring-slate-900/5 before:z-20'
        >
          Copy and paste the following code into your project
        </p>
        <div></div>

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
