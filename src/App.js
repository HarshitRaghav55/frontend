import { BrowserRouter,Routes, Route} from "react-router-dom";
import Dashboard from "./routes/Dashboard";
import Login from "./routes/Login";
import Subscriptions from "./routes/Subscriptions";
import Signup from "./routes/Signup";
// import { useEffect } from "react";
// import { gapi } from "gapi-script";
// import { CLIENT_ID } from "./constants/credentials";
// import { useState } from "react";


const App = ()=> {
 
  return (
    <BrowserRouter>
    <Routes>
     
        <Route path="/" element={<Login/>} />
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="/subscriptions" element={<Subscriptions/>} />
        <Route path="signup" element={<Signup/>} />
    
        </Routes>
        {/* {(1>2) ? (<Dashboard/>) :(<Login/>)} */}

    </BrowserRouter>
  );
}

const styles = {
  container: {
    height: "100%",
    width: "100%",
  },
};
export default App;