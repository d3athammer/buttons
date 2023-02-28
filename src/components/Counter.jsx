import React, { Component } from 'react';


class Counter extends Component {


  getBadgeClasses = () => {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes
  };

  render() {
    const { counter, onIncrement, onDecrement, onDelete } = this.props
    return (
      <div className=''>
        <span className={this.getBadgeClasses()}>{this.state.value}</span>
        {/* takes in counter from props as argument for my handle functions */}
        <button onClick={() => onIncrement(counter)} className='btn btn-secondary'>+</button>
        <button disabled={counter.disabled} onClick={() => onDecrement(counter)} className='btn btn-secondary'>-</button>
        <button onClick={() => onDelete(counter)} className='btn btn-danger'>Delete</button>
      </div>
    );
  }
}

export default Counter;
