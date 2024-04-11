import { createSignal } from 'solid-js';

function Switch() {
	const [darkMode, setDarkMode] = createSignal(false);

	const toggleMode = () => {
		setDarkMode(!darkMode());
	};

	return (
		<div id='switch-container' onClick={toggleMode} class='relative w-60 h-30 bg-gray-300 rounded-full cursor-pointer'>
			{/* in class at the end: left: ${(props) => (props.dark ? "calc(100% - 30px" : "0")} */}
			<div id='switch-btn' class={`absolute top-0 w-30 h-30 bg-white rounded-full transition duration-300 ease-in-out ${darkMode() ? 'left-0' : 'left-30'}`} dark={darkMode()}>Testing Switch</div>
		</div>
	)
}

export default Switch;