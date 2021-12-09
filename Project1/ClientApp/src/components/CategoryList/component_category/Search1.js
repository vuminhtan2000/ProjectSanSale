import React, { Component } from "react";

function Search1(props) {
  return (
    <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">
      <input
        type="text"
        class="form-control"
        placeholder="Nhập từ khóa..."
        // value={this.state.search}
        onChange={(event) => {
          props.setSearch(event.target.value);
        }}
        style={{ marginTop: 20, padding: 20 }}
      />
    </div>
  );
}

export default Search1;
