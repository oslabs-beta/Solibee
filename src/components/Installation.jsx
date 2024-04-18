import CodeBoxWithCopy from './CodeBoxWithCopy';
import Step from './Step';
import { codeToHtml } from 'shiki';
import { createSignal, useContext, createResource } from 'solid-js';
import Menu from './Menu';
import { StringRepContext } from '../context/StrRepresentationContext';

export default function Installation() {
  const codeStep1 = 'npx solibee create-[ComponentName]';
  const manualCodeStep1 = 'npm install --save-dev tailwind';
  const manualCodeStep2 = 'npm install --save-dev postcss';
  const manualCodeStep3 = 'npm install --save-dev @tailwindcss/forms';
  const manualCodeStep4 = 'npm install --save-dev autoprefixer';
  
  const { string } = useContext(StringRepContext);

  const codeTailwindConfig = string.tailwindConfigStringsObj.EntireProject;
  const stylesCode = string.tailwindConfigStringsObj.Styles;

  const [formattedCode, setCodeHtml] = createSignal();
  const [formattedConfig, setformattedConfig] = createSignal();
  const [formattedStyles, setformattedStyles] = createSignal();
  const [formattedManualCodeStep1, setformattedManualStep1] = createSignal(); 
  const [formattedManualCodeStep2, setformattedManualStep2] = createSignal(); 
  const [formattedManualCodeStep3, setformattedManualStep3] = createSignal(); 
  const [formattedManualCodeStep4, setformattedManualStep4] = createSignal(); 


  const shikiTheme = 'dark-plus';

  createResource(() => {
    const getHtml = async () => {
      let codeHtml = await codeToHtml(codeStep1, {
        lang: 'jsx',
        theme: shikiTheme,
      });

      let formattedConfig = await codeToHtml(codeTailwindConfig, {
        lang: 'jsx',
        theme: shikiTheme,
      });

      let formattedStyles = await codeToHtml(stylesCode, {
        lang: 'jsx',
        theme: shikiTheme,
      });

      let formattedManualCodeStep1 = await codeToHtml(manualCodeStep1, {
        lang: 'jsx',
        theme: shikiTheme,
      });

      let formattedManualCodeStep2 = await codeToHtml(manualCodeStep2, {
        lang: 'jsx',
        theme: shikiTheme,
      });

      let formattedManualCodeStep3 = await codeToHtml(manualCodeStep3, {
        lang: 'jsx',
        theme: shikiTheme,
      });

       let formattedManualCodeStep4 = await codeToHtml(manualCodeStep4, {
         lang: 'jsx',
         theme: shikiTheme,
       });

      setCodeHtml(codeHtml);
      setformattedConfig(formattedConfig);
      setformattedStyles(formattedStyles);
      setformattedManualStep1(formattedManualCodeStep1);
      setformattedManualStep2(formattedManualCodeStep2);
      setformattedManualStep3(formattedManualCodeStep3);
      setformattedManualStep4(formattedManualCodeStep4);

      // return codeHtml;
    };
    getHtml();
  });

  return (
    <>
      <Menu />
      <article class='prose w-10/12 max-w-[850px] px-3 backdrop-blur-sm'>
        <header>
          <h1 class=' mb-4 border-b text-4xl font-bold'>Installation</h1>
          <p class='mb-5'>How to install and use solibee in your application</p>
        </header>

        {/* Automatic installation instructions */}
        <section class='mb-5'>
          <h2 class='mb-2 border-b text-2xl font-bold'>
            Automatic Installation
          </h2>
          <div class='mb-3'>
            Solibee provides a CLI to help you get started quickly. To use a
            component in your project please follow the steps below:
          </div>
          <div
            data-orientation='horizontal'
            class='steps relative z-0 mb-12 ml-4 border-l'
          >
            <Step step='Add a component to your project via CLI' />
            <div class='flex-column gap-col-5 m-5'>
              <div class='mb-3'>
                Run the following command in your terminal. Substitute
                [ComponentName] with the name of the custom component you would
                like to use. You can see the preview and the full list of
                components{' '}
                <a
                  target='_blank'
                  href='https://solibee.dev/component/accordion'
                  class='solibee-link'
                >
                  here.
                </a>{' '}
                When you run the CLI command above it will automatically install
                all dev dependencies.
              </div>
              <CodeBoxWithCopy html={formattedCode()} textToCopy={codeStep1} />
            </div>
            <Step step='Configure dev dependencies:' />
            <div class='flex-column gap-col-5 m-5'>
              <div class='mb-3'>
                <ul class='list-inside list-disc'>
                  <li class='py-2'>
                    If you don't have Tailwind.config and PostCSS.config files
                    in your root directory, bring Tailwind.config and
                    PostCSS.config files from Solibee directory to your root
                    directory.{' '}
                  </li>
                  <li class='py-2'>
                    If you have existing Tailwind.config and PostCSS.config
                    files in your root directory, integrate them with those
                    installed from the solibee package.{' '}
                  </li>
                </ul>
              </div>
            </div>

            <Step step='Configure TailwindCSS styles.' />
            <div class='flex-column gap-col-5 m-5'>
              <div class='mb-3'>Add the following global styles</div>
              <CodeBoxWithCopy
                html={formattedStyles()}
                textToCopy={stylesCode}
              />
            </div>
            <Step step={`You're ready to go!`} />
          </div>
        </section>

        {/* Manual installation instructions */}
        <section>
          <div>
            <h2 class='mb-2 border-b text-2xl font-bold'>
              Manual Installation
            </h2>
            <div
              data-orientation='horizontal'
              class='steps relative z-0 mb-12 ml-4 border-l'
            >
              <Step step='Install Dev Dependencies' />
              <div class='m-5'>
                Our components are styled using Tailwind CSS. You need to
                install four dev dependencies in your project.
                <div class='py-2'>
                  <CodeBoxWithCopy
                    html={formattedManualCodeStep1()}
                    textToCopy={manualCodeStep1}
                  />
                </div>
                <div class='py-2'>
                  <CodeBoxWithCopy
                    html={formattedManualCodeStep2()}
                    textToCopy={manualCodeStep2}
                  />
                </div>
                <div class='py-2'>
                  <CodeBoxWithCopy
                    html={formattedManualCodeStep3()}
                    textToCopy={manualCodeStep3}
                  />
                </div>
                <div class='py-2'>
                  <CodeBoxWithCopy
                    html={formattedManualCodeStep4()}
                    textToCopy={manualCodeStep4}
                  />
                </div>
              </div>

              <Step step='Configure a tailwind.config.js file' />
              <div class='flex-column gap-col-5 m-5'>
                <div class='mb-3'>
                  Here's what our tailwind config file looks like!
                </div>
                <CodeBoxWithCopy
                  html={formattedConfig()}
                  textToCopy={codeTailwindConfig}
                />
              </div>

              <Step step='Configure Tailwind styles' />
              <div class='flex-column gap-col-5 m-5'>
                <div class='mb-3'>
                  Add the following to your global CSS styles file.
                </div>
                <CodeBoxWithCopy
                  html={formattedStyles()}
                  textToCopy={stylesCode}
                />
              </div>

              <Step step='Copy the code for the component you chose. Create a file in your working directory and paste the code you copied.' />

              <Step step={`You're ready to go!`} />
            </div>
          </div>
        </section>
      </article>
    </>
  );
}
