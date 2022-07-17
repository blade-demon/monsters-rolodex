import { Component } from "react";
import "./card-list.styles.css";

class SearchBox extends Component {
  render() {
    const { monsters } = this.props;

    return (
      <div className="card-list">
        {monsters.map((monster) => {
          return (
            <div className="card-container" key={monster.id}>
              <img
                src={`https://robohash.org/${monster.id}?set=set2&size=180x180`}
                alt={`monster ${monster.name}`}
              />
              <h2>{monster.name}</h2>
              <p>{monster.email}</p>
            </div>
          );
        })}
      </div>
    );
  }
}

export default SearchBox;
