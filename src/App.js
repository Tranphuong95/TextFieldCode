import React, {useState} from 'react';
import './App.css';
import TextFieldCode from './components/TextFieldCode';

function Bt({children}){
  return (
    <h1>{children}</h1>
  )
}

function App() {

  const [code, setCode]=useState(3);
  const [checkBox, setCheckBox]=useState({
    checkCar: true,
    checkBike: false
  });
 
  const handleChange=(e)=>{
    setCode(e.target.value)
  }
  const handleChangeCheckBox=(e)=>{
    setCheckBox({
      ...checkBox,
      [e.target.name]: e.target.checked
    })
  }
  // clone object 1 tang
  const abc={
    a: 1,
    b: {
      c: 2,
      d: {
        e: 3,
        f: 4
      }
    }
  }
  const newAbc={...abc};
  //clone Object nhieu tang
  const aaa= JSON.stringify(abc);
  const def=JSON.parse(aaa)
  def.a=2;
  def.b.c=20;
  def.b.d.e=300;

  console.log(abc, def);

  const arr1=[
    {
      name: "xe 1",
      tags: "xe-may",
      num: 123123,
    },
    {
      name: "xe oto1",
      tags: "oto",
      num: 23132
    },
    {
      name: "xe dap dien",
      tags: "xe-dap-dien",
      num: 23131
    },
    {
      name: "xe may dien",
      tags: "xe-may-dien",
      num: 1313
    },
    {
      name: "xe 2",
      tags: "xe-may",
      num: 13123
    },
    {
      name: "xe oto 2",
      tags: "oto",
      num: 131231
    }
  ];
  let newArr1=[];
  arr1.map(item =>{
    const findIndex=newArr1.findIndex(f=>f.tags===item.tags);
    if(findIndex!==-1){
      newArr1[findIndex].amount= newArr1[findIndex].amount+1
    }else  newArr1.push({...item, amount: 1})
  })
  console.log("arrr", arr1, newArr1)
  return (
    <div className="App">
      <Bt>Hello</Bt>
      <TextFieldCode name="code" value={code} onChange={handleChange} checkBox={checkBox} />
      <input type="checkbox" name="checkCar" checked={checkBox.checkCar} value="car" onChange={handleChangeCheckBox}/>
      <label for="car"> I have a car</label><br></br>
      <input type="checkbox" name="checkBike"checked={checkBox.checkBike} value="bike" onChange={handleChangeCheckBox}/>
      <label for="bike"> I have a bike</label><br></br>
    </div>
  );
}

export default App;
