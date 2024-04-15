import { createSignal, createEffect, onCleanup } from "solid-js";
import NavBar from "./components/NavBar";
import MainContainer from "./containers/MainContainer";
import Footer from "./components/Footer";

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
    document.documentElement.remove("data-theme");
  });

  return (
    <div
      class="text-font bg-background relative min-h-screen bg-cover bg-fixed bg-center"
      style="background-image: url('../assets/494-[Converted].png')"
    >
      <NavBar />
      <MainContainer />
      <Footer />
    </div>
  );
}

export default App;
