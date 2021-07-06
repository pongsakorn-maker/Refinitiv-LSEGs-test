import React, { useState, useEffect } from "react";
import { getCategories } from "../services/categories.service";

function Question2() {
  const [searchInput, setSearchInput] = useState<string>("");
  const [categories, setCategories] = useState<string[]>([]);
  const [filteredCategories, setFilteredCategories] = useState<string[]>([]);
  useEffect(() => {
    const getCategoriesData = async () => {
      const fetchCategories = await getCategories();
      setCategories(fetchCategories);
      setFilteredCategories(fetchCategories);
    };
    getCategoriesData();
    // eslint-disable-next-line
  }, []);
  useEffect(() => {
    const filteredCategories = categories.filter((categories) =>
      categories.toLocaleLowerCase().includes(searchInput.toLocaleLowerCase())
    );
    setFilteredCategories(filteredCategories);
    // eslint-disable-next-line
  }, [searchInput]);

  return (
    <div>
      <input
        type="text"
        placeholder="search"
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
      />
      <ul>
        {filteredCategories.map((categories, index) => (
          <li key={index}>{categories}</li>
        ))}
      </ul>
    </div>
  );
}

export default Question2;
