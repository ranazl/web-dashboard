import React, { useState } from 'react';
import {Alert} from 'react-bootstrap';

const withAlert = (WrappedComponent) => (props) => {
   
       
        const [message,setMessage]=useState('');

        const onAlert = (error) => {
            setMessage(error);
        }

            return(
                <>
                    <WrappedComponent
                        {...props}
                        {...{onAlert}}
                    />
                    <>
                    <Alert variant="success">
                            <p>
                                {message}
                            </p>
                    </Alert>
                    </>
                </>
            )
    
};

export default withAlert;