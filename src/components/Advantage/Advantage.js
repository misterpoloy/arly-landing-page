import React from 'react';

const advantage = (props) => {
    const imageUrl = props.advantageInfo.image !== '' ? require('../../assets/img/' + props.advantageInfo.image) : null;

    return (
        <li>
            <i className="ti-control-forward"></i><h5 className="features-bullet">{props.advantageInfo.title}</h5>
            <p>{props.advantageInfo.description}</p>
            {props.advantageInfo.image !== '' ? (
                <img src={imageUrl} width="200px" alt="" title="" />
            ): null}
        </li>
    );
}

export default advantage;