import solibeeLogo from '../../assets/solibee-logo2.png';

export default () => {
  return (
    <div class='flex h-full flex-col items-center justify-center'>
      <div class='mb-8 flex items-center justify-center'>
        <img
          class='mr-4 h-36'
          src={solibeeLogo}
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
        <a href='/component/draganddrop'>
          <button class='ml-2 mr-2 rounded-xl border-4 border-black bg-orange-100 p-2 pl-5  pr-5 text-xl font-bold hover:border-orange-200 hover:bg-orange-200'>
            See an Example
          </button>
        </a>
      </div>
    </div>
  );
};
