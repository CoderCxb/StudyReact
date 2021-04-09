import React, { Component } from 'react';
import { MyContext } from '../context';

class UseContext extends Component{
  static contextType=MyContext;
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
