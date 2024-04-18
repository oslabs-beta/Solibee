import solibeeLogo from '../../assets/solibee-logo2.png';
import solibeeLogoDark from '../../assets/solibee-logo-light-v2.png';
import solidjsLogo from '../../assets/solid.svg';
import solidjsLogoName from '../../assets/solidjs-light.png';
import tailwindLogo from '../../assets/tailwindcssLogo.svg';
import viteLogo from '../../assets/Vite.js.png';
import jestLogo from '../../assets/jest.svg';
import npmLogo from '../../assets/npm-logo-red.svg';

export default () => {
  return (
    <div class='fixed inset-0 top-40 flex h-full w-full flex-col items-center'>
      <div class='mb-8 flex items-center justify-center'>
        <img
          class='mr-4 block h-36 dark:hidden'
          src={solibeeLogo}
          alt='the solibee logo: a bee in a honeycomb'
        />
        <img
          class='mr-4 hidden h-36 dark:block'
          src={solibeeLogoDark}
          alt='the solibee logo: a bee in a honeycomb'
        />
        <h1 class='font-pacifico text-9xl'>Solibee</h1>
      </div>
      <p class='mb-4 max-w-4xl text-center text-3xl font-bold'>
        Speed up your SolidJS development with open-source, fully tested &
        customizable UI components
      </p>
      <div>
        <a href='/introduction'>
          <button class='ml-2 mr-2 rounded-xl border-4 border-black bg-orange-100 p-2  pl-5 pr-5 text-xl font-bold hover:border-orange-200 hover:bg-orange-200'>
            Get Started
          </button>
        </a>
        <a href='/component/accordion'>
          <button class='ml-2 mr-2 rounded-xl border-4 border-black bg-orange-100 p-2 pl-5  pr-5 text-xl font-bold hover:border-orange-200 hover:bg-orange-200'>
            See an Example
          </button>
        </a>
      </div>
      <p class='mt-32 text-lg font-bold'>
        {' '}
        built open source, with open source tools
      </p>
      <a href=''>
        <img src={solidjsLogoName} class='mt-3 h-16 relative left-2' alt='' />
      </a>
      <div class='flex items-center mt-3 justify-center relative right-1'>
        <a href=''>
          <img src={tailwindLogo} class='mx-4 h-8' alt='' />
        </a>
        <a href=''>
          <img src={npmLogo} class='mx-4 h-5' alt='' />
        </a>
        <a href=''>
          <img src={viteLogo} class='mx-4 h-8' alt='' />
        </a>
        <a href=''>
          <img src={jestLogo} class='mx-4 h-8' alt='' />
        </a>
      </div>
    </div>
  );
};
