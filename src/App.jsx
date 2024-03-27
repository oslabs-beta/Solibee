import NavBar from './components/NavBar';
import Menu from './components/Menu';
import ContentContainer from './containers/ContentContainer';

function App() {
  return (
    <>
      <NavBar />
      <div class="flex">
        <Menu />
        <ContentContainer />
      </div>
    </>
  );
}

export default App;
