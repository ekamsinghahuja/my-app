import React from "react";
import './app.css';
import Maincontainer from "./components/Maincontainer";
import Login from "./components/Login";
import Welcom from './components/Welcom';
import CreateGroup from './components/CreateGroup';
import Users from './components/Users';
import ChatArea from './components/ChatArea';
import Groups from './components/Groups';
import { useDispatch, useSelector } from 'react-redux';




import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SelectUsers from "./components/SelectUsers";

function App() {
  const theme = useSelector((state)=>state.themeKey);
  
  return (
    <div className={"App " + ((theme)?"":'darkeres')}>
      

        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/app" element={<Maincontainer />}>
            <Route path="welcome" element={<Welcom />} />
            <Route path="chat/:id" element={<ChatArea />} />
            <Route path="create_group" element={<CreateGroup />} />
            <Route path="users" element={<Users />} />
            <Route path="groups" element={<Groups />} />
            <Route path="select-users" element={<SelectUsers />} />
            

          </Route>
        </Routes>
      
    </div>
  );
}

export default App;
