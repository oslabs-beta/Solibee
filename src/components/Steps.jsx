import { createSignal, createResource } from 'solid-js';
import Step from './Step';
import CopyButton from './CopyButton';
import CodeBoxWithCopy from './CodeBoxWithCopy';

export default function Steps() {
  
  const codeString = 'npx solibee add component';

  // const text = document.getElementById('copy-text').innerText;
  const [textToCopy, setTextToCopy] = createSignal();
 
  // select the txt from element after elements render; 
  const copyToClipboard = () => {
    navigator.clipboard.writeText(textToCopy());
  };

    const [formattedCode, setCodeHtml] = createSignal();

  const getHtml = async () => {
    //try token code
    
    let codeHtml = await codeToHtml(codeStep1, {
      lang: 'jsx',
      theme: 'dark-plus',
    });
  
    setCodeHtml(codeHtml);
  };
  getHtml()

  return (
    <>
      {/* First Step */}
      <div  data-orientation='horizontal' class='steps relative mb-12 ml-4 border-l z-0'>
          
        <Step step = 'Install via CLI'/>
        <div class='flex-column gap-col-5 m-5'>
          <p class='mb-3'>Solibee provides a CLI to help you get started quickly. To use a component, for example the Input Form, run the following command in your terminal.</p>
          <CodeBoxWithCopy html = {formattedCode()}/>
        </div>
      
      </div>
    </>
  );
}
