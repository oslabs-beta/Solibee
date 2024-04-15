import { createSignal } from 'solid-js';
import Switch from './Switch';

export default function SwitchDemo() {
  const [darkMode, setDarkMode] = createSignal(false);

  const toggleMode = () => {
    setDarkMode(!darkMode());
  };

  return (
    <div>
      <Switch darkMode={darkMode} toggleMode={toggleMode} />
      <div>
        {darkMode() ? (
          <span class='top-10 w-20 text-sm'>Dark Mode</span>
        ) : (
          <span class='top-10 w-20 text-sm'>Light Mode</span>
        )}
      </div>
    </div>
  );
}
