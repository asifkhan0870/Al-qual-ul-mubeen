import React from "react";
import css from "styled-components";

const Header = css.div`

    display:flex;
    justify-content:center;
    align-items:center;
    font-size:4rem;
    background:red;
`;

function Usool() {
  return (
    <Header>
      Website is under super vision due to some technical issue........
    </Header>
  );
}

export default Usool;
