import React, { useContext } from "react";
import UserContext from "./userContext";
import CardContext from "./cardContext";
function MovieRow(props) {
  const userContext = useContext(UserContext);
  const cardContext = useContext(CardContext);
  console.log(cardContext);
  return <div>Movie row {userContext.user ? userContext.user : ""}</div>;
}

export default MovieRow;
