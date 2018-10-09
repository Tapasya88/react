import React, { Component } from 'react';
import NumberContext from './Context';

class Counter extends Component {
    render() {
        return (
            <div>
               <NumberContext.Consumer>{(val) => <h1>{val} 💪</h1>}</NumberContext.Consumer> 
            </div>
        );
    }
}

export default Counter;

