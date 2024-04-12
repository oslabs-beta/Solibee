import NavBar from './components/NavBar';
import MainContainer from './containers/MainContainer';
import Footer from './components/Footer';

function App() {
  // list of the components;
  const components = ['Drawer', 'Kanban Card', 'Input Form'];

  return (
    <div class='background flex min-h-screen flex-col justify-between'>
      <div>
        <NavBar />
        <MainContainer />
      </div>
      <Footer />
    </div>
  );
}

export default App;
