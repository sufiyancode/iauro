import React, { useState, useCallback, useContext } from "react";
import { AppContext } from "../context/AppContext";

function Header() {
  const phone = useContext(AppContext);
  console.log(phone);
  return (
    <>
      <h1>{phone}</h1>
      <h1>Header</h1>
    </>
  );
}

export default React.memo(Header);
