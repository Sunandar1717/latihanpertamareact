import React from "react";

class Greetings extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: this.props.value,
        }
    }
  
  tick() {
    this.setState({value: this.state.value + 1})
  }

  componentDidMount() {
    setTimeout(() => this.tick(), 1000);
  }

    
  render() {
    // const name = this.props.name;
      const person = this.props.person;
    return (
      <div>
        <h2> Selamat berjuang {person.name} </h2>
        <p> umur {this.state.value} </p>
        <button onClick={() => this.tick()}>
          TAMBAH Value
        </button>
      </div>
    );
  }
}

export default Greetings;
