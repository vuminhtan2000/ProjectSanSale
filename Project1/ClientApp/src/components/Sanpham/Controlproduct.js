import React, { useState } from "react";

import Searchhome from "./Searchhome";

function Controlproduct(props) {
  return (
    <>
      {/* 2.1. Tìm kiếm theo tên */}
      <Searchhome data={props.data} setSearch={props.setSearch} />

    </>
  );
}

export default Controlproduct;
