


/*
//finding data types// array object[] json object {ulla object}
function App(props)
{
  var a=props.data.sno
  var b=props.data.sname
  var c=props.data.issingle
  var d=props.data.mark
  var e=props.data.hobbies
  return(<>
  <h3>Type of sno:{typeof(a)}</h3>
  <h3>Typepf sname:{typeof(b)}</h3>
  <h3>typeof martialstatus:{typeof(c)}</h3>
  <h3>typeof marks:{typeof(d)}</h3>
  <h3>{Array.isArray(d)?"Its is array":"it is object json"}</h3>
  <h3>{Array.isArray(e)?"its is array":"it is object json"}</h3>
  </>
  )
}
export default App
*/




/*
import parse from 'html-react-parser'
function App(props)//function components
{
  var ans=""
  for(var s in props.data)
  {
    ans=ans+`<li>${s} = ${props.data[s]}</li>`
    console.log(s)
  }

  return(
    <>
    {parse("<ol>"+ans+"</ol>")}
    </>)
}
export default App
//class component
*/



/*
import React from "react";
import parse from 'html-react-parser';
class App extends React.Component
{
  constructor(props)
  {
    var ans=""
 super(props)
 for(var s in props.data)
{
  ans=ans+`<li>${s} = ${props.data[s]}</li>`
  console.log(s)
}  

this.state={
  res:"<ol type='I'>"+ans+"</ol>"
}
}
render()
  {
    return(
      <>
      <h1>combine react state + properties</h1>
      {parse(this.state.res)}
      <div id="res"></div>
     </>)
  }
}
export default App
*/




/*
import React from "react";
class App extends React.Component
{
  constructor()
  {
    super()
    this.state={
      sno:5,
      sname:"Ragav",
      marks:[88,60,70,96]
    }
  }
  show=()=>{
    this.setState({sname:"Padmasneka R"})
  }
  dis=()=>{
    this.setState({marks:[90,80,90,100]})
  }
  dis1=()=>{
    const newmarks=[...this.state.marks]
    newmarks[2]=45
    this.setState({marks:newmarks})
  }
  render()
  {
    return(<>
    <h1>This is class components</h1>
    <h2>Serial Number:{this.state.sno}</h2>
    <h2>Student Name:{this.state.sname}</h2>
    <h2>studen marks:{this.state.marks }</h2>
{this.state.marks.map((v,index)=><>mark:{index+1}={v}<br></br></>)}
<button onClick={this.show}>Update name</button>
<button onClick={this.dis}>update all mark</button>
<button onClick={this.dis1}>update single mark</button>
</>)
  }
}
export default App
*/







/*
import { aadhar, accno, place, sname } from "./mycomponents/commonvar"
import Ragav from "./mycomponents/Abi"
function App()
{
  return(
    <>
    <Abi/>
    <h1>This is default App components</h1>
    <h3>my name is :{sname}</h3>
    <h3>my city :{place}</h3>
    <h3>my aadhar :{aadhar}</h3>
    <h3>my accno:{accno}</h3>
    </>
  )
}
export default App
*/




/*
function App()
{
  var arr=[11,22,33,44,55,66,77,88,99,13,29,101,345,126,321]
  var ma=arr[0]
  var s=0
  var order=arr
  var fans=""
  return(<>
<h1>React loop map method</h1>
<h2>old model</h2>
{arr[0]}
{arr[1]}
{arr[2]}
{arr[3]}
{arr[4]}
{arr[5]}
{arr[6]}
{arr[7]}
{arr[8]}  
<h2>New model Map(loop)</h2>
{arr.map((v)=><>
{v}<br></br>
</>)}

<h2>New model Map(loop)</h2>
<ol type="I">
{arr.map((v)=><li>{v}</li>)}
</ol>

<h2>Task sum of array</h2>
<div style={{display:"none"}}>
{arr.map((item)=><>{s=s+item}<br></br></>)}
</div>
<h3>sum of array:{s}</h3>

<h3>Max of array</h3>
<div> {arr.map((v)=><>{ma<v && <>{ma=v}</>}</>)}
</div>
<h3>max of array:{ma}</h3>

<h2>Ascending Order</h2>
<div style={{display:"none"}}>{order.sort((x,y)=>(x-y)
)}</div>
{order.map((item)=><>{item}+</>)}

<h2>descending Order</h2>
<div style={{display:"none"}}>{order.sort((x,y)=>(y-x))}</div>
{order.map((item=><>{item} </>))}

<h3>Adding Element in an array</h3>
<div style={{display:"none"}}>{order.push(899)}</div>
{order.map((item)=><>{item} ,</>)}
<br></br>

<h3>Remove last element in an array</h3>
<div style={{display:"none"}}>{order.pop()}</div>
<div style={{display:"none"}}>{order.pop()}</div>
<div style={{display:"none"}}>{order.pop()}</div>
{order.map((item)=><>{item},</>)}


<h2>remove last comma or plus</h2>
<div style={{display:"none"}}>{order.map((item)=><>{fans=fans+item+","}</>)}</div>
{fans.slice(0,-1)}
<



/>)}
export default App
*/



