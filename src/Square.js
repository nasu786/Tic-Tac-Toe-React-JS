import React from 'react';
import './index.css';

function Square(props) {
    const state = props.currentstate;
    const win = props.currentwin;
    
    let classlist = ['box']
    if (state === "Draw!")
        classlist.push('box-draw')
    else if (state === (win + ' Wins!'))
        classlist.push('box-win')
        
    return (

        <div className={classlist.join(' ')} onClick={() => props.onClick()}>{props.value}</div>

    )
}

export default Square;