import React from 'react'
import logo from './assests/images/logo1.svg';
import './App.css';

class App extends React.Component{
  url= 'https://www.cricbuzz.com/'
  content = 'Several thousand years ago in north-central India, two people sat in a chariot in the midpoint of a great battlefield. One of them, the yogi Arjuna, knew that it would be not be long before the conflict would begin. So he asked Krishna, the Master of Yoga, what should be his attitude and perspective in this moment. And above all: What should he do?'
  + 'There was no time to spare in empty words. In a brief discourse, later turned into seven hundred Sanskrit verses by the sage Vyasa, Krishna outlined to Arjuna the way to live an entire life so as to gain perfect self-knowledge and self-mastery.'
  +'The battle was ferocious and–as always with war–everyone lost. But when Vyasa wrote his epic poem, the Mahabharata, he put Krishna’s inspired words into it as a precious jewel. Instantly they were extracted, named The Song of God (Bhagavad Gita), and circulated throughout the subcontinent.'
  constructor(){
    super()
    this.state={
      name:'Welcome, Hello from Chetan ',
      shallow:'I am Thrilled',
      blank:'',
      letter :this.content
    }
    
  }

  clickOnBlankPage = (e) =>{
    console.log('Click event works',e)
    window.open(this.url,"blank")
  }
  onInputChange = (event) =>{
    const nameRegex = RegExp('^[A-Z]{1}[a-zA-Z\\s]{2,}$')
    this.setState({
      name:event.target.value
    })
    if(nameRegex.test(event.target.value)){
      this.setState({
        nameError:""
      })
    }
    else{
      this.setState({
        nameError:'Name is Incorrect'
      })
    }

    console.log(event.target.value)
    this.setState({
      blank:event.target.value
    })
  }

  render(){
    return(
      <div class ="App">
        <div class = "head">
          Hello {this.state.blank} from <br></br>
          Home
        </div>
        <img src ={logo} onClick = {this.clickOnBlankPage}
        alt = "Not visible"></img>
        <input onChange = {this.onInputChange}></input>
        <span className="error-output">{this.state.nameError}</span>
        <div class = "content">
        <h2>{this.content}</h2>
        </div>
      </div>
    )
  }
}

export default App;
