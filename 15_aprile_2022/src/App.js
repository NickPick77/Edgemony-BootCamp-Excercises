import { useState } from "react";
import './App.css';
import { HomePage } from './pages/HomePage/home-page';

function App() {
  const [ currentPage, setCurrentPage] = useState("About");
  return (
    <HomePage/>
   
  );
}

export default App;
