import React from 'react'

function Attribute(props) {
    return(
        <div>
        <p><b>{props.title}</b> {props.value}</p>
        </div>
    )
}

export default Attribute