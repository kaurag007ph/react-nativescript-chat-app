import * as React from 'react'
import { ListView } from 'react-nativescript';
import { Message } from '~/service/data';
import { Avatar } from './Avatar';

export class Messages extends React.Component<{ messages: Message[]}> {
    render() {
        return (
            <ListView
                items={this.props.messages}
                separatorColor="transparent"
                className="messages"
                cellFactory={(message: Message) => (
                    <gridLayout
                        className={`message-container ${message.isMe ? 'is-me' : ''}`}
                    >
                        <stackLayout className="avatar" padding="0" margin="0">
                            { !message.photo ? <stackLayout width={32} height={32}></stackLayout>: <Avatar width={32} height={32} padding="2" margin="0" photo={message.photo} bgColor={message.bgColor}></Avatar> }
                        </stackLayout>

                        <flexboxLayout className="message" >
                            <label text={message.message}/>
                        </flexboxLayout>
                        <label
                            className="time"
                            text={message.date.getHours() + ':' + message.date.getMinutes()}/>
                    </gridLayout>
                )}/>
        );
    }
}
