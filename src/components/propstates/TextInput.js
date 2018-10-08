import React, { Component } from 'react';
//import TextDisplay from './TextDisplay'

class TextInput extends Component {
    constructor(props){
        super(props)
        this.state={inputText:"Tapasya"}
    }
    handleChange(event){
        this.setState({
            inputText:event.target.value
        })
    }
   
    render() {
        return (
            <div>
                <input type="text" value="Hello"/>
                <div>Enter Name:</div>
                <input type="text" value={this.state.inputText} onChange={this.handleChange.bind(this)}/>
                {this.state.inputText?console.log("Valid"):console.log("Not Valid- No data")}

                {this.state.inputText?<TextDisplay text={this.state.inputText}/>:<TextDisplay text="Please enter name"/>}
            </div>
        );
    }
}

export default TextInput;

const TextDisplay = (props)=>{
    let mystyle={
        color:'#00FF00',
        fontSize:10
    }
    return(
        <div style={mystyle}>Welcome {props.text}     
            </div>
    )
}

