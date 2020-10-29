import * as React from 'react'

export class Avatar extends React.Component<{
    width?: number;
    height?: number;
    margin?: string;
    padding?: string;
    bgColor?: string;
    photo?: string;
}> {
    static defaultProps = {
        width: 56,
        height: 56,
        margin: 8,
        padding: 8,
        bgColor: '#C4C4C9'
    };

    render() {
        const { width, height, margin, padding, bgColor, photo } = this.props;

        return (
            <stackLayout
                style={{
                    width,
                    height,
                    margin,
                    padding,
                    background: bgColor,
                    borderRadius: "100%"
                }}
            >
                <image src={photo} stretch="aspectFit"></image>
            </stackLayout>
        );
    }
}
