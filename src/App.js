import { useState, useEffect } from "react";
import SearchBox from "./components/search-box/search-box.component";
import CardList from "./components/card-list/card-list.component";

import "./App.css";

const App = () => {
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);
  const [searchField, setSearchField] = useState("");
  const [title, setTitle] = useState("Monsters Rolodex");

  console.log("rendered");

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users`)
      .then((response) => response.json())
      .then((users) => setMonsters(users));
  }, []);

  useEffect(() => {
    const filteredMonsters = monsters.filter((monster) =>
      monster.name.toLocaleLowerCase().includes(searchField)
    );
    setFilteredMonsters(filteredMonsters);
  }, [monsters, searchField]);

  const onSearchChange = (event) => {
    const searchField = event.target.value.toLocaleLowerCase();
    setSearchField(searchField);
  };

  const onTitleChange = (event) => {
    const searchField = event.target.value.toLocaleLowerCase();
    setTitle(searchField);
  };

  const searchBoxProps = {
    className: "search-box",
    placeholder: "search monsters",
    onChangeHandler: onSearchChange,
  };

  const titleInputProps = {
    className: "search-box",
    placeholder: "search monsters",
    onChangeHandler: onTitleChange,
  };

  const cardListProps = {
    monsters: filteredMonsters,
  };

  return (
    <div className="App">
      <h1 className="app-title">{title}</h1>
      <SearchBox {...searchBoxProps} />
      <br />
      <SearchBox {...titleInputProps} />
      <CardList {...cardListProps} />
    </div>
  );
};

export default App;
