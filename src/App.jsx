import { createSignal, createEffect, onCleanup } from 'solid-js';
import NavBar from './components/NavBar';
import MainContainer from './containers/MainContainer';
import Footer from './components/Footer';

function App() {
  onCleanup(() => {
    document.documentElement.remove('data-theme');
  });

  return (
    <div class='flex min-h-screen flex-col bg-background text-font'>
      <div class='flex grow flex-col'>
        <NavBar />
        <MainContainer />
      </div>
      <Footer />
    </div>
  );
}

export default App;
