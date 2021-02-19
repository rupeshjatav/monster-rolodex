import React from "react";


function Demo(props) {
    return (
        <button className="calc-button" onClick={() => props.action(props.symbol)}>{props.symbol}</button>
    )
}

export default Demo