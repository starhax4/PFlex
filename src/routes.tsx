import { BrowserRouter, Routes, Route } from "react-router";



// import NotFoundPage from "./pages/NotFoundPage";
import {NotFoundPage,Login} from "./pages"
import Home from "./pages/home-page";



export  const AppRouter = ()=>{
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