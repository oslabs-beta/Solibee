import { Router, Route } from '@solidjs/router';
import NavBar from './components/NavBar';
import Menu from './components/Menu';
import MainContainer from './containers/MainContainer';


function App() {
  // console.log(Routes);
  return (
    <div class="relative">
      <NavBar />
      <MainContainer/>
    </div>
  );
}

export default App;
