import React, { Component } from 'react';

class TextDisplay extends Component {
    render() {
       let mystyle={
           color:'#FF0000',
           fontSize:10
       }
        return (
            <div style={mystyle}>Welcome {this.props.text}     
            </div>
        );
    }
}

export default TextDisplay;