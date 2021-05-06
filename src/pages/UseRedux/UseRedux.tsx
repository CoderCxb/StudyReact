import React, { Dispatch} from 'react';
import {connect} from 'react-redux';
import { GoodType } from '../../redux/goods/actionType';
import {addGoodAction,deteleGoodAction} from '../../redux/goods/action';


const UseRedux = function(props:any) {
  let id=0;
  // let [goods,setGoods]=useState([]);
  const addGood = () =>{
    console.log(props.goods)
    props.addGood({id:id++,name:'phone'});
    // setGoods(props.goods);
    console.log(props.goods)
  }
  return (
    <div>
      <button onClick={addGood}>添加商品</button>
      <ul>
        {/* {props.goods.forEach((good:GoodType)=><li>
          {good.id} ---- {good.name}
        </li>)} */}
        {props.goods.map((good:GoodType)=><li key={id++}>{good.name}</li>)}
      </ul>
    </div>
  );
}

const mapStateToProps=(state:any)=>{
  return {
    goods:state.goods
  }
}
const mapDispatchToProps = (dispatch:Dispatch<any>) => {
  return {
    addGood:(good:GoodType)=>dispatch(addGoodAction(good)),
    deteleGoodAction:(id:number)=>dispatch(deteleGoodAction(id))
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(UseRedux);
