import { createSignal, createEffect, onCleanup } from 'solid-js';
import NavBar from './components/NavBar';
import MainContainer from './containers/MainContainer';
import Footer from './components/Footer';
import Error404 from './Error404';

function App() {
  onCleanup(() => {
    document.documentElement.remove('data-theme');
  });

  return (
    <div class='flex min-h-screen flex-col bg-light bg-[length:5rem] text-font dark:bg-dark'>
      <div class='flex grow flex-col'>
        <NavBar />
        <Error404 />
        {/* <MainContainer /> */}
      </div>
      <Footer />
    </div>
  );
}

export default App;