/*
function App()
{
  var arr=[11,22,33,44,55,66]
  var[v1,
    ,v2,...v3]=arr
  return(
  <>.
  <h2>spread operator</h2>
  <h3>index 1:{v1}</h3>
  <h3>index 5:{v2}</h3>
  <h3>index 6:{v3}</h3>
  </>
)
}
export default App
*/


/*
function App()
{
var res="pass"
var avg=89
return(<>
<h1>React nested ifelse statement</h1> 
<h2>{
  (res==="pass" &&
  ((avg>=85 && "outstanding")||
 (avg>=75 && "excellent") ||
  (avg>=65 && "very good")||
  "fair"))||"no grade because fail"}
  </h2>
</>)
}
export default App



/*
function App()
{
var unit=130
  return(<>
  <h1>EB bill</h1>
  <h3>{(unit<=100 && "Rs.0")||
  (unit>=101 && unit<=125 && "Rs.50")|| // default value 50
  (unit>=126 && unit<=200 && "Rs."+(unit-100)*2)||
  (unit>=201 && unit<=300 && "Rs."+(200+(unit-200)*3))||
  (unit>=301 && unit<=400 &&"Rs."+(500+(unit-300)*4))||
  "₹"+(900+(unit-400)*5)
  }</h3>
</>)
}
export default App
*/




/*function App()
{
  var avg=73
  return(<>
  <h1>React simple if else if statement</h1>
  <h2>{(avg>=84 && "outstanding")|| (avg>=75 && "Excellent")||(avg>=65 && "very good")||
  (avg>=56 && "fair")}</h2>
  </>)
}
export default App
*/





/*
function App()
{
  var num=10
  return(<>
  <h2>{(num>8 && "+ve")||"-ve"}</h2>
 </>)
}
export default App





/*
function App()
{
  var num=10
  return(<>
  <h1>React simple if statement</h1>
  <h2>{(num % 2===0 && "even")||"odd"}</h2>
 </>)
}
export default App
*/





/*
function App()
{
  var age=25
  return(<>
  <h1>{(age>20 && "eligible")||" not eligible"}</h1>
  </>)
}
export default App




/*
function App()
{
  var mark=85
  return(<>
  <h1>React simple if statement</h1>
  <h2>{(mark>34 && "PASS")||"FAIL"}</h2>
 </>)
}
export default App
*/


/*
*function App()
{
  var mark=10
  return(<>
  <h1>React simple if statement</h1>
  <h2>{mark>34 && "PASS"}</h2>
 </>)
}
export default App




/*
//commonvar 
import Abi from "./mycomponents/Abi" 
import { aadhar, accno, place, sname } from "./mycomponents/commonvar"
  function App()
  {
    return(
      <>
      <Abi/>
      <h1>this is default App components</h1>
      <h2>my name is :{sname}</h2>
      <h3>my city:{place}</h3>
      <h3>my aadhar:{aadhar}</h3>
      <h4>my accno :{accno}</h4>
      </>
    )
  }
  export default App
*/



