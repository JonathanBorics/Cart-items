import "./App.css";
import ItemList from "./Components/ItemList";
import BookData from "./Data.json";

function App() {
  return (
    <div>
      
      <ItemList adat={BookData}></ItemList>
    </div>
  );
}

export default App;
