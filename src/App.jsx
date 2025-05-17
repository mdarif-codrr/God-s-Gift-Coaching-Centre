import AboutUs from "./components/AboutUs"
import ContactUs from "./components/ContactUs"
import ForParents from "./components/ForParents"
import ForSchool from "./components/ForSchool"
import Home from "./components/Home"
import Index from "./components/Index"
import { Route, Router, Routes } from 'react-router'
import ForCoaching from "./components/ForCoaching"
import ScrollToTop from "./components/ScrollToTop"
function App() {

  return (
    <>
   
    {/* <NavBar/>
    <Home/>
   <Footer/> */}


      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Index />}>
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="forschool" element={<ForSchool />} />
          <Route path="forcoaching" element={<ForCoaching />} />
          <Route path="forparents" element={<ForParents />} />
          <Route path="contactus" element={<ContactUs />} />
          <Route path="aboutus" element={<AboutUs />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
