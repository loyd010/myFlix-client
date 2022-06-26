import React from 'react';
import axios from 'axios';

import { BrowserRouter as Router, Route, Redirect, Link } from 'react-router-dom';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { RegistrationView } from '../registration-view/registration-view';
import { LoginView } from '../login-view/login-view';
import { MovieCard } from '../movie-card/movie-card';
import { MovieView } from '../movie-view/movie-view';
import { Menubar } from '../navbar/navbar';

export class MainView extends React.Component {
  
  constructor() {
    super();

    this.state = {
      movies: [],
      user: null
    };
  }

  componentDidMount() {
    let accessToken = localStorage.getItem('token');
    if (accessToken !== null) {
      this.setState({
        user: localStorage.getItem('user')
      });
      this.getMovies(accessToken);
    }
  }

  /*Commenting out code as added componentDidMount and get request below; may need to add back
    componentDidMount(){
    axios.get('https://myflix2022-app.herokuapp.com/movies')
    .then(response => {
      this.setState({
        movies: response.data
      });
    })
    .catch(error => { console.log(error);
    });
  }*/
  
  onLoggedIn(authData) {
    console.log(authData);
    this.setState({
      user: authData.user.Username
    });

    localStorage.setItem('token', authData.token);
    localStorage.setItem('user', authData.user.Username);
    this.getMovies(authData.token);
  }

  /*COMMENTING OUT ONLOGGED OUT TO MATCH CODE FROM MINITASK
  onLoggedOut() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    this.setState({
      user: null
    });
  }*/

  getMovies(token) {
    axios.get('https://myflix2022-app.herokuapp.com/movies', {
      headers: { Authorizatioin: `Bearer ${token}`}
    })
    .then(response => {
      //Assign the result to the state
      this.setState({
        movies: response.data
      });
    })
    .catch(function (error) {
      console.log(error);
    });
  }
  
  render() {
    const { movies, user } = this.state;
    
    return (
      <Router>
        <Menubar user={user} />
        <Row className="main-view justify-content-md-center">
          
          <Route exact path="/" render={() => {

            if (!user) return <Col>{ 
              <LoginView onLoggedIn={user => this.onLoggedIn(user)} />
            }
            </Col>

            if (movies.length === 0) return <div className="main-view" />;

            return movies.map(m => (
              <Col md={3} key={m._id}>
              <MovieCard movie={m} />
              </Col>
            ))
          }} />

          <Route path="/register" render={() => {
            if (user) return <Redirect to="/" />
            return <Col lg={8} md={8}>
              <RegistrationView />
            </Col>
          }} />

          <Route exact path="/movies/:movieId" render={({ match, history }) => {

            if (!user) return <Col>{ 
              <LoginView onLoggedIn={user => this.onLoggedIn(user)} />
            }
            </Col>

            if (movies.length === 0) return <div className="main-view" />;

            return <Col md={8}>
              <MovieView movie={movies.find(m => m._id === match.params.movieId)} onBackClick={() => history.goBack()} />
            </Col>
          }} />

          <Route exact path="/genres/:name" render={({match, history}) => {

            if (!user) return <Col>{ 
              <LoginView onLoggedIn={user => this.onLoggedIn(user)} />
            }
            </Col>

            if (movies.length === 0) return <div className="main-view" />;

            return <Col md ={8}>
              <GenreView genre={movies.find(m => m.Genre.Name === match.params.name).Genre} onBackClick={() => history.goBack()} />
            </Col>
          }} />

          <Route exact path="/directors/:name" render={({match, history}) => {

            if (!user) return <Col>{ 
              <LoginView onLoggedIn={user => this.onLoggedIn(user)} />
            }
            </Col>

            if (movies.length === 0) return <div className="main-view" />;

            return <Col md ={8}>
              <DirectorView director={movies.find(m => m.Director.Name === match.params.name).Director} onBackClick={() => history.goBack()} />
            </Col>
          }} />

          <Route path={`/users/${user}`} render={({match, history}) => {
           
           if (!user) return <Redirect to="/" />;

            if (movies.length === 0) return <div className="main-view" />;

            return <Col>
            <ProfileView movies={movies} user={user} onBackClick={() => history.goBack()} /></Col>
          }} />

          <Route path={`/user-update/${user}`} render={({match, history}) => {
            
            if (!user) return <Col>{ 
              <LoginView onLoggedIn={user => this.onLoggedIn(user)} />
            }
            </Col>

          if (movies.length === 0) return <div className="main-view" />;

            return <Col>
            <UserUpdate user={user} onBackClick={() => history.goBack()} />
            </Col>
          }} />

        </Row>
      </Router>
      );

      }

  }

