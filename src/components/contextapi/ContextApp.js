import React, { Component } from 'react';
import NumberContext from './Context';
import Counter from './Consumer';
import Counter2 from './Consumer';

class ContextApp extends Component {
    constructor(props){
    super(props)
    this.state={number:0}
    this.onDecHandler = this.onDecHandler.bind(this);
    this.onIncHandler = this.onIncHandler.bind(this);
    }
    onIncHandler(){
        this.setState({number:this.state.number+1})
    }
    onDecHandler(){
        this.setState({number:(this.state.number-1<0?0:this.state.number-1)})
    }
    render() {
        return (
            <div>
                <button onClick={this.onIncHandler} className="btn">Increment</button>
                <button onClick={this.onDecHandler} className="btn">Decrement</button>
                <h1>Counter1</h1>
                <NumberContext.Provider value={this.state.number}>
                  <Counter/>
                </NumberContext.Provider>
                
                <h1>Counter2</h1>
                <NumberContext.Provider value={this.state.number}>
                  <Counter2/>
                </NumberContext.Provider>
               

            </div>
        );
    }
}

export default ContextApp;