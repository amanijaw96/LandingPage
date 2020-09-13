import React from "react";
import "./search_scss.scss";

const renderInputs = (label, placeholder) => {
  return (
    <>
      <span className="CustomSearchInputLabel font-weight-bold">{label}</span>
      <input
        placeholder={placeholder}
        className="form-control CustomSearchInput pl-0"
      ></input>
    </>
  );
};

export default function Search(props) {
  return (
    <div className="container pt-4 pl-0 pr-0 ">
      <div className="col-12 flex-row card SearchBox d-flex">
        <div className="SearchInputWrapper col-3 d-flex justify-content-center align-items-start flex-column">
          {renderInputs("Where", "Do you want to travel ?")}
        </div>
        <div className="pl-4 SearchInputWrapper col-3 d-flex justify-content-center align-items-start flex-column">
          {renderInputs("When", "Do you want to go ?")}
        </div>
        <div className="pl-4  col-3 d-flex justify-content-center align-items-start flex-column">
          {renderInputs("Who", "Are you going with ?")}
        </div>
        <div className="pl-4 col-3 d-flex justify-content-center align-items-center flex-column">
          <button className="CustomButton form-control">show all trips</button>
        </div>
      </div>
    </div>
  );
}
