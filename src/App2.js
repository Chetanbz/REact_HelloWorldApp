import React from 'react'
import './App2.css';

class App2 extends React.Component{

render(){
    return(
      <div class ="Page">
        <div class ="header">
            <h1>HEADER - Sample Flexbox Example </h1>
        </div>
        <div class="main">
            <div class="left">
                <h2>Left side bar</h2>
            </div>
            <div class="middle">
                <span class = "content">
                <h1> Curiosity about the spiritual dimension :</h1> <br></br>
                <h3>This includes seeking answers to the more profound questions in life such as – what is the purpose of life, where did I come from and where do we go after death ?</h3>
                </span>
                <span class = "content">
                <h1> Curiosity about the spiritual dimension :</h1> <br></br>
                <h3>This includes seeking answers to the more profound questions in life such as – what is the purpose of life, where did I come from and where do we go after death ?</h3>
                </span>
                <span class = "content">
                <h1> Curiosity about the spiritual dimension :</h1> <br></br>
                <h3>This includes seeking answers to the more profound questions in life such as – what is the purpose of life, where did I come from and where do we go after death ?</h3>
                </span>
            </div>
            <div class="right">
            <h2>Right side bar</h2>
            </div>
        </div>
      </div>
    )
  }
}

export default App2;