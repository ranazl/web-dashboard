import React from 'react'


const Alert = WrappedComponent => {

    return class extends React.Component {
        state = {
            messages: [],
        }

        alertMessage = {
            error: message => this.addMessage(message, "error"),
            success: message => this.addMessage(message, "success"),
            info: message => this.addMessage(message, "info"),
        }
        render() {

            return (
                <WrappedComponent alertMessage={this.alertMessage} />
            );
        }
    }
}

export default Alert;