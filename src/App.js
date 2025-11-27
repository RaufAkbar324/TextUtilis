import "./App.css";
import Navbar from "./Navbar";
import TextArea from "./TextArea";
import About from "./About";

function App() {
  return (
    <>
      <Navbar title="TextUtilis" HomeText="Home" AboutText="About" />
      <TextArea />
      {/* <About /> */}
    </>
  );
}
export default App;
