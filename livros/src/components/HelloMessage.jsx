import React, { Component } from 'react';
class HelloMessage extends Component {
    render() { 
        return ( 
            <div>
                Olá, {this.props.name}
            </div>
         );
    }
}
 
export default HelloMessage;