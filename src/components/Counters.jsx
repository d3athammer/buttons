import React, { Component } from 'react';
import Counter from './Counter';

class Counters extends Component {
  state = {
    counters: [
      {id: 1, value:0},
      {id: 2, value:0},
      {id: 3, value:0},
      {id: 4, value:0}
    ]
  }

  handleIncrement = counter => {
    // should only modify the state using setState, so we have to copy them twice
    // make a copy of counters state before modifying it
    const counters = [...this.state.counters];
    // get the index of each counter
    const index = counters.indexOf(counter);
    // we don't want to modify the state value directly, hence we spread the counter and modify it
    counter[index] = {...counter};
    counter[index].value++;
    // now then we mutate the counters
    this.setState({counters})
  }

  render() {
    return (
      <div className="m-3">
          <button className="btn btn-primary">Reset</button>
          {this.state.counters.map(counter => (
            <Counter
              key={counter.id}
              counter={counter}
              value={counter.value}
              onIncrement={this.handleIncrement}
            />
          ))}
      </div>
    );
  }
}

export default Counters;
