
import './App.css';

import Layout from "./components/screen/Layout";
import {  BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import User from "./pages/users/User";
import Home from "./pages/home/Home";
import File from "./pages/files/File";
import Report from "./pages/reports/Report";
//import { Dashboard } from '@mui/icons-material';


const App = () => {
     return (
       <Router>
          <Layout />
          <Routes>
            <Route path="/home" element={<Home/>} />
            <Route path="/user" element={<User/>} />
            <Route path="/file" element={<File/>} />
            <Route path="/report" element={<Report/>} />
          </Routes>
       </Router>
   );
}

export default App;
