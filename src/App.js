import React, { Component } from 'react';
import './App.css';

import {CardList} from './components/card-list/card-list.component';

class App extends Component {

  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: ''
    };
  }

  componentDidMount()
  {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => res.json())
    .then(
      (result) => {

        

        
        this.setState({
          monsters: result
        },()=>{

          console.log(this.state.monsters,"monsters");
        });





      },
      // Note: it's important to handle errors here
      // instead of a catch() block so that we don't swallow
      // exceptions from actual bugs in components.
      (error) => {
        console.log(error,"error");
      }
    )

  }

   render() {
      return (
        <div className='App'>
        <h1>Monsters Rolodex</h1>
        <CardList monsters={this.state.monsters}/>
      </div>
      );
   }
}
export default App;
