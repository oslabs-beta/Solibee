import logo from "../../assets/Solibee-logo.png";
import name from "../../assets/Solibee-name.png";
import gitLogo from "../../assets/github-mark.png";

export default function NavBar() {
  return (
    <div class="flex gap-1 space-x-20 space-y-1">
      {/* //logo //name //docs //components //search //login //github */}
      
      <span>
        <img
          src={name}
          alt="The word SOLIBEE with a bee on top of the letter I"
          width="100"
        />
      </span>
      <span>Docs</span>
      <span>Components</span>
      <span>Search</span>
      <span>
        <img src={gitLogo} alt="" width="30" href="https://github.com/oslabs-beta/solibee/"/>
      </span>
      <span></span>
    </div>
  );
}
