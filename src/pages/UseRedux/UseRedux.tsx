import React, { Component } from 'react';
import {connect} from 'react-redux';
import { Good } from '../../redux/goods/types';
import good from "../../redux/goods/goods"
import {addGood,deleteGood} from '../../redux/goods/actions';


class UseRedux extends Component<any> {
  state={
    id:0
  };
  render() {
    console.log(this.props);
    
    return (
      <div>
        <button onClick={()=>{
          this.props.addGood({id:this.state.id++,name:'Apple',type:'phone'});
        }}>添加商品</button>
        <button onClick={()=>{
          this.props.deleteGood(1);
        }}>添加商品</button>
        <ul>
          {this.props.goods.map((item:Good)=>{
            return <li key={item.id}>{item.id+item.name}</li>
          })}
        </ul>
      </div>
    );
  }
  componentDidMount(){
     good.subscribe(()=>{
       this.setState({})
     })
  }
}


export default connect((state)=>{
  return {goods:state}
},()=>{
  return {
    addGood,
    deleteGood
  }
})(UseRedux);
