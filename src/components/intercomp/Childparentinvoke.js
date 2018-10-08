import React, { Component } from 'react';

class Childparentinvoke extends Component {
    constructor(props){
        super(props)
        this.state={data:'Initial data'}
        this.updateState= this.updateState.bind(this);
    }

    updateState(event){
        this.setState({data:event.target.value})
     
    }

    render() {
        return (
            <div>
                <h1 className="text-success">Parent Component</h1>
                <h2 className="text-danger">{this.state.data}</h2>

                <h1> Child Component 1 </h1>
                <ChildComponent mydata={this.state.data} updatesateprop={this.updateState}/>
                <h1> Child Component 2 </h1>
                <ChildComponent2 data ={this.state.data}/>

            </div>
        );
    }
}

export default Childparentinvoke;

class ChildComponent extends Component {
    render() {
        return (
            <div>
                <input type="text" value={this.props.mydata} onChange={this.props.updatesateprop}/>
               
            </div>
        );
    }
}

class ChildComponent2 extends Component {
    render() {
        let mystyle={
            color:'#FF5733'
        }
        return (
            <div>
                 <h3 style={mystyle}>{this.props.data}</h3>
            </div>
        );
    }
}

