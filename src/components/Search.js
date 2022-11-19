import React from "react";

function Search({searchPoke,onChangePoke}) {

  function handleChange(e){
    onChangePoke(e.target.value)
  }

  return (
    <div className="ui search">
      <div className="ui icon input">
        <input className="prompt" value={searchPoke} onChange={handleChange}/>
        <i className="search icon" />
      </div>
    </div>
  );
}

export default Search;
