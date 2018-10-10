import React from 'react'
const newData ={data:'I am data from Higher order Component'}

const MyHOC = (ComposedComponent)=>
    class extends React.Component{
        componentDidMount(){
            this.setState({
                data:newData.data
                //fetch("http://api call")
            })
        }

        render(){
            return(
                <ComposedComponent {...this.props}{...this.state}/>
                //write current state to this.props for updation
            )
        }
    }


class MyComponent extends React.Component{
    render(){
        return(
            <div>
                <h1>Testing HOC</h1>
                <h2>{this.props.data}</h2>
            </div>
        )
    }
}

export default MyHOC(MyComponent)
