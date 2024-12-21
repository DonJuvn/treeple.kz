import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import FirstPage from "./pages/FirstPage";
import SecondPage from "./pages/SecondPage";
import ThirdPage from "./pages/ThirdPage";
import Menu from "./components/menu";

function App() {
   return (
      <Router>
         <div className="App">
            <header className="App-header">
               <Menu />
            </header>
            <main>
               <Routes>
                  <Route path="/" element={<FirstPage />} />
                  <Route path="/second" element={<SecondPage />} />
                  <Route path="/third" element={<ThirdPage />} />
               </Routes>
            </main>
         </div>
      </Router>
   );
}

export default App;
