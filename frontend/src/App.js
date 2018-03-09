
import React, { Component } from 'react';
import './App.css';
import MovieDashboard from './components/movie-dashboard'
import MyList from './components/mylist'
import Login from './components/login'
import back from './components/img/1.png'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
const Home = () =>(
  <div>
    <h1>KAZFILM</h1>
  </div>
)


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      logged: false
    };
    this.signIn = this.signIn.bind(this);
    this.signOut = this.signOut.bind(this);

}
  signIn(username, password) {
    this.setState({
      user: username,
      logged: true
    });
    console.log(username)
  }
  signOut() {
    this.setState({user: null, logged: false})
  }

  render() {
    if (!this.state.logged){
      return (
        <div >
          <Router>
            <div>
              <div id="top"/>
                <div id="nav"> 
                <ul id="top_layer">
                  <li><Link to='/'>Домашняя страница</Link></li>
                  <li><Link to='/movie-dashboard'>Фильмы</Link></li>
                  <li><p id="gr">Мой список</p></li>
                </ul>
                </div>
                    <Login 
                      className="logreg"
                      signIn = {this.signIn}
                      signOut = {this.signOut}
                      
                    />


            <hr/>
            <Route path='/' component={Home} />
            <Route path='/movie-dashboard' component={MovieDashboard} />
            <Route path='/mylist' component={MyList} />
            </div>
          </Router>

        </div>


      );
    }
    else{
      return (
        <div >
          <Router>
            <div>
              <div id="top"/>
                <div id="nav"> 
                <ul id="top_layer">
                  <li><Link to='/'>Домашняя страница</Link></li>
                  <li><Link to='/movie-dashboard'>Фильмы</Link></li>
                  <li><Link to='/mylist'>Мой список</Link></li>

                </ul>
                </div>
                  <div id="welcome">
                    <h1 > Добро пожаловать, {this.state.user} </h1>
                    <button className="inp" id="btn"  onClick={()=> this.signOut()}>Выход</button>
                  </div>

            <hr/>
            <Route path='/' component={Home} />
            <Route path='/movie-dashboard' component={MovieDashboard} />
            <Route path='/mylist' component={MyList} />
            </div>
          </Router>

        </div>


      );
    }
  }
}

export default App;
