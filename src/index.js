import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import '../node_modules/font-awesome/css/font-awesome.min.css'; 
import App from './App';
import * as serviceWorker from './serviceWorker';

class MyForm extends React.Component {

constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
		handleChange(event) {
    //alert(this.setState({value: event.target.value}))
    alert("in");
  }

  
	handleSubmit(e) {
		let divs = document.getElementById("data")
		const name =['Marketing & Sales','Marketing','Digital Marketing','Sales','Finance','Inhouse expenses','Tax Audit','Operation & Maintenance','Operation','Internal Operation','Maintenance'];
		const percent = [50,25,25,25,25,15,10,25,13,13,12];
		const spc = document.createElement("div")
    spc.style.width = "100%";
    spc.style.height = "58px";
    divs.appendChild(spc)
	for (let i = 0; i < name.length; i++) {
    const id = Math.random() //or some such identifier 
    
    const d = document.createElement("div")
    d.style.width = "100%";
    d.style.height = "58px";
    //d.className = 'textNode news content';
    const icon = document.createElement("i")
    icon.className = 'fa fa-caret-down icon';
    const ind = document.createElement("div")
    ind.style.width = "229px"; 
	ind.className = ('ind');     
    ind.innerText = name[i];
    const ind2 = document.createElement("div")
    ind2.style.width = "229px"; 
    ind2.className = ('ind2');
    ind2.innerText = percent[i] + '%'; 
    const inp = document.createElement("input")
    inp.style.width = "229px"; 
    inp.className = ('inp');
    //inp.className =  ('inp');
    inp.id = i + ('inpi'); ;
    

    //inp.setAttribute("onchange", this.handleChange);
    //alert(val);
    
    
    //let val = document.getElementsByClassName("inp").value
    //console.log(val);
    //inp.innerText = percent[i] + '%'; 
    const ind3 = document.createElement("div")
    ind3.style.width = "229px"; 
    ind3.className = ('ind3');
    ind3.innerText = (percent[i]  * this.input.value)/100; 
    
  
    d.appendChild(icon)
    d.appendChild(ind)
    d.appendChild(inp)
    d.appendChild(ind2)

    d.appendChild(ind3)
    d.id = id
    divs.appendChild(d)
    //ReactDOM.render(<div/>, document.getElementById('root'))
}
document.getElementsByClassName("inp").onchange = function() {

};
    //alert('The value is: ' + this.input.value);
    e.preventDefault();
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h1>FUND ALLOCATION</h1>
        
        <div id="main">
        <p className= "txt">Enter Allocated Total Amount
:</p>
        <input type="text" id ="amount" className ="amt" ref={(input) => this.input = input} 
        />
        <input type="Submit" id="submit" className ="sub"
        />
        </div>
        <div id="data">

        </div>
      </form>
    );
  }
}
ReactDOM.render(<MyForm />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
