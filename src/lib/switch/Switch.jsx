import { createSignal } from "solid-js";

function Switch() {
  const [darkMode, setDarkMode] = createSignal(false);

  const toggleMode = () => {
    setDarkMode(!darkMode());
  };

  return (
    <div class="justify-center">
      <div class="relative">
        {darkMode() ? (
          <span class="absolute top-10 w-20 text-sm">Dark Mode</span>
        ) : (
          <span class="absolute top-10 w-20 text-sm">Light Mode</span>
        )}
        <div
          id="switch-container"
          onClick={toggleMode}
          class="relative h-7 w-14 cursor-pointer rounded-full bg-gray-300"
        >
          {/* in class at the end:  */}
          <div
            id="switch-btn"
            class={`absolute top-0 h-7 w-7 rounded-full bg-white transition duration-300 ease-in-out ${darkMode() ? "right-0" : "left-0"}`}
          />
        </div>
      </div>
    </div>
  );
}

export default Switch;
