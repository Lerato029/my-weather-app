/* =================================================================The Form Component======================================================= */
//import React to create component
import React from "react";


export default function SearchForm(props) {
  //deconstructing code for better legibility
  const { onSubmit, onChange, list } = props;

  return (
    <form className="row align-items-center mx-4 py-2" onSubmit={onSubmit}>
      <div className="col-md-8 mx-0">
      <select
          
            className="form-select  my-2 "
            id="inlineFormCustomSelect"
            custom
            onChange={onChange}
          >
            <option value={""} disabled selected>
              Choose City
            </option>
            {list.map((city) => (
              <option key={city.name} value={city.name}>
                {city.name}
              </option>
            ))}
          </select>
        
      </div>

      <div className="col-md-4">
        <button className="btn btn-dark " type="submit" >
          Submit
        </button>
      </div>
    </form>
  );
}
