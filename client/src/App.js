
import './App.css';
import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./Pages/Home";
import New from "./Pages/New";
import CreatePage from "./Pages/CreatePage";
import UpdatePage from "./Pages/UpdatePage";
import ReadPage from "./Pages/ReadPage";

function App() {
  return (
      <div className="App">

         <BrowserRouter>
             <Routes>
                 <Route exact path="/"  render={(props)=><ReadPage {...props} key={Date.now()} />}/>
                 <Route path="/UpdatePage" element={<UpdatePage/>}/>
                 <Route path="/ViewPage" element={<CreatePage/>}/>
             </Routes>
         </BrowserRouter>

      </div>
  );
}

export default App;
