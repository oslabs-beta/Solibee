import { onCleanup } from "solid-js";
import NavBar from "./components/NavBar";
import MainContainer from "./containers/MainContainer";
import Footer from "./components/Footer";

function App() {
  // // Set theme in localStorage
  // localStorage.setItem("theme", "light");

  // // Retrieve theme from localStorage
  // const selectedTheme = localStorage.getItem("theme") || "light";

  // // Apply theme to the body
  // document.body.classList.add(selectedTheme);

  // // Clean up theme class on component unmount
  // onCleanup(() => {
  //   document.body.classList.remove(selectedTheme);
  // });

  // useEffect(() => {
  //   localStorage.setItem("theme", "light");

  //   const selectedTheme = localStorage.getItem("theme");

  //   if (selectedTheme) {
  //     document.body.classList.add(selectedTheme);
  //   } else if (selectedTheme === "dark") {
  //     document.body.classList.add("dark");
  //   } else {
  //     document.body.classList.add("light");
  //   }
  // });

  return (
    <div
      class="dark relative min-h-screen bg-cover bg-fixed bg-center"
      style="background-image: url('../assets/494-[Converted].png')"
    >
      <NavBar />
      <MainContainer />
      <Footer />
    </div>
  );
}

export default App;
