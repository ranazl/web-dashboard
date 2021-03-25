import React, { useState } from 'react';

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
                        <text> {message} </text>
                    </>
                </>
            )
    
};

export default withAlert;