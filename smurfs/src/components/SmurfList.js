import React, { useState } from "react";
import { connect } from "react-redux";
import { getSmurfs } from "../actions";

const SmurfList = (props) => {
  const [search, setSearch] = useState("");

  const filteredFriends = props.smurfsGroup.filter((item) => {
    return item.name.toLowerCase().includes(search.toLocaleLowerCase());
  });

  return (
    <div>
      <p>Click on Gargamel to get all her friends!</p>
      <img
        className="smurf-img"
        src="https://png2.cleanpng.com/sh/a496fbf29216392870d2c6176e2e5049/L0KzQYi4UcI4N2dnfJGAYUHldYroVPJnP2UASZC8N0W1QYaCWcE2OWI8T6oCMkS6SIW5TwBvbz==/5a1be9a4bf7491.3752159915117787247842.png"
        alt="gargamel smurf"
        onClick={() => props.getSmurfs()}
      />
      <input
        type="text"
        placeholder="Search a friend!"
        onChange={(e) => setSearch(e.target.value)}
      />

      {filteredFriends.map((item) => {
        return (
          <div key={item.id}>
            <h2>{item.name}</h2>
            <p>age:{item.age}</p>
            <p>height:{item.height}</p>
          </div>
        );
      })}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    smurfsGroup: state.smurfsGroup,
    fecthingSmurfs: state.fecthingSmurfs,
    error: state.error,
  };
};
export default connect(mapStateToProps, { getSmurfs })(SmurfList);
