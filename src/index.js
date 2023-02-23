import React from 'react';
import ReactDOM from 'react-dom';
import "./index.css";
let time = new Date();

let currDate = new Date();
let minutes = (currDate.getMinutes()).toLocaleString();
let sec = currDate.getSeconds();


let samay  = time.getHours();
const cssStyle = {};
console.log("Anand"); 
let greeting = '';
if(samay>=5 && samay< 12){
  greeting = 'Good Morning';
  cssStyle.color = "Green";

  }
else if (samay>=12 && samay<16){
  greeting = 'Good Afternoon';
  cssStyle.color = "Orange";

}
else if (samay>=16 && samay<20){
  greeting = 'Good Evening';
  cssStyle.color = "Grey";
}
else if(samay>=20 && samay<=24){
  greeting = 'Good Night';
}
else{
  greeting = 'It\'s too late ....Go to Sleep !';
}
ReactDOM.render(
  <>
      <p className='heading'>Clock By Vedant</p>

  <div className = "container">
    <div className = "small_container">
      <h1>
      Hello there, I am Vedant.
    <br/>
         <span style={cssStyle}>{greeting}!</span></h1>
         <br />
         This is <span className='temp__time'>{samay} : {minutes} : {sec} </span>

    </div>
  </div>
  </>,
  document.getElementById('root')
);