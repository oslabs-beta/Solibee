import NavBar from './components/NavBar';
import MainContainer from './containers/MainContainer';
import Footer from './components/Footer';

function App() {
  // list of the components;
  const components = ['Drawer', 'Kanban Card', 'Input Form'];

  return (
    <div class='background flex flex-col min-h-screen'>
      <div class='flex flex-col grow'>
        <NavBar />
        <MainContainer />
      </div>
      <Footer />
    </div>
  );
}

export default App;
