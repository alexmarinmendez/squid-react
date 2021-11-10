import React from 'react';
import errorImage from '../assets/calamar-error.jpeg';

function ErrorComponent(props) {
    return (
        <div className="error-container">
            <img src={errorImage} />
            <br />
            {props.message}
        </div>
    )
};

export default ErrorComponent;