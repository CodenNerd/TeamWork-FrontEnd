import React, { Component } from 'react';

class Line extends Component {
    constructor(props){
        super(props);
        
        this.state={
            styles:{
                opacity:this.props.opacity,
                width: this.props.width,
                background: 'white',
                height: '5px',
                margin: '5px 0px',
                borderRadius:'5px'
            }
        }
    }
    
    render() { 
        return ( 
            <div style={this.state.styles}>

            </div>
           
         );
    }
}
 
export default Line;