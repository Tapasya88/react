import React from 'react'
import StatefulApp from '../components/propstates/Statefullapp'
import Childparentinvoke from '../components/intercomp/Childparentinvoke'
export default class Dashboard extends React.Component{
    constructor(props){
        super(props)
        this.state={company: "VDSI"}
    };

    render(){
        return(
            <div className="bg-warning">
            <h1>{this.state.company}</h1>
            <ContactInfo email="hello@gmail.com"/>
            <StatefulApp/>
            <Childparentinvoke/>
            </div>
        )
    }
}

const ContactInfo = (props)=>{
    return(
    <h3>{props.email}</h3>
    )
}

ContactInfo.defaultProps={
    email:'test@test.com'
};