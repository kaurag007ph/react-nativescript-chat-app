import * as React from 'react';
import { Recents } from '~/components/Recents';
import { ConversationList } from '~/components/ConversationList';
import { NativeStackNavigationProp } from 'react-nativescript-navigation';
import { MainStackParamList } from './NavigationParamList';
import { DataService, Recent, ConversationData } from '../service/data';


type ConversationScreenProps = {
    navigation: NativeStackNavigationProp<MainStackParamList, 'conversations'>,
}

interface State {
    recents: Recent[];
    conversations: ConversationData[]
}

export class Conversations extends React.Component<ConversationScreenProps, State> {
    constructor(props) {
        super(props);

        this.state = {
            recents: DataService.recents,
            conversations: DataService.conversations
        }
    }
    selectConversation(index: number) {
        this.props.navigation.push('conversation', { id: this.state.conversations[index].id});
    }
    render() {
        return (
            <stackLayout className="page">
                <label
                    className="h1"
                    textWrap="true"
                    margin={24}
                >
                    Chat with &#xA;your friends
                </label>

                <Recents recents={this.state.recents}/>
                <ConversationList conversations={this.state.conversations} itemSelected={(index) => this.selectConversation(index)}/>
            </stackLayout>
        );
    }
}
