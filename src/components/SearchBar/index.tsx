import React, { useState, useEffect, useCallback } from "react";
import debounce from "utils/debounce";
import SC from "./styles";

interface Props {
  onSearch?: (text: string) => void;
}

const SearchBar: React.FC<Props> = ({ onSearch }) => {
  const [text, setText] = useState("");

  const searchWithDebounce = useCallback(
    debounce((keywords: string) => {
      onSearch?.(keywords);
    }, 300),
    []
  );

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    // if press [Enter] key
    if (event.keyCode === 13 && text) {
      searchWithDebounce(text);
    }
  };

  useEffect(() => {
    searchWithDebounce(text);
  }, [searchWithDebounce, text]);

  return (
    <SC.Container>
      <SC.SearchInput
        data-testid="searchInputId"
        placeholder="Search..."
        onChange={(e) => setText(e.target.value)}
        onKeyDown={handleKeyDown}
        value={text}
      />
      <SC.Search
        onClick={() => searchWithDebounce(text)}
        data-testid="searchIconId"
      />
    </SC.Container>
  );
};

export default SearchBar;
