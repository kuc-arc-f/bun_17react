import { Routes, Route } from 'react-router-dom';

//
import Home from './client/home';
import About from './client/about';
import Button from './client/Button';
import Card from './client/Card';
//
export default function App(){
    return(
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/button" element={<Button />} />
        <Route path="/card" element={<Card />} />
      </Routes>
    </div>
    )
}
/*
*/