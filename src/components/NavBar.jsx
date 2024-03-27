import name from '../../assets/Solibee-name.png';
import gitLogo from '../../assets/github-mark.png';
import gitLogoWhite from '../../assets/github-mark-white.png';
import sunIcon from '../../assets/sun-svgrepo-com.svg';
import nightIcon from '../../assets/night-svgrepo-com.svg';
import Search from './Search';

export default function NavBar() {
  return (
    <>
      <div class="text-sm sticky top-0 w-full flex justify-between items-center px-5 py-2">
        <div class="flex items-center">
          <img
            class="h-8 mr-6"
            src={name}
            alt="The word SOLIBEE with a bee on top of the letter I"
          />
          <span class="mr-6">Docs</span>
          <span>Components</span>
        </div>
        <div class="flex items-center">
          <Search />
          <a
            class="ml-6"
            target="_blank"
            href="https://github.com/oslabs-beta/solibee/"
          >
            <span>
              <img class="h-6 " src={gitLogo} alt="GitHub logo" />
            </span>
          </a>

          <img class="h-6 ml-6 " src={sunIcon} alt="Sun icon" />
        </div>
      </div>
      <hr class="bg-yellow" />
    </>
  );
}
