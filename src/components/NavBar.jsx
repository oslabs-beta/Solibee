import { createSignal, useContext } from "solid-js";
import solibeeLogo from "../../assets/Solibee-name.png";
import gitLogo from "../../assets/github-mark.png";
import gitLogoWhite from "../../assets/github-mark-white.png";
import sunIcon from "../../assets/sun-svgrepo-com.svg";
import nightIcon from "../../assets/night-svgrepo-com.svg";
import Search from "./Search";
import { ComponentContext } from "../context/ComponentContext";
import Switch from "../lib/switch/Switch";

export default function NavBar() {
  const { components } = useContext(ComponentContext);
  const href = `/component/${components[0].toLowerCase().replaceAll(" ", "")}`;

  return (
    <div class="bg-white-200 sticky top-0 z-50 h-16 backdrop-blur-sm">
      <div class="flex h-5/6  w-full items-center justify-between px-5 py-2 text-sm font-medium text-slate-700">
        <div class="flex items-center">
          <img
            class="mr-6 h-8"
            src={solibeeLogo}
            alt="The word SOLIBEE with a bee on top of the letter I"
          />
          <span class="mr-6 mt-1 hover:text-orange-200">
            <a href="/introduction">Docs</a>
          </span>
          <span class="mt-1 hover:text-orange-200">
            <a href={href}>Components</a>
          </span>
        </div>
        <div class="mt-1 flex items-center">
          <Search />
          <a
            class="ml-6"
            target="_blank"
            href="https://github.com/oslabs-beta/solibee/"
          >
            <span class="">
              <img class="h-6" src={gitLogo} alt="GitHub logo" />
            </span>
          </a>
          <img
            class="ml-6 h-6 hover:text-orange-200"
            src={sunIcon}
            alt="Sun icon"
          />
          <Switch />
        </div>
      </div>
      <hr class="border-1 border-orange-100" />
    </div>
  );
}
