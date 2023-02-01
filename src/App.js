import GOTCard from "./components/GOTCard";
import { Routes, Route } from "react-router-dom";
import Homepage from './components/Homepage'
import PokemonSprite from './components/PokemonSprite';
import AnimeImage from './components/AnimeImage';
import HarryCard from "./components/HarryCard";


function App() {
  return (<div>
    <Routes>
      <Route path="/" element = {<Homepage/>}/>
      <Route path="/harry" element = {<HarryCard/>}/>
      <Route path="/got" element = {<GOTCard/>}/>
      <Route path="/pokemon" element = {<PokemonSprite/>}/>
      <Route path="/anime" element = {<AnimeImage/>}/>
    </Routes>
    
    </div>
  );
}

export default App;
