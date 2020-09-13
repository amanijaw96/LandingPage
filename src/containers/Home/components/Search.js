import React from "react";
import "./search_scss.scss";

const renderInputs = (label, placeholder) => {
  return (
    <div>
      <span className="CustomSearchInputLabel font-weight-bold">{label}</span>
      <input
        placeholder={placeholder}
        className="form-control CustomSearchInput pl-0"
      ></input>
    </div>
  );
};

export default function Search(props) {
  return (
    <div
      className=" SearchContainer container mt-4 pl-0 pr-0"
      style={{ maxHeight: 102, overflow: "auto" }}
    >
      <div className="col-12 flex-md-row  card SearchBox d-flex">
        <div className="SearchInputWrapper col-md-3  col-12 d-flex justify-content-center align-items-start flex-column">
          {renderInputs("Where", "Do you want to travel ?")}
        </div>
        <div className="pl-4 SearchInputWrapper col-md-3  col-12 d-flex justify-content-center align-items-start flex-column">
          {renderInputs("When", "Do you want to go ?")}
        </div>
        <div className="pl-4  col-md-3  col-12 d-flex justify-content-center align-items-start flex-column">
          {renderInputs("Who", "Are you going with ?")}
        </div>
        <div className="pl-4 col-md-3 mt-md-0 mt-4 mb-md-0 mb-4 col-12 d-flex justify-content-center align-items-center flex-column">
          <button className="CustomButton form-control">show all trips</button>
        </div>
      </div>
    </div>
  );
}
