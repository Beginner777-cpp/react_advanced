import logo from './logo.svg';
import './App.css';
import Movie from './hoc/movie';
import Counter from './hooks/counter';
import Users from './hooks/users';
import MoviePage from './context/moviePage';
import { Component } from 'react';
import UserContext from './context/userContext';
import CardContext from './context/cardContext';
import Login from './context/login';
class App extends Component {
  state = { user: null }
  handleLogIn = (user) => {
    console.log('login with ', user);
    this.setState({ user: 'Husan' })
  }
  render() {
    return (
      // <CardContext.Provider value={{ cards: [] }} >
      //   <UserContext.Provider value={{ user: this.state.user, handleLogIn: this.handleLogIn }}>
      //     <MoviePage />
      //     <Login />
      //   </UserContext.Provider>
      // </ CardContext.Provider>
      <Users />
    );
  }

}

export default App;
