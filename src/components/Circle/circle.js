import React, {Component} from 'react';

class Circle extends Component{
    render(){
        return(
            <div className = 'nums'>
                <p className='randomNums'> {this.props.numbers}</p>
            </div>
        )
    }
}

export default Circle;