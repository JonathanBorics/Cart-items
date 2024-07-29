import React from "react";
import SearcBar from "./Components/SearcBar";
//import BookList from "./Components/BookList";
import data from "./Data.json";

const App = () => {
  return (
    <div className="App">
      <SearcBar placeholder={"Enter a Book name..."} data={data} />

      {/* <p>
        <BookList />
      </p> */}
    </div>
  );
};

export default App;
