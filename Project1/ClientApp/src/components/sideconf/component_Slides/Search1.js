import React, { Component } from "react";

class Search1 extends Component {
  render() {
    return (
      <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">
        <div class="input-group">
          <input
            type="text"
            class="form-control"
            placeholder="Nhập từ khóa..."
          />
          <span class="input-group-btn">
            {/* <button class=" btn-primary" type="button">
              <span class="fa fa-search mr-5"></span>Tìm
            </button> */}
          </span>
        </div>
      </div>
    );
  }
}

export default Search1;
