const switchString = `
import { createSignal } from 'solid-js';

function Switch(props) {
  return (
    <div class='justify-center'>
      <div class='relative'>
        <div
          id='switch-container'
          onClick={() => props.toggleMode()}
          class='relative h-7 w-14 cursor-pointer rounded-full bg-gray-300'
          data-testid='switch-container'
        >
          {/* in class at the end:  */}
          <div
            id='switch-btn'
            class={\`absolute top-0 h - 7 w - 7 rounded - full bg - orange - 100 transition duration - 500 ease -in -out  \${ props.darkMode() ? 'right-0 bg-orange-100' : 'left-0' }\`}
          />
        </div>
      </div>
    </div>
  );
}

export default Switch;`;

export default switchString;
