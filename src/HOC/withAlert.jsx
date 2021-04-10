import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';

const withAlert = (WrappedComponent) => (props) => {


    const [message, setMessage] = useState();
    const [show, setShow] = useState(false);

    const onAlert = (error) => {
        setMessage(error);
    }

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    console.log('messageeeeeee', message)
    return (
        <>
            <WrappedComponent
                {...props}
                {...{ onAlert }}
                {...{ handleShow }}
            />
            <>
                <Modal
                    show={show}
                    onHide={handleClose}
                    backdrop="static"
                    keyboard={false}
                >
                    <Modal.Body>
                        Add your project
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>
            </>
        </>
    )

};

export default withAlert;