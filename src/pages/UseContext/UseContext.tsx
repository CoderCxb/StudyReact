import React, { Component } from 'react';
import { context } from '../context';

class UseContext extends Component{
  static contextType=context;
  render() {
    console.log(this.context);
    return (
      <div>
        使用Context
      </div>
    );
  }
}

export default UseContext;