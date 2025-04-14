import Header from "./components/header/Header.tsx";
import Form from "./components/form/Form.tsx";

function App() {

  return (
    <div className="container-md">
      <Header/>
      <h1 className="text-center fs-1 fw-bold col-10 col-md-5 col-xl-4 my-4 mx-auto">Analyze your text in real-time.
      </h1>
      <Form/>
    </div>
  )
}

export default App
