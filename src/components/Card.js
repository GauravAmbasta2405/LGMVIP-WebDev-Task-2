import React from "react";

const Card = ({ name, email, id, lname }) => {
  return (
    <div className="tc grow br2 pa2 ma2 dib bw9 ">
      <img alt="robots" src={`https://reqres.in/img/faces/${id}-image.jpg`} />
      <div>
        <br />
        <h2><font color="white">
          {name} {lname}
          </font>
        </h2>
        <br />
        <h3><font color="white">{email}</font></h3>
      </div>
    </div>
  );
};

export default Card;
