import Header from "./component/Header";
import HarryCard from "./component/HarryCard";
import GOTCard from "./component/GOTCard";
import { Routes, Route } from "react-router-dom";

function App() {
  return (<div>
    <Routes>
      <Route path="/" element = {<Header/>}/>
      <Route path="/harry" element = {<HarryCard/>}/>
      <Route path="/got" element = {<GOTCard/>}/>
    </Routes>
    
    </div>
  );
}

export default App;
