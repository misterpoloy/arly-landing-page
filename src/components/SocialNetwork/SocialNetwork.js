import React from 'react';

const social = (props) => {
    return (
        <li><a class={props.name} href={props.link}><i class={props.icon}></i></a></li>
    )
}

export default social;