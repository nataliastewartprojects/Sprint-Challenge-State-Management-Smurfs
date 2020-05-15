import React, { useState } from "react";
import { connect } from "react-redux";
import { formSubmit } from "../actions/smurfActions";

const SmurfForm = (props) => {
  const [formState, setFormState] = useState({
    name: "",
    age: "",
    height: "",
  });

  const inputChange = (e) => {
    e.persist();
    const newFriend = {
      ...formState,
      [e.target.name]: e.target.value,
    };

    setFormState(newFriend);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.formSubmit(formState);
    setFormState({
      name: "",
      age: "",
      height: "",
    });
  };

  return (
    <div>
      <form className="smurf-form" onSubmit={(e) => handleSubmit(e)}>
        <label htmlFor="name">
          Name:
          <input
            id="name"
            type="text"
            name="name"
            value={formState.name}
            onChange={inputChange}
          />
        </label>
        <label htmlFor="age">
          Age:
          <input
            id="age"
            type="text"
            name="age"
            value={formState.age}
            onChange={inputChange}
          />
        </label>
        <label htmlFor="height">
          Height:
          <input
            id="height"
            type="text"
            name="height"
            value={formState.height}
            onChange={inputChange}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    name: state.smurfsGroup.name,
    age: state.smurfsGroup.age,
    height: state.smurfsGroup.height,
  };
};

export default connect(mapStateToProps, { formSubmit })(SmurfForm);
