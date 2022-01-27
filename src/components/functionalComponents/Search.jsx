import React, { useEffect, useState } from "react";
import UserData from "../pureComponents/UserData";
import { SearchData } from "../../utils/SearchData";
import Button from "../shared/button/Button";

const Search = () => {
  const [searchValue, setSearchValue] = useState("");
  const [data, setData] = useState([]);
  useEffect(() => {
    setData(SearchData);
  }, []);
  const handleChange = (e) => {
    e.preventDefault();
    setSearchValue(e.target.value);
  };
  const fecthSearchResult = () => {
    const result = SearchData.filter((item) =>
      item.name.toLowerCase().includes(searchValue.toLowerCase())
    );
    setData(result);
  };
  return (
    <div className="container">
      <div>
      <input onChange={(e) => handleChange(e)} value={searchValue} className="input"/>
      <Button onButtonClick={fecthSearchResult} label='search'/>
      </div>
      <UserData data={data} />
    </div>
  );
};

export default Search;
