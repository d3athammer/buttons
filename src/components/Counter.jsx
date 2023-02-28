import React, { Component } from 'react';


class Counter extends Component {


  getBadgeClasses = () => {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes
  };

  render() {
    return (
      <div className=''>
        <span className={this.getBadgeClasses()}>{this.state.value}</span>
        <button onClick={() => this.props.onIncrement(this.props.counter)} className='btn btn-secondary'>+</button>
        <button onClick={() => this.props.onDecrement(this.props.counter)} className='btn btn-secondary'>-</button>
        <button onClick={() => this.props.onDelete(this.props.counter.id)} className='btn btn-danger'>Delete</button>
      </div>
    );
  }
}

export default Counter;
