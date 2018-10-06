import React from 'react';

const advantage = (props) => {
    const imageUrl = props.advantageInfo.image !== '' ? require('../../assets/img/' + props.advantageInfo.image) : null;

    return (
        <li>
            <i class="ti-control-forward"></i><h5 class="features-bullet">{props.advantageInfo.title}</h5>
            <p>{props.advantageInfo.description}</p>
            {props.advantageInfo.image !== '' ? (
                <img src={imageUrl} width="200px" />
            ): null}
        </li>
    );
}

export default advantage;