import { ChangeEvent, FC } from "react";
import { SearchBox } from "./searchBox.style";

type SearchBoxComponentProps = {
  searchChangeHandle: (e: ChangeEvent<HTMLInputElement>) => void;
};

const SearchBoxComponent: FC<SearchBoxComponentProps> = ({
  searchChangeHandle,
}) => {
  return (
    <SearchBox>
      <input
        type="search"
        placeholder="Search..."
        onChange={searchChangeHandle}
      />
    </SearchBox>
  );
};

export default SearchBoxComponent;
