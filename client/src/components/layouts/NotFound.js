import React,{Fragment} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';


export const NotFound = () => {
    return (
        <Fragment>
            <h1 className="x-large text-primary">
                <FontAwesomeIcon icon={faExclamationTriangle}/>Page Not Found
            </h1>
            <p className="large">Sorry, this Page not exist</p>
        </Fragment>
    )
}
