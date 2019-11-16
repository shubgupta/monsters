import React, { Component } from 'react';
import { Cardlist } from './component/cardlist/cardlist.jsx';
import { SearchBox } from './component/serachbox/search.jsx';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      search: ''
    }
  }
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({
        monsters: users
      }))
  }
  render() {
    const { monsters, search } = this.state;
    const filterd = monsters.filter(monster =>
      monster.name.toLowerCase().includes(search.toLocaleLowerCase())
    )
    return (
      <div className="App">
       
        <h1 className="text-center p-5 text-white">MONSTERS APP</h1>
        <SearchBox placeholder="search monsters" handlechange={e=>this.setState({search:e.target.value})} />
        <Cardlist monsters={filterd} />
      </div>
    );
  }
}

export default App;
