import React from "react";
import { render } from "react-dom";

function Options() {
  return (
    <div>
      <h1>Options</h1>
      {/* <label for="customRange1" class="form-label">Height</label>
      <input type="range" class="form-range" min="0" max="300" id="customRange1" onChange={setHeight}></input>
      <label for="customRange2" class="form-label">Width</label>
      <input type="range" class="form-range" min="0" max="300" id="customRange2" onChange={setWidth}></input> */}
    </div>
  );
}

render(<Options />, document.querySelector('#options'));
