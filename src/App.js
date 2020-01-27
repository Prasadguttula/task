import React from 'react';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Header } from './components/Header.js';
import Footer from './components/footer/Footer';
import Navbar from './components/navbar/Navbar';
import Home from './components/home/Home';
import Application from './components/application/Application';
import Details from './components/details/Details';

class App extends React.Component {

    state={
      details:[
        {
          id:1,
          uname:'John',
          mob:7894561312,
          pan:'EOYTER8745N'
        },
        {
          id:2,
          uname:'Billy',
          mob:8594561313,
          pan:'AEYTER8745N'
        },
        {
          id:3,
          uname:'Nancy',
          mob:6394561319,
          pan:'BIYTER8745N'
        }
      ]
    }
    
    addUser=(x,y,z)=>{
      const newUser={
        id:this.state.details.length+1,
        uname:x,
        mob:y,
        pan:z
      }
      this.setState({details:[...this.state.details,newUser]})
    }
    delUser=(id)=>{
      this.setState({details:[...this.state.details.filter(user=>user.id!==id)]})
      
     }
     nameChange=(id,uname)=>{
      this.setState({details:this.state.details.map(user=>{
        if(user.id===id){
          user.uname=uname;
        }
        return user;
      })})
     }
  render(){
    return (
      <Router>
        <Header/>
        <Navbar/>
        <Route exact path="/" render={props=>(
          <React.Fragment>
            <Home len={this.state.details.length}/>
          </React.Fragment>
        )}/>
        <Route path="/details"><Details 
        delUser={this.delUser} 
        nameChange={this.nameChange}
        users={this.state.details}/></Route>
        <Route path="/app"><Application addUser={this.addUser} /></Route>
        <Footer/>
      </Router>
    );
  }
}

export default App;
