import { useState } from "react";
import { useStompClient } from "react-stomp-hooks"


const PublishComponent = () => {
    const stompClient = useStompClient();

    const publishMessage = () => {
        if (stompClient) {
            stompClient.publish({ destination: '/app/broadcast', body: 'Hello World' })
        }
    }
    return (
        <div style={{ color: 'blue', cursor:'pointer' }} onClick={publishMessage}> Send message </div>
    )
}

export default PublishComponent