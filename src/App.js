import Header from "./components/Header";
import Cards from "./components/Cards";
import {Route,Routes} from "react-router-dom"

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={<Cards/>} />
      </Routes>
      <Cards/>
    </div>
  );
}

export default App;
