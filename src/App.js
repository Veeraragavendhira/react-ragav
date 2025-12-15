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