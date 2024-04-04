import { createSignal, useContext } from 'solid-js';
import name from '../../assets/Solibee-name.png';
import gitLogo from '../../assets/github-mark.png';
import gitLogoWhite from '../../assets/github-mark-white.png';
import sunIcon from '../../assets/sun-svgrepo-com.svg';
import nightIcon from '../../assets/night-svgrepo-com.svg';
import Search from './Search';
import { ComponentContext } from '../context/ComponentContext';


export default function NavBar() {
  const { components } = useContext(ComponentContext);
  const href = `/component/${components[0].toLowerCase().replace(' ', '')}`;

  return (
    <div class="sticky h-16 backdrop-blur-sm top-0 z-50 bg-white-200">
      <div class="text-sm font-medium text-slate-700  top-0 h-5/6 w-full flex justify-between items-center px-5 py-2">
        <div class="flex items-center">
          <img
            class='h-8 mr-6'
            src={name}
            alt='The word SOLIBEE with a bee on top of the letter I'
          />
          <span class="mr-6 mt-1 hover:text-orange-200">
            <a href="/introduction">Docs</a>
          </span>
          <span class="mt-1 hover:text-orange-200">
            <a href={href} >Components</a>
          </span>
        </div>
        <div class='flex items-center mt-1'>
          <Search />
          <a
            class='ml-6'
            target='_blank'
            href='https://github.com/oslabs-beta/solibee/'
          >
            <span class="">
              <img class='h-6' src={gitLogo} alt='GitHub logo' />
            </span>
          </a>
          <img class='h-6 ml-6 ' src={sunIcon} alt='Sun icon' />
        </div>
      </div>
      <hr class='border-1 border-orange-100' />
    </div>
  );
}
