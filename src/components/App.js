import React, { Component } from 'react';
import '../styles/App.css';
import GetImageForm from './GetImageForm';



class App extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div>
        <GetImageForm />
      </div>
    );
  }
}

export default App;
