import React from "react";
import popInfo from './pop.info.js';

function popInfo (props){
    return (
        <Info image = {props.image} born = {props.born} nickname = {props.nickname} albums = {props.albums}/>

    )
}

export default popInfo