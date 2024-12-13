import { BrowserRouter, Routes, Route } from "react-router";
import {NotFoundPage,Login,Home} from "./pages"




export const BrowserRouterProvider = ()=>{
return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/hello" element={<p>hello hehehe</p>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  </BrowserRouter>
)
    
}