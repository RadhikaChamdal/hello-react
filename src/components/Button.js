import React from "react";

function Button(props) {
    return(
        <button style = {{background:"#85e6a2",padding: "8px 15px",
        textAlign: "center",
        textDecoration: "none",
        display: "inline-block",
        borderRadius: "5px",
        border: "none",
        margin: "10px 10px",
        color: "white",}} onClick = {props.onClick}>{props.content}</button>
    )
    
}
export default Button