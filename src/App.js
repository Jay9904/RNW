import "./App.css"
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
import Page404 from './Routing/Page404';
import Student from './Routing/Student';
import StudentDetails from './Routing/StudentDetails';
import Vehicle from './Components/Vehicle';
import Login from './Routing/Login';
import SignUp from './Routing/SignUp';
import UpdateUser from './Routing/UpdateUser';
import Main from './Test2/Main';
import UseMemoEx from './UseMemo/UseMemoEx';
import UseContext from './UseContext/UseContext';
import PR from './Components/PR';
import ApiFatch from './Components/ApiFatch';
import Action from './ReduxCrude/Action';
import Form from './ReduxCrude/Form';
import MyAPI from './JSONserver/Signupserver';
import Signupserver from './JSONserver/Signupserver';
import Loginserver from './JSONserver/Loginserver';
import Shopping from './JSONserver/Shopping';
import Cart from "./JSONserver/Cart";


function App() {
  return (
    <>
      {/* <Pagination /> */}
      {/* <Effect /> */}
      {/* <CountDown /> */}
      {/* <ControlComponents /> */}
      {/* <Comment /> */}
      {/* <LocalStorage /> */}
      {/* <FormPR /> */}
      {/* <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/shop" element={<Shop />} />
          <Route path='/student' element={<Student />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/student/:msg' element={<Student />} />
          <Route path='/student/view/:id' element={<StudentDetails />} />
          <Route path='/student/edit/:id' element={<UpdateUser />} />
          <Route path='/login' element={<Login />} />
          <Route path='/login/:msg' element={<Login />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
      </BrowserRouter> */}
      {/* <Vehicle /> */}
      {/* <Main />   */}
      {/* <UseMemoEx /> */}
      {/* <UseContext /> */}
      {/* <PR /> */}
      {/* <ApiFatch /> */}
      {/* <Action />
      <Form /> */}

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Signupserver />} />
          <Route path='/login' element={<Loginserver />} />
          <Route path='/shopping' element={<Shopping />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;
