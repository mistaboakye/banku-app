import React from 'react';
import { Component, useState } from 'react';

// class App extends Component {
//   //3.setting up your state: you'll need to set a constructor with super that call the components constructor
//   constructor() {
//     super();
//     this.state = { number: 6 };
//   }
//   //2.setting up your event
//   handleClick = () => {
//     //  console.log('button clicked');
//     //4. updating the state
//     let newNumber = this.state.number + 1;
//     this.setState({ number: newNumber });
//   };

//   //1.setting up a class component
//   render() {
//     return (
//       <div>
//         <h1>Cars are {this.state.number}</h1>
//         <button onClick={this.handleClick}>Click me</button>
//       </div>
//     );
//   }
// }

function App() {
  //3. setting up the state
  const [state, newState] = useState({ number: 20 });
  //2.setting up your event
  const clickme = () => {
    // 4. update the state when the button is clicked
    // console.log('increase Cars');
    let newNumber = state.number * 3;
    newState({ number: newNumber });
  };

  //1.setting up a class component
  return (
    <div>
      <h1>Cars are {state.number}</h1>
      <button onClick={clickme}>Click me</button>
    </div>
  );
}

export default App;
