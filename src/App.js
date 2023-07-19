import Header from "./components/Header";
import Cards from "./components/Cards";
import {Route,Routes} from "react-router-dom"
import Addmovie from "./components/Addmovie";

function App() {
  return (
    <div className="App relative">
      <Header/>
      <Routes>
        <Route path="/" element={<Cards/>} />
        <Route path="/addmovie" element={<Addmovie/>} />
      </Routes>
    </div>
  );
}

export default App;
