import { createSignal, createEffect, onCleanup } from 'solid-js';
import NavBar from './components/NavBar';
import MainContainer from './containers/MainContainer';
import Footer from './components/Footer';

function App() {
  // const [isDarkTheme, setIsDarkTheme] = createSignal(false);
  // // toggle dark theme
  // const toggleTheme = () => {
  //   setIsDarkTheme(prevState => !prevState);
  // };

  // createEffect(() => {
  //   if (isDarkTheme()) {
  //     document.documentElement.setAttribute("data-theme", "dark");
  //   } else {
  //     document.documentElement.removeAttribute("data-theme");
  //   }
  // });

  onCleanup(() => {
    document.documentElement.remove('data-theme');
  });

  return (
    <div class='background flex min-h-screen flex-col'>
      <div class='flex grow flex-col'>
        <NavBar />
        <MainContainer />
      </div>
      <Footer />
    </div>
  );
}

export default App;
