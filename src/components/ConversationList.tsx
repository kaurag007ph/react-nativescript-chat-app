import { ItemEventData } from '@nativescript/core';
import * as React from 'react'
import { ListView } from 'react-nativescript';
import { ConversationData } from '~/service/data';
import { Avatar } from './Avatar';

export class ConversationList extends React.Component<{ conversations: ConversationData[], itemSelected: (d: any) => void }> {
    render() {
        return (
            <stackLayout className="container">
                <ListView
                    items={this.props.conversations}
                    separatorColor="transparent"
                    height="100%"
                    onItemTap={(args: ItemEventData) => this.props.itemSelected(args.index)}
                    cellFactory={(conversation: ConversationData) => (
                        <stackLayout orientation="horizontal" padding="12 24" verticalAlignment="middle">
                            <Avatar width={62} height={62} photo={conversation.photo} bgColor={conversation.bgColor} />
                            <gridLayout rows="auto, auto" columns="*, auto" verticalAlignment="middle">
                                <label
                                    col={0}
                                    className="primary-lbl name"
                                    text={conversation.firstName + ' ' + conversation.lastName}
                                />
                                <label
                                    row={1}
                                    colSpan={2}
                                    className="primary-lbl"
                                    text={conversation.message}
                                />
                                <label
                                    col={1}
                                    className="time"
                                    text={conversation.date.getHours() + ':' + conversation.date.getMinutes()}
                                />
                            </gridLayout>
                      </stackLayout>
                    )}
                />
            </stackLayout>
        );
    }
}
