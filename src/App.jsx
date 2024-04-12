import NavBar from './components/NavBar';
import MainContainer from './containers/MainContainer';
import Footer from './components/Footer';

function App() {
  // list of the components;
  const components = ['Drawer', 'Kanban Card', 'Input Form'];

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
