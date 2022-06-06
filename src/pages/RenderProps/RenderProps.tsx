import React from 'react'

function Test(props){
  let {render}=props;
  let title='Render Props';
  return <div>
    {render(title)}
  </div>
}

export default function RenderProps(){
  return <div>
    <Test render={(value)=><h1>{value}</h1>}></Test>
  </div>
}