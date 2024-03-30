import { Router, Route } from '@solidjs/router';
import NavBar from './components/NavBar';
import MainContainer from './containers/MainContainer';
import Background from '../assets/494-[Converted].png';
import Footer from './components/Footer';

function App() {
  // console.log(Routes);
  return (
    <div class="relative bg-cover bg-center bg-fixed"
      style="background-image: url('../assets/494-[Converted].png')">
      <NavBar />
      <MainContainer />
      <Footer/>
    </div>
  );
}

export default App;
