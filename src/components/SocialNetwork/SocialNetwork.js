import React from 'react';

const social = (props) => {
    return (
        <li><a className={props.name} href={props.link}><i className={props.icon}></i></a></li>
    )
}

export default social;