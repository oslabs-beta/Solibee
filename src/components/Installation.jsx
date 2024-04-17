import CodeBoxWithCopy from './CodeBoxWithCopy';
import Step from './Step';
import { codeToHtml } from 'shiki';
import { createSignal, useContext, createResource } from 'solid-js';
import Menu from './Menu';
import { StringRepContext } from '../context/StrRepresentationContext';

export default function Installation() {
  const codeStep1 = 'npx solibee create-InputForm';
  const { string } = useContext(StringRepContext);

  const codeTailwindConfig = string.tailwindConfigStringsObj.EntireProject;
  const stylesCode = string.tailwindConfigStringsObj.Styles;

  const [formattedCode, setCodeHtml] = createSignal();
  const [formattedConfig, setformattedConfig] = createSignal();
  const [formattedStyles, setformattedStyles] = createSignal();

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

      setCodeHtml(codeHtml);
      setformattedConfig(formattedConfig);
      setformattedStyles(formattedStyles);
      return codeHtml;
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
          <div
            data-orientation='horizontal'
            class='steps relative z-0 mb-12 ml-4 border-l'
          >
            <Step step='Add a component to your project via CLI' />
            <div class='flex-column gap-col-5 m-5'>
              <div class='mb-3'>
                Solibee provides a CLI to help you get started quickly. To
                install a component into your project, for example the Input
                Form, run the following command in your terminal.
              </div>
              <CodeBoxWithCopy html={formattedCode()} textToCopy={codeStep1} />
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
              <Step step='Install Tailwind' />
              <div class='m-5'>
                Our components are styled using Tailwind CSS. You need to
                install Tailwind CSS in your project.
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

              <Step step='Configure styles' />
              <div class='flex-column gap-col-5 m-5'>
                <div class='mb-3'>
                  Add the following to your global css styles file.
                </div>
                <CodeBoxWithCopy
                  html={formattedStyles()}
                  textToCopy={stylesCode}
                />
              </div>

              <Step step='Copy the code for the component you chose' />

              <Step step={`You're ready to go!`} />
            </div>
          </div>
        </section>
      </article>
    </>
  );
}
