import { createSignal } from "solid-js";

// eslint-disable-next-line solid/no-destructure
function Switch({ darkMode, toggleMode }) {
  return (
    <div class="justify-center">
      <div class="relative">
        <div
          id="switch-container"
          onClick={toggleMode}
          class="relative h-7 w-14 cursor-pointer rounded-full bg-gray-300"
        >
          {/* in class at the end:  */}
          <div
            id="switch-btn"
            class={`absolute top-0 h-7 w-7 rounded-full bg-white transition duration-500 ease-in-out  ${darkMode() ? "right-0 bg-slate-500" : "left-0"}`}
          />
        </div>
      </div>
    </div>
  );
}

export default Switch;
