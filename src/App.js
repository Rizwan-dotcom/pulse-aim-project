// import { BrowserRouter , Routes, Route } from "react-router-dom";
import Header from "./component/header";
import Footer from "./component/footer";
import { HeroSection } from "./component/hero-section";
// import  Home  from "./pages/home";
// import  Features  from "./pages/feature";
// import  Shoq  from "./pages/shoq";
// import  HowItWorks  from "./pages/howitworks";
// import  ForCoaches  from "./pages/forcoaches";
// import  About  from "./pages/about";
// import  Contact  from "./pages/contact";
function App() {
  return (
    <div>
      <Header />
      <main className="mt-10">
      <HeroSection/>
      <Footer/>
      </main>
    </div>
  )
}

export default App;
