import { useState, useEffect } from "react";
import SearchBox from "./components/search-box/search-box.component";
import CardList from "./components/card-list/card-list.component";

import "./App.css";

const App = () => {
  const [monsters, setMonsters] = useState([]);
  const [searchField, setSearchField] = useState("");

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users`)
      .then((response) => response.json())
      .then((users) => setMonsters(users));
  }, []);

  const filteredMonsters = monsters.filter((monster) =>
    monster.name.toLocaleLowerCase().includes(searchField)
  );
  const onSearchChange = (event) => {
    const searchField = event.target.value.toLocaleLowerCase();
    setSearchField(searchField);
  };

  const searchBoxProps = {
    className: "search-box",
    placeholder: "search monsters",
    onChangeHandler: onSearchChange,
  };

  const cardListProps = {
    monsters: filteredMonsters,
  };

  return (
    <div className="App">
      <h1 className="app-title">Monsters Rolodex</h1>

      <SearchBox {...searchBoxProps} />
      <CardList {...cardListProps} />
    </div>
  );
};

export default App;
