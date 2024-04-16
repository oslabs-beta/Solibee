// solidJS
import { useContext, createEffect, createSignal } from 'solid-js';
import { ComponentContext } from '../context/ComponentContext';

// assets
import solibeeLogo from '../../assets/solibee-logo2.png';
import gitLogo from '../../assets/github-mark.png';
import gitLogoWhite from '../../assets/github-mark-white.png';
import sunIcon from '../../assets/sun-svgrepo-com.svg';
import nightIcon from '../../assets/night-svgrepo-com.svg';

export default function NavBar() {
  const { components } = useContext(ComponentContext);
  const href = `/component/${components[0].toLowerCase().replaceAll(' ', '')}`;
  const [isDarkMode, setIsDarkMode] = createSignal(false);

  function handleClick() {
    setIsDarkMode(!isDarkMode()); // Toggle dark mode
  }

  // Effect to update icon and theme based on dark mode state
  createEffect(() => {
    const modeIcon = document.getElementById('mode-icon');
    const githubIcon = document.getElementById('github-icon');

    if (isDarkMode()) {
      document.documentElement.setAttribute('data-theme', 'dark');
      modeIcon.src = nightIcon;
      modeIcon.alt = 'Night icon';
      githubIcon.src = gitLogoWhite;
    } else {
      document.documentElement.removeAttribute('data-theme');
      modeIcon.src = sunIcon;
      modeIcon.alt = 'Sun icon';
      githubIcon.src = gitLogo;
    }
  });

  // function handleClick() {
  //   const isDarkMode = document.documentElement.hasAttribute('data-theme');
  //   const modeIcon = document.getElementById('mode-icon');
  //   const githubIcon = document.getElementById('github-icon');

  //   if (isDarkMode) {
  //     document.documentElement.removeAttribute('data-theme');
  //     modeIcon.src = sunIcon;
  //     modeIcon.alt = 'Sun icon';
  //     githubIcon.src = gitLogo;
  //   } else {
  //     document.documentElement.setAttribute('data-theme', 'dark');
  //     modeIcon.src = nightIcon;
  //     modeIcon.alt = 'Night icon';
  //     githubIcon.src = gitLogoWhite;
  //   }

  //   modeIcon.removeEventListener('click', handleClick);
  //   modeIcon.addEventListener('click', handleClick);
  // }

  // modeIcon.removeEventListener('click', handleClick);
  // modeIcon.addEventListener('click', handleClick);

  return (
    <header class='bg-white-200 sticky top-0 z-50 flex h-16 w-full items-center justify-between border-b border-orange-100 px-5 py-2 text-sm font-medium text-slate-700 backdrop-blur-sm'>
      <div class='flex items-center'>
        <a
          href='/'
          class='mr-10 flex items-center justify-center font-pacifico text-2xl'
        >
          <img
            class='mr-2 h-8'
            src={solibeeLogo}
            alt='the solibee logo: a bee in a honeycomb'
          />
          Solibee
        </a>
        <span class='mr-6 mt-1 hover:text-orange-200'>
          <a href='/introduction'>Docs</a>
        </span>
        <span class='mt-1 hover:text-orange-200'>
          <a href={href}>Components</a>
        </span>
      </div>
      <div id='icons' class='mt-1 flex items-center'>
        <a
          class='ml-6'
          target='_blank'
          href='https://github.com/oslabs-beta/solibee/'
        >
          <span class=''>
            <img
              id='github-icon'
              class='h-6'
              src={isDarkMode() ? gitLogo : gitLogoWhite}
              alt='GitHub logo'
            />
          </span>
        </a>

        <img
          id='mode-icon'
          class='ml-6 h-6 '
          src={isDarkMode() ? nightIcon : sunIcon}
          alt='Sun icon'
          onClick={handleClick}
        />
      </div>
    </header>
  );
}
