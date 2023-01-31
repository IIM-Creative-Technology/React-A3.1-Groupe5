import Header from "./component/Header";
import HarryCard from "./component/HarryCard";
import { Routes, Route } from "react-router-dom";

function App() {
  return (<div>
    <Routes>
      <Route path="/" element = {<Header/>}/>
      <Route path="/harry" element = {<HarryCard/>}/>
    </Routes>
    
    </div>
  );
}

export default App;
