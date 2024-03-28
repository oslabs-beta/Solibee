import name from '../../assets/Solibee-name.png';
import gitLogo from '../../assets/github-mark.png';
import Search from './Search';

export default function NavBar() {
  return (
    <div class="fixed top-0 left-0 right-0 flex gap-1 space-x-20 space-y-1">
      <span>
        <img
          src={name}
          alt="The word SOLIBEE with a bee on top of the letter I"
          width="100"
        />
      </span>
      <span>Docs</span>
      <span>Components</span>
      <span>
        <input type="search" name="search" id="search" />
      </span>
      <span>
        <a target="_blank" href="https://github.com/oslabs-beta/solibee/">
          <img src={gitLogo} alt="" width="30" />
        </a>
      </span>
      <span>
        <Search />
      </span>
    </div>
  );
}
