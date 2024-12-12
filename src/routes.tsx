import { BrowserRouter, Routes, Route } from "react-router";

import App from './App'

// import NotFoundPage from "./pages/NotFoundPage";
import {NotFoundPage,Login} from "./pages"



export const BrowserRouterProvider = ()=>{
return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/hello" element={<p>hello hehehe</p>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  </BrowserRouter>
)
    
}