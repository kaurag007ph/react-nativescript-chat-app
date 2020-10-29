import * as React from 'react';
import { RouteProp } from '@react-navigation/native';
import { ConversationMessages } from '~/components/ConversationMessages';
import { MainStackParamList } from './NavigationParamList';
import { NativeStackNavigationProp } from 'react-nativescript-navigation';
import { DataService, ConversationData, Message } from '~/service/data';

type ConversationProps = {
    route: RouteProp<MainStackParamList, 'conversation'>,
    navigation: NativeStackNavigationProp<MainStackParamList, 'conversation'>,
}

interface State {
    messages: Message[],
    conversation: ConversationData
}

export class Conversation extends React.Component<ConversationProps, State> {
    constructor(prop) {
        super(prop);
        const conversationId = this.props.route.params.id;
        this.state = {
            messages: DataService.getMessages(conversationId),
            conversation: DataService.getConversation(conversationId)
        }
    }

    addMessage(message: string) {
        const conversationId = this.props.route.params.id;

        DataService.addMessage(message);

        this.setState({ messages: DataService.getMessages(conversationId) });
    }

    render() {
        const actionBtnStyle = {
            width: 32,
            height: 32,
            fontSize: 13,
            borderRadius: '100%',
            color: '#FFFFFF',
            background: '#878BCA'
        };

        return (
            <stackLayout className="page">
                <flexboxLayout
                    padding="0 24"
                    justifyContent="space-between"
                >
                    <button
                        backgroundColor="transparent"
                        color="#878ABE"
                        text="Back"
                        onTap={() => this.props.navigation.goBack()}
                    />
                    <button
                        backgroundColor="transparent"
                        color="#878ABE"
                        text="Search"
                    />
                </flexboxLayout>

                <gridLayout
                    rows="auto"
                    columns="*, auto, auto"
                    padding="0 24"
                >
                    <label
                        text={this.state.conversation.firstName + '\n' + this.state.conversation.lastName}
                        textWrap="true"
                        className="h1"
                    />
                    <button
                        style={actionBtnStyle}
                        col={1}
                        className="fas"
                        marginRight="24"
                        text="&#xf095;"
                    />
                    <button
                        style={actionBtnStyle}
                        col={2}
                        className="fas"
                        text="&#xf03d;"
                    />
                </gridLayout>

                <ConversationMessages messages={this.state.messages}  onSubmit={(message: string) => this.addMessage(message)}></ConversationMessages>
            </stackLayout>
        );
    }
}
