import React from "react";
import UserContext from "./userContext";
import MovieRow from "./movieRow";
class MovieList extends React.Component {
  static contextType = UserContext; //1st method
  componentDidMount() {
    console.log(this.context);
  }
  render() {
    return (
      <UserContext.Consumer>
        {(userContext) => (
          <div>
            Movie list {userContext.user ? userContext.user : ""} <MovieRow />
          </div>
        )}
        {/* can pass only function as child */}
      </UserContext.Consumer>
    );
  }
}
// MovieList.contextType = UserContext  //2nd method
export default MovieList;
