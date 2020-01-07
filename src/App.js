import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons:[
      { name:"kishan", age: 25 },
      { name:"kanhaiya", age: 23 },
      { name:"Lucky", age: 22 },
      { name:"Sweta", age: 20 }
    ]
  }

   onClickHandler = (newName) => {
     this.setState({
        persons:[
          { name: newName, age: 25 },
          { name:"kanhaiya", age: 23 },
          { name:"Lucky", age: 21 },
          { name:"Sweta", age: 12}
        ]
      }
     )
  }

  nameChangeHandler = (event) => {
    this.setState({
       persons:[
         { name: "kishan", age: 25 },
         { name: event.target.value, age: 23 },
         { name:"Lucky", age: 21 },
         { name:"Sweta", age: 12}
       ]
     }
    )
 }

  render(){
  return (
    <div className="App">
        <h1>I am React App </h1>
        <button onClick = {this.onClickHandler.bind(this, "Kishan Singh")}>Click me</button>

        <Person name = {this.state.persons[0].name}
         age = {this.state.persons[0].age}/>

        <Person name = {this.state.persons[1].name}
         age = {this.state.persons[1].age}
         nameChange = {this.nameChangeHandler}/>

        <Person name = {this.state.persons[2].name}
         age = {this.state.persons[2].age}/>

        <Person name = {this.state.persons[3].name}
                age = {this.state.persons[3].age}
                click = {this.onClickHandler.bind(this, "Krish")}>
                  <h2>@author</h2> 
        </Person>
    </div>
  );
}
}

export default App;
 