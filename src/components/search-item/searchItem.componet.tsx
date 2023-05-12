import { useEffect, useState, ChangeEvent } from "react";
import SearchBoxComponent from "../search-box/searchBox.component";

import { useDispatch, useSelector } from "react-redux";
import { searchStringAction } from "../../store/categories/category.action";

const SearchItem = () => {
  const [searchItemString, setSearchItemString] = useState("");
  const dispatch = useDispatch();

  const searchChangeHandle = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchItemString(value);
  };

  const searchItemName = searchItemString
    .split(" ")
    .map((word) => {
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    })
    .join(" ");

  useEffect(() => {
    dispatch(searchStringAction(searchItemName));
  }, [searchItemName]);

  return <SearchBoxComponent searchChangeHandle={searchChangeHandle} />;
};

export default SearchItem;
