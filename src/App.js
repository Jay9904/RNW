import './App.css';
import ControlComponents from './Components/ControlComponents';
import CountDown from './Components/CountDown';
import Effect from './Components/Effect';
import Pagination from './Components/Pagination';
import Comment from './Components/Comment';
import LocalStorage from './Components/LocalStorage';
import FormPR from './Components/FormPR';

import '../src/Components/style.css';
import Navbar from './Routing/Navbar';
import Home from './Routing/Home';
import About from './Routing/About';
import Shop from './Routing/Shop';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      {/* <Pagination /> */}
      {/* <Effect /> */}
      {/* <CountDown /> */}
      {/* <ControlComponents /> */}
      {/* <Comment /> */}
      {/* <LocalStorage /> */}
      <FormPR />
      {/* <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/shop" element={<Shop />} />
        </Routes>
      </BrowserRouter> */}
    </>
  );
}

export default App;
