import * as React from 'react'
import { EventData, TextField } from '@nativescript/core';

interface State {
    message: string;
}

export class ChatInput extends React.Component<{ onSubmit: (string) => void }, State> {
    constructor(props) {
        super(props);
        this.state = {
            message: ''
        };

      }
    render() {
        return (
            <gridLayout columns="*, auto" background="#FFFFFF" padding="24">
                <textView
                    col={0}
                    colSpan={2}
                    hint="Type your message..."
                    style={{
                        placeholderColor: '#8f8e9e',
                        backgroundColor: '#F7F7F8',
                        padding: 24,
                        borderWidth: 0,
                        borderRadius: 24,
                        minHeight: 48
                    }}
                    text={this.state.message}
                    onTextChange={(args) => this.onTextChnage(args)}
                />
                <button
                    col={1}
                    className="fas"
                    style={{
                        width: 32,
                        height: 32,
                        margin: '0 24',
                        borderRadius: '100%',
                        color: '#FFFFFF',
                        background: '#585fb2',
                    }}
                    text="&#xf1d8;"
                    onTap={() => this.submit()}
                />
            </gridLayout>
        );
    }

    onTextChnage(args: EventData) {
        const message: string = (args.object as TextField).text;
        this.setState({ message });
    }

    submit() {
        this.props.onSubmit(this.state.message);
        this.setState({ message: null });
    }
}
