import React, { Component }from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deadline: 'December 25,2017'
    }
}
ChangeDeadline(){
this.setState({deadline: this.state.newDeadline})
}
//render
render(){
  return(
    <div>
      <div>CountDown to {this.state.deadline}</div>
      <div>
        <input placeholder='New Date' type="time" onChange={event => this.setState ({newDeadline: event.target.value})}/>
        <button onClick={() => this.ChangeDeadline()}>Submit</button>
      </div>
    </div>
  )

}

}
export default App;
