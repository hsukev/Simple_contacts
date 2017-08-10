import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


class ContactList extends React.Component{

  render() {
    const people = this.props.contacts;

    return (
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Welcome to React</h2>
        <ol>{
              people.map(person => <li>{person.name}</li>)
            }
          </ol>
      </div>



    )
  }
}
class App extends Component {
  render() {
    return (
      <div className="App">
        <ContactList contacts = {[
            {name: 'Michael'},
            {name: 'Kayn'}
          ]}/>
      </div>
    );
  }
}

export default App;
