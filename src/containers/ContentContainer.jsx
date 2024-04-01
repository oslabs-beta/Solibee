import Steps from './Steps';

export default function ContentContainer() {
  return (
    <div class="max-w-3xl mx-auto pt-10 xl:max-w-none w-10/12">
      {/* Component name and description */}
      <header class="">
        <h1 class="inline-block text-4xl font-bold tracking-tight">Acordion</h1>
        <hr></hr>
        <p class="text-slate-500">
          A vertically stacked set of interactive headings that each reveal a
          section of content.
        </p>
      </header>

      {/* Code and preview */}
      <div class="my-5 flex space-x-4">
        {/* class="mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 relative rounded-md border" */}
        <div class="w-1/2 my-5">
          <p class="text-slate-500">Code</p>
          <hr></hr>
          <div class="flex min-h-[350px] w-full justify-center items-center bg-slate-100">
            Content
          </div>
        </div>

        <div class="w-1/2 my-5">
          <p class="text-slate-500">Preview</p>
          <hr></hr>
          <div class="flex min-h-[350px] w-full justify-center items-center bg-slate-100">
            Content
          </div>
        </div>
      </div>

      {/* Guide, usage, etc. */}
      <div class="my-5 flex flex-col mt-12">
        <p class="text-slate-500 text-2xl tracking-tight" id="installation">
          Installation Guide
        </p>
        <hr></hr>
        {/* Steps */}
        <Steps />
      </div>

      {/* Usage */}
      <div class="my-5 flex flex-col mt-12">
        <p class="text-slate-500 text-2xl tracking-tight" id="Usage">
          Usage
        </p>
        <hr></hr>
        <div>
          <p></p>
        </div>
      </div>
      <div class="my-5 flex flex-col mt-12">
        <p class="text-slate-500 text-2xl tracking-tight" id="installation">
          Test
        </p>
        <hr></hr>
        <div>
          <p></p>
        </div>
      </div>
    </div>
  );
}
