import React, { useState } from "react";

const Contact = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });

  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();
  };

  return (
    <div className="columns is-centered">
      <div className="column is-2">
        <div className="field">
          <label className="label">Sign Up</label>
          <div className="control">
            <form onSubmit={handleFormSubmit}>
              <input
                className="label"
                placeholder="Your name"
                name="name"
                type="string"
                id="name"
                value={formState.name}
                onChange={handleChange}
              />
            </form>
          </div>
        </div>
        <div className="field">
          <div className="control">
            <form>
              <input
                className="label"
                placeholder="Your email"
                name="email"
                type="email"
                id="email"
                value={formState.email}
                onChange={handleChange}
              />
            </form>
          </div>
        </div>
        <div className="field">
          <div className="control">
            <form>
              <input
                className="label"
                placeholder="message"
                name="message"
                type="textarea"
                id="message"
                value={formState.message}
                onChange={handleChange}
              />
              <button className="btn d-block w-100" type="submit">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
