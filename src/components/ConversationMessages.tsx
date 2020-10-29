import * as React from 'react'
import { Message } from '~/service/data';
import { ChatInput } from './ChatInput';
import { Messages } from './Messages';

export class ConversationMessages extends React.Component<{messages: Message[], onSubmit: (string) => void }> {
    render() {
        return (
            <gridLayout rows="*, auto" className="container">
                <stackLayout >
                    <Messages messages={this.props.messages}></Messages>
                </stackLayout>

                <stackLayout row={1} >
                    <ChatInput onSubmit={this.props.onSubmit}></ChatInput>
                </stackLayout>

            </gridLayout>
        );
    }
}
