import React from 'react';

const feature = (props) => {
    const iconClass = 'icon ' + props.featureInfo.featureIcon;

    return (
        <div className="col-12 col-md-6 m-30px-t">
            <div className="feature-box-06">
                <i className={iconClass}></i>
                <div className="feature-content">
                    <h5>{props.featureInfo.featureName}</h5>
                    <p>{props.featureInfo.featureDescripcion}</p>
                    <p><strong>Example:</strong></p>
                    <p><strong>{props.featureInfo.featureExample}</strong></p>
                </div>
            </div>
        </div>
    )
}

export default feature;