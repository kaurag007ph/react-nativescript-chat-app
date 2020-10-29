import * as React from 'react'
import { Avatar } from './Avatar';
import { Recent } from '~/service/data';

export class Recents extends React.Component<{ recents: Recent[]}> {
    render() {
        return (
            <scrollView orientation="horizontal" height="60" scrollBarIndicatorVisible="false">
                <stackLayout orientation="horizontal" paddingLeft="24">
                    <button
                        className="fas"
                        width="56"
                        height="56"
                        fontSize="18"
                        borderRadius="100%"
                        color="#fff"
                        margin="0 12 0 0"
                        background="rgb(134, 137, 203)"
                        text="&#xf002;"
                    />
                    { this.props.recents.map(recent => <Avatar key={recent.id}  photo={recent.photo} bgColor={recent.bgColor} padding="8"></Avatar>) }
                </stackLayout>
            </scrollView>
        );
    }
}
