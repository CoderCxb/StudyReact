import React, { Component } from 'react';
import { ThemeContext } from '../App/themes';

class UseContext extends Component{
  static contextType = ThemeContext;
  render() {
    return (
      <div>
        使用Context
        <button onClick={()=>this.context.toggleTheme()}>切换主题</button>
        <div>背景色: {this.context.theme.background}</div>
        <div>前景色: {this.context.theme.foreground}</div>
      </div>
    );
  }
}

export default UseContext;
