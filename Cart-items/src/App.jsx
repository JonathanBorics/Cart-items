import "./App.css";
import ItemList from "./Components/ItemList";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <div>
      <Router>
        <Navbar></Navbar>
        <Routes>
          <Route path="/ItemList" element={<ItemList />} />
        </Routes>
      </Router>
      <ItemList></ItemList>
    </div>
  );
}

export default App;
