import Header from "./components/header/Header.tsx";
import Form from "./components/form/Form.tsx";
import Counters from "./components/counters/Counters.tsx";
import LetterDensity from "./components/density/LetterDensity.tsx";

function App() {

  return (
    <div className="container-md">
      <Header/>
      <h1 className="text-center display-4 fw-bold col-12 col-md-7 col-xl-5 my-4 mx-auto">Analyze your text in real-time.
      </h1>
      <Form/>
      <Counters/>
      <LetterDensity/>
    </div>
  )
}

export default App
