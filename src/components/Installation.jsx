import CodeBoxWithCopy from './CodeBoxWithCopy';
import Step from './Step';
import { codeToHtml } from 'shiki';
import { createSignal } from 'solid-js';

//TO DO: Create a different file for the codeStrings; 
export default function Installation(props){

  const codeStep1 = 'npx solibee add componentName';
  const codeTailwindConfig = `/** @type {import('tailwindcss').Config} */
  module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'yellow': {
          100: '#fcef46',
          200: '#ffd231',
        },
        'orange': {
          100: '#faaa3d',
          200: '#f47833'
        },
        'black': '#191818'
      },
      animation: {
        wiggle: 'wiggle 1s ease-in-out infinite',
      }
    },
  },
  plugins: [],
};`
  const stylesCode = `@tailwind base;
@tailwind components;
@tailwind utilities;`

  const [formattedCode, setCodeHtml] = createSignal();
  const [formattedConfig, setformattedConfig] = createSignal();
  const [formattedStyles, setformattedStyles] = createSignal();
  const [textToCopy, setTextToCopy] = createSignal();

  console.log(props) // checking is this component renders for each comp in the Context

  const getHtml = async () => {
    //try token code
    
    let codeHtml = await codeToHtml(codeStep1, {
      lang: 'jsx',
      theme: 'dark-plus',
    });

    let formattedConfig = await codeToHtml(codeTailwindConfig, {
      lang: 'jsx',
      theme: 'dark-plus',
    });

    let formattedStyles = await codeToHtml(stylesCode, {
      lang: 'jsx',
      theme: 'dark-plus',
    });
  
    setCodeHtml(codeHtml);
    setformattedConfig(formattedConfig);
    setformattedStyles(formattedStyles)
    return codeHtml;
  };
  getHtml()


  return (
    // prose max-w-[800px] p-5 mx-auto w-10/12 bg-white/[0.9]
    <div class="prose max-w-3xl mx-auto p-5 max-w-[800px] w-10/12 bg-white/[0.9]">
      <header>
        <h1 class=" border-b font-bold text-4xl mb-4">Installation</h1>
        <p class="text-lg my-5">How to install and use solibee in your application</p>
      </header>

      {/* Automatic installation instructions */}
      <section class = 'mb-5'>

        <h2 class='border-b mb-2 text-2xl font-bold'>Automatic Installation</h2>
        <div  data-orientation='horizontal' class='steps relative mb-12 ml-4 border-l z-0'>
          
           <Step step = 'Add a component to your project via CLI'/>
          <div class='flex-column gap-col-5 m-5'>
           <div class='mb-3'>Solibee provides a CLI to help you get started quickly. To use a component, for example the Input Form, run the following command in your terminal.</div>
          <CodeBoxWithCopy html = {formattedCode()}/>
          </div>

           <Step step = 'Configure a tailwind.config.js file'/>
          <div class='flex-column gap-col-5 m-5'>
            <div class='mb-3'>Here's what our tailwind config file looks like!</div>
            <CodeBoxWithCopy html = {formattedConfig()}/> 
          </div>
      
        </div>
      
      </section>

      {/* Manual installation instructions */}
      <section>
        <div>
          <h2 class='border-b mb-2 text-2xl font-bold'>Manual Installation</h2>
          <div  data-orientation='horizontal' class='steps relative mb-12 ml-4 border-l z-0'>
          
          <Step step = 'Install Tailwind'/>
          <div class='m-5'>
            Our components are styled using Tailwind CSS. You need to install Tailwind CSS in your project.
          </div>

           <Step step = 'Configure a tailwind.config.js file'/>
          <div class='flex-column gap-col-5 m-5'>
            <div class='mb-3'>Here's what our tailwind config file looks like!</div>
            <CodeBoxWithCopy html = {formattedConfig()}/> 
          </div>

          <Step step = 'Configure styles'/>
          <div class='flex-column gap-col-5 m-5'>
            <div class='mb-3'>Add the following to your global css styles file.</div>
            <CodeBoxWithCopy html = {formattedStyles()}/> 
          </div>

          <Step step = 'Copy the code for the component you chose'/>

          <Step step = {`You're ready to go!`}/>
          
           </div>
        </div>
      </section>
    </div>
  );
}