import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";
export default function About({ placeholder, adat }) {
  const [filterdata, setFilterData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");

  const handleFilter = (event) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);
    const filtered = adat.filter((value) => {
      return value.title.toLowerCase().includes(searchWord.toLowerCase());
    });
    if (searchWord === "") {
      setFilterData([]);
    } else {
      setFilterData(filtered);
    }
  };

  const clearInput = () => {
    setFilterData([]);
    setWordEntered("");
  };
  return (
    <div className="search">
      <div className="searchInputs">
        <input
          type="text"
          className="inputs"
          placeholder={placeholder}
          value={wordEntered}
          onChange={handleFilter}
        />
        <div className="searchIcon">
          {filterdata.length === 0 ? (
            <SearchIcon />
          ) : (
            <CloseIcon id="clearBtn" onClick={clearInput} />
          )}
        </div>
      </div>
      {filterdata.length != 0 && (
        <div className="dataResults">
          {filterdata.slice(0, 15).map((value, key) => {
            return (
              <div className="data">
                <a className="dataItem" href={value.link} target="_blank">
                  <p id="title"> {value.title}</p>
                </a>
                <p>Author:{value.authoc}</p>
                <p>Country:{value.country}</p>
                <p>Year:{value.year}</p>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