/*
function App()
{
  if(true)
  {
    var v=100
    let l=200
    const c=300
    v++;
    l++;
    console.log("Let: "+l);
    console.log("Let" +c);
  }
  return(
    <>
    <h1>Variable: Global: {v}</h1>
    <h1>Does not work let & const : because they are local Variable</h1>
    </>
  )
}
export default App
/////
*/





/*
//ARROW FUNCTION WITH PARAMETERS
function App()
{
  let myfunc=(a,b,c)=>{
    var tot=a+b+c
    
    document.getElementById("res").innerHTML=`<h2>Total: ${tot}</h2>`;
  } 
  return(
    <>
    <center>
    <h1>Arrow Function Without Parameter</h1>
    <button onClick={()=>myfunc(10,20,30)}>Click me</button>
    <h1><div id="res"></div></h1>
    </center>   
  
  <h3>Onclick C must be in Capital<br></br>Don't use double quotes</h3>
  <h3>in calling  function must use paranthesis when without passing argument</h3>
    </>
  )
}
export default App
//ARROW FUNCTION WITH PARAMETERS
*/



/*
//ARROW FUNCTION WITHOUT PARAMETERS
function App()
{
  let myfunc=()=>{
    document.getElementById("res").innerHTML="Why  are you clicked the button?";
    document.getElementById("res1").innerHTML="Button Note: Onclick C must be in Capital";
    document.getElementById("res2").innerHTML="Button Note: in calling  function don't use paranthesis when without passing argument";

  }
  return(
    <>
    <center>
    <h1>Arrow Function Without Parameter</h1>
    <button onClick={myfunc}>Click me</button>
    </center>   
  <h1><div id="res"></div></h1>
  <h3><div id="res1"></div></h3>
  <h3><div id="res2"></div></h3>

  <h3>Normal Note: Onclick "C" must be in Capital</h3>
  <h3>Normal Note: in calling  function don't use paranthesis when without passing argument</h3>
    
    </>
  )
}
export default App
//ARROW FUNCTION WITHOUT PARAMETERS
*/


/*
//IMAGE INSERTION
import myimg from './images/Ragav.jpg'
function App()
{
  return(
    <>
    <center>
    <h2>Image Insertion</h2>
    <h2>Its me Ragav </h2>
    <img src={myimg} width="50%" height="25%" alt='Path is wrong'></img>
    </center>
    </>
  )
}
export default App
*/


/*
//conditional operator or Ternary Operator
//Greatest Number
function App()
{
  var a=100
  var b=1500
  var c=700
 // let d=Math.max(a,b,c)
  //let e=Math.min(a,b,c)
  return(
    <>
    <center>
    <h1>Biggest Among given Two numbers : {a>b?a:b}</h1>
    <h1>Biggest Among given Three numbers : {(a>b && a>c)?a:(b>c)?b:c}</h1>
  </center>
    </>
  )
}
export default App
//conditional operator or Ternary Operator

*/


/*
function App()
//Javascript code entered below
{
var a=10
var b=20
var c='ChellaKutty Voyagers' 
return(<>
  <center>
  <h1>Total:{a+b}</h1>
  <marquee bgcolor='light green'><font size='20'>{c}</font></marquee>
  </center>
  
</>)
}
export default App
*/


/*
import React from "react"
    class Parent extends React.Component
    {
      render(){
              return(<>   
              <center>   
                 <h1>RAGAV CHELLAKUTTY</h1>
                <h2>Enjoyyyy</h2></center>
             </>
 )
      }
    }
    class App extends React.Component
    {
      render(){
        return(<>        
          <Parent/>
          
            <center>
            <h1> RAGAV CHELLAKUTTY</h1>
            <h2> Welcome Guyssss</h2>
            </center>
       </>
 )
      }
    }

export default App
//END OF CLASS COMPONENT

*/

//FUNCTION COMPONENT
/*function App()
{
  return(
    <div>
      <h1>Welcome To RAGAV React JS</h1>
      <h1>Welcome To RAGAV React JS</h1>
      <h1>Welcome To RAGAV React JS</h1>
      </div>

  )
}
export default App
//END OF FUNCTION COMPONENT



import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
*/