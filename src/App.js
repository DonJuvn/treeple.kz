import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import FirstPage from "./pages/FirstPage1";
import SecondPage from "./pages/SecondPage";
import ThirdPage from "./pages/ThirdPage";
import Menu from "./components/menu (1)";
import Dropdown from "./components/dropdown";

function App() {
   return (
      <Router>
         <div className="App">
            <header className="App-header">
               <Menu />
               <Dropdown />
            </header>
            <main>
               <div className="container">
                  <Routes>
                     <Route path="/" element={<FirstPage />} />
                     <Route path="/second" element={<SecondPage />} />
                     <Route path="/third" element={<ThirdPage />} />
                  </Routes>
               </div>
            </main>
         </div>
      </Router>
   );
}

export default App;
